let FormData = require("form-data");

/**
 *  Repository object used to interact with the CASS Repository web services.
 *  Should be used for all CRUD and search operations
 * 
 *  @author fritz.ray@eduworks.com
 *  @module com.eduworks.ec
 *  @class EcRepository
 */
module.exports = class EcRepository {
    constructor(){
        EcRepository.repos.push(this);
    }
    static caching = false;
    static cachingSearch = false;
    static unsigned = false;
    static alwaysTryUrl = false;
    static cache = new Object();
    static fetching = new Object();
    static repos = new Array();
    adminKeys = null;
    selectedServer = null;
    autoDetectFound = false;
    timeOffset = 0;
    cassDockerEndpoint = null;
    init = function(selectedServer, success, failure) {
        this.selectedServer = selectedServer;
        return this.negotiateTimeOffset(success, failure);
    };
    negotiateTimeOffset = function(success, failure) {
        var oldTimeout = EcRemote.timeout;
        EcRemote.timeout = 500;
        var me = this;
        var successCheck = function(p1) {
            if (p1 != null) {
                if ((p1)["ping"] == "pong") {
                    if ((p1)["time"] != null) 
                        me.timeOffset = (new Date().getTime()) - ((p1)["time"]);
                    return me.buildKeyForwardingTable(success, failure);
                }
            }
        };
        var failureCheck = function(p1) {
            if (p1 != null) {
                if (p1 != "") {
                    if (p1.indexOf("pong") != -1) 
                        if ((p1)["time"] != null) 
                            me.timeOffset = (new Date().getTime()) - ((p1)["time"]);
                    return me.buildKeyForwardingTable(success, failure);
                }
            }
        };
        EcRemote.timeout = oldTimeout;
        return EcRemote.getExpectingObject(this.selectedServer, "ping").then(successCheck).catch(failureCheck);
    };
    buildKeyForwardingTable = function(success, failure) {
        var params = new Object();
        (params)["size"] = 10000;
        return EcRepository.searchAs(this, "*", function() {
            return new EcRekeyRequest();
        }, function(array) {
            var rekeyRequests = array;
            for (var i = 0; i < rekeyRequests.length; i++) {
                rekeyRequests[i].addRekeyRequestToForwardingTable();
            }
            if (success != null) 
                success();
        }, failure, params);
    };
    /**
     *  Gets a JSON-LD object from the place designated by the URI.
     *  <p>
     *  Uses a signature sheet gathered from {@link EcIdentityManager}.
     * 
     *  @param {String}                               url URL of the remote object.
     *  @param {Callback1<EcRemoteLinkedData>}success Event to call upon
     *                                                successful retrieval.
     *  @param {Callback1<String>}                    failure Event to call upon spectacular
     *                                                failure.
     *  @memberOf EcRepository
     *  @method get
     *  @static
     */
    static get = function(url, success, failure) {
        if (url == null) {
            failure("URL is null. Cannot EcRepository.get");
            return;
        }
        if (url.toLowerCase().indexOf("http") != 0) {
            failure("URL does not begin with http. Cannot EcRepository.get");
            return;
        }
        var originalUrl = url;
        if (EcRepository.caching) {
            if ((EcRepository.cache)[url] !== undefined) {
                return cassReturnAsPromise((EcRepository.cache)[originalUrl],success,failure);
            }
        }

        if (!EcRepository.shouldTryUrl(url)) {
            if (EcRepository.repos.length == 1) {
                if (!url.startsWith(EcRepository.repos[0].selectedServer)) 
                    url = EcRemoteLinkedData.veryShortId(EcRepository.repos[0].selectedServer, EcCrypto.md5(url));
            } else {
                return EcRepository.find(url, "Could not locate object. May be due to EcRepository.alwaysTryUrl flag.", new Object(), 0, success, failure);
            }
        }

        var finalUrl = url;
        let p = null;
        if (EcRepository.unsigned) {
            p = EcRemote.getExpectingObject(finalUrl);
        } else {            
            p = EcIdentityManager.signatureSheetAsync(60000 + offset, url).then((signatureSheet)=>{
                var fd = new FormData();
                fd.append("signatureSheet", signatureSheet);
                return EcRemote.postExpectingObject(finalUrl, null, fd);
            });
        }
        p = p.then((data) => {
            return EcRepository.getHandleData(data, originalUrl, success, failure, finalUrl);
        }).catch((error)=>{
            return EcRepository.find(originalUrl, error, new Object(), 0, success, failure);
        })
    };
    static setOffset = function(url) {
        var offset = 0;
        for (var i = 0; i < EcRepository.repos.length; i++) {
            if (url.indexOf(EcRepository.repos[i].selectedServer) != -1) {
                offset = EcRepository.repos[i].timeOffset;
            }
        }
        return offset;
    };
    static getHandleData = function(p1, originalUrl, success, failure, finalUrl) {
        var d = new EcRemoteLinkedData("", "");
        d.copyFrom(p1);
        if (d.getFullType() == null) {
            return EcRepository.find(originalUrl, JSON.stringify(p1), new Object(), 0, success, failure);
        }
        if (EcRepository.caching) {
            (EcRepository.cache)[finalUrl] = d;
            if (d.id != null) 
                (EcRepository.cache)[d.id] = d;
        }
        return cassReturnAsPromise(d,success,failure);
    };
    static shouldTryUrl = function(url) {
        if (url == null) 
            return false;
        if (EcRepository.alwaysTryUrl) 
            return true;
        if (EcRepository.repos.length == 0) 
            return true;
        var validUrlFound = false;
        for (var i = 0; i < EcRepository.repos.length; i++) {
            if (EcRepository.repos[i].selectedServer == null) 
                continue;
            validUrlFound = true;
        }
        if (!validUrlFound) 
            return true;
        return false;
    };
    static find = function(url, error, history, i, success, failure) {
        if (isNaN(i) || i == undefined || i > EcRepository.repos.length || EcRepository.repos[i] == null) {
            delete (EcRepository.fetching)[url];
            if (failure != null) 
                failure(error);
            return;
        }
        var repo = EcRepository.repos[i];
        if (repo.selectedServer == null) {
            return EcRepository.find(url, error, history, i + 1, success, failure);
        }
        if (((history)[repo.selectedServer]) == true) {
            return EcRepository.find(url, error, history, i + 1, success, failure);
        }
        (history)[repo.selectedServer] = true;
        let p = repo.search("@id:\"" + url + "\"", null);
        p = p.then(function(strings) {
            if (strings == null || strings.length == 0) 
                EcRepository.find(url, error, history, i + 1, success, failure);
            else {
                var done = false;
                for (var i = 0; i < strings.length; i++) {
                    if (strings[i].id == url || strings[i].shortId() == url) {
                        if (done) 
                            log("Searching for exact ID:" + url + ", found more than one@:" + repo.selectedServer);
                        done = true;
                        delete (EcRepository.fetching)[url];
                        if (EcRepository.caching) {
                            (EcRepository.cache)[url] = strings[i];
                        }
                        return strings[i];
                    }
                }
                if (done)
                    return null;
                return EcRepository.find(url, error, history, i + 1, success, failure);
            }
        }).catch(function(s) {
            return EcRepository.find(url, s, history, i + 1, success, failure);
        });
        return cassPromisify(p,success,failure);
    };
    /**
     *  Escapes a search query
     * 
     *  @param {String} query Query string to escape
     *  @return {String} Escaped query string
     *  @memberOf EcRepository
     *  @method escapeSearch
     *  @static
     */
    static escapeSearch = function(query) {
        var s = null;
        s = (query.split("\\")).join("\\\\");
        s = (s.split("-")).join("\\-");
        s = (s.split("=")).join("\\=");
        s = (s.split("&&")).join("\\&&");
        s = (s.split("||")).join("\\||");
        s = (s.split("<")).join("\\<");
        s = (s.split(">")).join("\\>");
        s = (s.split("|")).join("\\|");
        s = (s.split("(")).join("\\(");
        s = (s.split(")")).join("\\)");
        s = (s.split("{")).join("\\{");
        s = (s.split("}")).join("\\}");
        s = (s.split("[")).join("\\[");
        s = (s.split("]")).join("\\]");
        s = (s.split("^")).join("\\^");
        s = (s.split("\"")).join("\\\"");
        s = (s.split("~")).join("\\~");
        s = (s.split("*")).join("\\*");
        s = (s.split("?")).join("\\?");
        s = (s.split(":")).join("\\:");
        s = (s.split("/")).join("\\/");
        s = (s.split("+")).join("\\+");
        return s;
    };
    /**
     *  Attempts to save a piece of data.
     *  <p>
     *  Uses a signature sheet informed by the owner field of the data.
     * 
     *  @param {EcRemoteLinkedData} data Data to save to the location designated
     *                              by its id.
     *  @param {Callback1<String>}  success Callback triggered on successful save
     *  @param {Callback1<String>}  failure Callback triggered if error during
     *                              save
     *  @memberOf EcRepository
     *  @method save
     *  @static
     */
    static save = function(data, success, failure) {
        return EcRepository._save(data, success, failure, null);
    };
    /**
     *  Attempts to save a piece of data. If the @id of the data is not of this server, will register the data to the server.
     *  <p>
     *  Uses a signature sheet informed by the owner field of the data.
     * 
     *  @param {EcRemoteLinkedData} data Data to save to the location designated
     *                              by its id.
     *  @param {Callback1<String>}  success Callback triggered on successful save
     *  @param {Callback1<String>}  failure Callback triggered if error during
     *                              save
     *  @memberOf EcRepository
     *  @method save
     *  @static
     */
    saveTo = function(data, success, failure) {
        return EcRepository._save(data, success, failure, this);
    };
    /**
     *  Attempts to save a piece of data. Does some checks before saving to
     *  ensure the data is valid. This version does not send a console warning,
     *  <p>
     *  Uses a signature sheet informed by the owner field of the data.
     * 
     *  @param {EcRemoteLinkedData} data Data to save to the location designated
     *                              by its id.
     *  @param {Callback1<String>}  success Callback triggered on successful save
     *  @param {Callback1<String>}  failure Callback triggered if error during
     *                              save
     *  @memberOf EcRepository
     *  @method _save
     *  @static
     */
    static _save = function(data, success, failure, repo) {
        if (data.invalid()) {
            var msg = "Cannot save data. It is missing a vital component.";
            throw msg;
        }
        if (data.reader != null && data.reader.length == 0) {
            delete (data)["reader"];
        }
        if (data.owner != null && data.owner.length == 0) {
            delete (data)["owner"];
        }
        if (EcEncryptedValue.encryptOnSave(data.id, null) && !data.isAny(new EcEncryptedValue().getTypes())) {
            var encrypted = EcEncryptedValue.toEncryptedValue(data, false);
            EcIdentityManager.sign(encrypted);
            return EcRepository._saveWithoutSigning(encrypted, success, failure, repo);
        } else {
            EcIdentityManager.sign(data);
            return EcRepository._saveWithoutSigning(data, success, failure, repo);
        }
    };
    /**
     *  Attempts to save many pieces of data. Does some checks before saving to
     *  ensure the data is valid. This version does not send a console warning,
     *  <p>
     *  Uses a signature sheet informed by the owner field of the data.
     * 
     *  @param {Array<EcRemoteLinkedData>} data Data to save to the location designated
     *                                     by its id.
     *  @param {Callback1<String>}         success Callback triggered on successful save
     *  @param {Callback1<String>}         failure Callback triggered if error during
     *                                     save
     *  @memberOf EcRepository
     *  @method multiput
     *  @static
     */
    multiput = function(data, success, failure) {
        var me = this;
        for (var i = 0; i < data.length; i++) {
            var d = data[i];
            if (d.invalid()) {
                var msg = "Cannot save data. It is missing a vital component.";
                if (failure != null) {
                    failure(msg);
                } else {
                    throw msg;
                }
                return null;
            }
            if (d.reader != null && d.reader.length == 0) {
                delete (d)["reader"];
            }
            if (d.owner != null && d.owner.length == 0) {
                delete (d)["owner"];
            }
        }
        var allOwners = new Array();
        var serialized = new Array();
        for (var i = 0; i < data.length; i++) {
            var d = data[i];
            if (EcEncryptedValue.encryptOnSave(d.id, null) && !d.isAny(new EcEncryptedValue().getTypes())) {
                var encrypted = EcEncryptedValue.toEncryptedValue(d, false);
                EcIdentityManager.sign(encrypted);
                data[i] = encrypted;
                d = encrypted;
            } else {
                EcIdentityManager.sign(d);
            }
            if (EcRepository.caching) {
                delete (EcRepository.cache)[d.id];
                delete (EcRepository.cache)[d.shortId()];
            }
            if (d.invalid()) {
                failure("Data is malformed.");
                return;
            }
            if (EcRepository.alwaysTryUrl || this.shouldTryUrl(d.id) || d.id.indexOf(this.selectedServer) != -1) 
                d.updateTimestamp();
            if (d.owner != null) 
                for (var j = 0; j < d.owner.length; j++) 
                    EcArray.setAdd(allOwners, d.owner[j]);
            serialized.push(JSON.parse(d.toJson()));
        }
        var fd = new FormData();
        fd.append("data", JSON.stringify(serialized));
        var afterSignatureSheet = function(signatureSheet) {
            fd.append("signatureSheet", signatureSheet);
            var server = me.selectedServer;
            if (me.cassDockerEndpoint != null) {
                server = me.cassDockerEndpoint;
            }
            EcRemote.postExpectingString(server, "sky/repo/multiPut", fd, success, failure);
        };
        if (EcRemote.async == false) {
            var signatureSheet;
            if (allOwners != null && allOwners.length > 0) {
                signatureSheet = EcIdentityManager.signatureSheetFor(allOwners, 60000 + this.timeOffset, this.selectedServer);
            } else {
                signatureSheet = EcIdentityManager.signatureSheet(60000 + this.timeOffset, this.selectedServer);
            }
            afterSignatureSheet(signatureSheet);
        } else if (allOwners != null && allOwners.length > 0) {
            EcIdentityManager.signatureSheetForAsync(allOwners, 60000 + this.timeOffset, this.selectedServer, afterSignatureSheet, failure);
        } else {
            EcIdentityManager.signatureSheetAsync(60000 + this.timeOffset, this.selectedServer, afterSignatureSheet, failure);
        }
    };
    /**
     *  Attempts to save a piece of data without signing it.
     *  <p>
     *  Uses a signature sheet informed by the owner field of the data.
     * 
     *  @param {EcRemoteLinkedData} data Data to save to the location designated
     *                              by its id.
     *  @param {Callback1<String>}  success Callback triggered on successful save
     *  @param {Callback1<String>}  failure Callback triggered if error during
     *                              save
     *  @memberOf EcRepository
     *  @method _saveWithoutSigning
     *  @static
     */
    static _saveWithoutSigning = function(data, success, failure, repo) {
        if (EcRepository.caching) {
            delete (EcRepository.cache)[data.id];
            delete (EcRepository.cache)[data.shortId()];
            if (repo != null) 
                delete (EcRepository.cache)[EcRemoteLinkedData.veryShortId(repo.selectedServer, data.getGuid())];
        }
        if (data.invalid()) {
            failure("Data is malformed.");
            return;
        }
        console.log(repo)
        if (EcRepository.alwaysTryUrl || repo == null || EcRepository.shouldTryUrl(data.id) || (repo != null && data.id.indexOf(repo.selectedServer) != -1)) 
            data.updateTimestamp();
        var fd = new FormData();
        fd.append("data", data.toJson());
        var afterSignatureSheet = function(signatureSheet) {
            fd.append("signatureSheet", signatureSheet);
            if (!EcRepository.alwaysTryUrl) {
                if (repo != null) {
                    if (data.id.indexOf(repo.selectedServer) != -1) {
                        EcRemote.postExpectingString(data.id, "", fd, success, failure);
                        return;
                    }
                    if (!EcRepository.shouldTryUrl(data.id) || data.id.indexOf(repo.selectedServer) == -1) {
                        EcRemote.postExpectingString(EcRemote.urlAppend(repo.selectedServer, "data/" + data.getDottedType() + "/" + EcCrypto.md5(data.shortId())), "", fd, success, failure);
                        return;
                    }
                }
            }
            EcRemote.postExpectingString(data.id, "", fd, success, failure);
        };
        var offset = 0;
        if (repo == null) {
            offset = EcRepository.setOffset(data.id);
        } else {
            offset = repo.timeOffset;
        }
        if (EcRemote.async == false) {
            var signatureSheet;
            if (data.owner != null && data.owner.length > 0) {
                signatureSheet = EcIdentityManager.signatureSheetFor(data.owner, 60000 + offset, data.id);
            } else {
                signatureSheet = EcIdentityManager.signatureSheet(60000 + offset, data.id);
            }
            afterSignatureSheet(signatureSheet);
        } else if (data.owner != null && data.owner.length > 0) {
            EcIdentityManager.signatureSheetForAsync(data.owner, 60000 + offset, data.id, afterSignatureSheet, failure);
        } else {
            EcIdentityManager.signatureSheetAsync(60000 + offset, data.id, afterSignatureSheet, failure);
        }
    };
    /**
     *  Attempts to delete a piece of data.
     *  <p>
     *  Uses a signature sheet informed by the owner field of the data.
     * 
     *  @param {EcRemoteLinkedData} data Data to save to the location designated
     *                              by its id.
     *  @param {Callback1<String>}  success Callback triggered on successful
     *                              delete
     *  @param {Callback1<String>}  failure Callback triggered if error during
     *                              delete
     *  @memberOf EcRepository
     *  @method _delete
     *  @static
     */
    static _delete = function(data, success, failure) {
        EcRepository.DELETE(data, success, failure);
    };
    /**
     *  Attempts to delete a piece of data.
     *  <p>
     *  Uses a signature sheet informed by the owner field of the data.
     * 
     *  @param {EcRemoteLinkedData} data Data to save to the location designated
     *                              by its id.
     *  @param {Callback1<String>}  success Callback triggered on successful
     *                              delete
     *  @param {Callback1<String>}  failure Callback triggered if error during
     *                              delete
     *  @memberOf EcRepository
     *  @method DELETE
     *  @static
     */
    static DELETE = function(data, success, failure) {
        if (EcRepository.caching) {
            delete (EcRepository.cache)[data.id];
            delete (EcRepository.cache)[data.shortId()];
        }
        var targetUrl;
        targetUrl = data.shortId();
        var offset = EcRepository.setOffset(data.id);
        if (data.owner != null && data.owner.length > 0) {
            if (EcRemote.async) {
                EcIdentityManager.signatureSheetForAsync(data.owner, 60000 + offset, data.id, function(signatureSheet) {
                    if (signatureSheet.length == 2) {
                        for (var i = 0; i < EcRepository.repos.length; i++) {
                            if (data.id.indexOf(EcRepository.repos[i].selectedServer) != -1) {
                                EcRepository.repos[i].deleteRegistered(data, success, failure);
                                return;
                            }
                        }
                        if (failure != null) 
                            failure("Cannot delete object without a signature. If deleting from a server, use the non-static deleteRegistered");
                    } else 
                        EcRemote._delete(targetUrl, signatureSheet, success, failure);
                }, failure);
            } else {
                var signatureSheet = EcIdentityManager.signatureSheetFor(data.owner, 60000 + offset, data.id);
                if (signatureSheet.length == 2) {
                    for (var i = 0; i < EcRepository.repos.length; i++) {
                        if (data.id.indexOf(EcRepository.repos[i].selectedServer) != -1) {
                            EcRepository.repos[i].deleteRegistered(data, success, failure);
                            return;
                        }
                    }
                    if (failure != null) 
                        failure("Cannot delete object without a signature. If deleting from a server, use the non-static deleteRegistered");
                } else 
                    EcRemote._delete(targetUrl, signatureSheet, success, failure);
            }
        } else {
            EcRemote._delete(targetUrl, "[]", success, failure);
        }
    };
    /**
     *  Attempts to delete a piece of data.
     *  <p>
     *  Uses a signature sheet informed by the owner field of the data.
     * 
     *  @param {EcRemoteLinkedData} data Data to save to the location designated
     *                              by its id.
     *  @param {Callback1<String>}  success Callback triggered on successful
     *                              delete
     *  @param {Callback1<String>}  failure Callback triggered if error during
     *                              delete
     *  @memberOf EcRepository
     *  @method DELETE
     *  @static
     */
    deleteRegistered = function(data, success, failure) {
        if (EcRepository.caching) {
            delete (EcRepository.cache)[data.id];
            delete (EcRepository.cache)[data.shortId()];
            delete (EcRepository.cache)[EcRemoteLinkedData.veryShortId(this.selectedServer, data.getGuid())];
        }
        var targetUrl;
        if (EcRepository.shouldTryUrl(data.id) || data.id.indexOf(this.selectedServer) != -1) 
            targetUrl = EcRemote.urlAppend(this.selectedServer, "data/" + data.getDottedType() + "/" + data.getGuid());
         else 
            targetUrl = EcRemote.urlAppend(this.selectedServer, "data/" + data.getDottedType() + "/" + EcCrypto.md5(data.shortId()));
        var me = this;
        if (data.owner != null && data.owner.length > 0) {
            if (EcRemote.async) {
                EcIdentityManager.signatureSheetForAsync(data.owner, 60000 + this.timeOffset, data.id, function(signatureSheet) {
                    if (signatureSheet.length == 2 && me.adminKeys != null) {
                        EcIdentityManager.signatureSheetForAsync(me.adminKeys, 60000 + me.timeOffset, data.id, function(signatureSheet) {
                            EcRemote._delete(targetUrl, signatureSheet, success, failure);
                        }, failure);
                    } else 
                        EcRemote._delete(targetUrl, signatureSheet, success, failure);
                }, failure);
            } else {
                var signatureSheet = EcIdentityManager.signatureSheetFor(data.owner, 60000 + me.timeOffset, data.id);
                if (signatureSheet.length == 2 && me.adminKeys != null) {
                    signatureSheet = EcIdentityManager.signatureSheetFor(me.adminKeys, 60000 + me.timeOffset, data.id);
                    EcRemote._delete(targetUrl, signatureSheet, success, failure);
                } else 
                    EcRemote._delete(targetUrl, signatureSheet, success, failure);
            }
        } else {
            EcRemote._delete(targetUrl, "[]", success, failure);
        }
    };
    /**
     *  Retrieves data from the server and caches it for use later during the
     *  application. This should be called before the data is needed if possible,
     *  so loading displays can be faster.
     * 
     *  @param {String[]}  urls List of Data ID Urls that should be precached
     *  @param {Callback0} success Callback triggered once all of the data has
     *                     been retrieved
     *  @memberOf EcRepository
     *  @method precache
     */
    precache = function(urls, success) {
        if (urls == null || urls.length == 0) {
            if (success != null) {
                success();
            }
            return;
        }
        var cacheUrls = new Array();
        for (var i = 0; i < urls.length; i++) {
            var url = urls[i];
            if ((EcRepository.cache)[url] != null) {} else if (url.startsWith(this.selectedServer)) {
                cacheUrls.push(url.replace(this.selectedServer, "").replace("custom/", ""));
            } else {
                cacheUrls.push("data/" + EcCrypto.md5(url));
            }
        }
        if (cacheUrls.length == 0) {
            if (success != null) {
                success();
            }
            return;
        }
        var fd = new FormData();
        fd.append("data", JSON.stringify(cacheUrls));
        var me = this;
        if (EcRepository.unsigned) {
            this.precachePost(success, cacheUrls, fd, me);
        } else {
            EcIdentityManager.signatureSheetAsync(60000 + this.timeOffset, this.selectedServer, function(p1) {
                fd.append("signatureSheet", p1);
                me.precachePost(success, cacheUrls, fd, me);
            }, null);
        }
    };
    /**
     *  Retrieves data from the server and caches it for use later during the
     *  application. This should be called before the data is needed if possible,
     *  so loading displays can be faster.
     * 
     *  @param {String[]}  urls List of Data ID Urls that should be precached
     *  @param {Callback0} success Callback triggered once all of the data has
     *                     been retrieved
     *  @memberOf EcRepository
     *  @method precachePost
     */
    precachePost = function(success, cacheUrls, fd, me) {
        EcRemote.postExpectingObject(me.selectedServer, "sky/repo/multiGet", fd, function(p1) {
            var results = p1;
            for (var i = 0; i < results.length; i++) {
                var d = new EcRemoteLinkedData(null, null);
                d.copyFrom(results[i]);
                results[i] = d;
                if (EcRepository.caching) {
                    if (!EcRepository.shouldTryUrl(d.id)) {
                        var md5 = EcCrypto.md5(d.shortId());
                        for (var j = 0; j < cacheUrls.length; j++) {
                            var url = cacheUrls[j];
                            if (url.indexOf(md5) != -1) {
                                (EcRepository.cache)[url] = d;
                                break;
                            }
                        }
                    }
                    (EcRepository.cache)[d.shortId()] = d;
                    (EcRepository.cache)[d.id] = d;
                    (EcRepository.cache)[EcRemoteLinkedData.veryShortId(me.selectedServer, d.getGuid())] = d;
                }
            }
            if (success != null) {
                success();
            }
        }, null);
    };
    /**
     *  Returns an array of JSON-LD objects from the places designated by the given URIs.
     *  <p>
     *  Uses a signature sheet gathered from {@link EcIdentityManager}.
     * 
     *  @param {Array<String>}                        urls URLs of the remote objects.
     *  @param {Callback1<Array<EcRemoteLinkedData>>} success Event to call upon
     *                                                successful retrieval.
     *  @param {Callback1<String>}                    failure Event to call upon spectacular
     *                                                failure.
     *  @param {Callback1<Array<EcRemoteLinkedData>>} cachedValues Event to call upon
     *                                                successful retrieval from cache.
     *  @memberOf EcRepository
     *  @method multiget
     */
    multiget = function(urls, success, failure) {
        if (urls == null) {
            if (failure != null) {
                failure("");
            }
            return;
        }
        var results = new Array();
        var me = this;
        if (EcRepository.caching) 
            this.precache(urls, function() {
                var eah = new EcAsyncHelper();
                me.multigetInner(urls, success, results, eah);
            });
         else {
            var eah = new EcAsyncHelper();
            this.multigetInner(urls, success, results, eah);
        }
    };
    multigetInner = function(urls, success, results, eah) {
        eah.each(urls, function(url, done) {
            EcRepository.get(url, function(result) {
                results.push(result);
                done();
            }, function(s) {
                done();
            });
        }, function(urls) {
            success(results);
        });
    };
    /**
     *  Search a repository for JSON-LD compatible data.
     *  <p>
     *  Uses a signature sheet gathered from {@link EcIdentityManager}.
     * 
     *  @param {String}                          query ElasticSearch compatible query string, similar to
     *                                           Google query strings.
     *  @param {Callback1<EcRemoteLinkedData>}   eachSuccess Success event for each
     *                                           found object.
     *  @param {Callback1<EcRemoteLinkedData[]>} success Success event, called
     *                                           after eachSuccess.
     *  @param {Callback1<String>}               failure Failure event.
     *  @memberOf EcRepository
     *  @method search
     */
    search = function(query, eachSuccess, success, failure) {
        this.searchWithParams(query, null, eachSuccess, success, failure);
    };
    /**
     *  Search a repository for JSON-LD compatible data synchronously.
     *  <p>
     *  Uses a signature sheet gathered from {@link EcIdentityManager}.
     * 
     *  @param {String} query ElasticSearch compatible query string, similar to
     *                  Google query strings.
     *  @returns EcRemoteLinkedData[]
     *  @memberOf EcRepository
     *  @method search
     */
    searchBlocking = function(query) {
        return this.searchWithParamsBlocking(query, null);
    };
    /**
     *  Search a repository for JSON-LD compatible data.
     *  <p>
     *  Uses a signature sheet gathered from {@link EcIdentityManager}.
     * 
     *  @param {String}                          query ElasticSearch compatible query string, similar to
     *                                           Google query strings.
     *  @param {Object}                          paramObj Additional parameters that can be used to tailor
     *                                           the search.
     *  @param {Callback1<EcRemoteLinkedData>}   eachSuccess Success event for each
     *                                           found object.
     *  @param {Callback1<EcRemoteLinkedData[]>} success Success event, called
     *                                           after eachSuccess.
     *  @param {Callback1<String>}               failure Failure event.
     *  @memberOf EcRepository
     *  @method searchWithParams
     */
    searchWithParams = function(originalQuery, originalParamObj, eachSuccess, success, failure) {
        var query = originalQuery;
        var paramObj = originalParamObj;
        if (paramObj == null) {
            paramObj = new Object();
        }
        var params = new Object();
        var paramProps = (params);
        query = this.searchParamProps(query, paramObj, paramProps);
        if ((paramObj)["fields"] != null) {
            paramProps["fields"] = (paramObj)["fields"];
        }
        var cacheKey;
        if (EcRepository.cachingSearch) {
            cacheKey = JSON.stringify(paramProps) + query;
            if ((EcRepository.cache)[cacheKey] != null) {
                this.handleSearchResults((EcRepository.cache)[cacheKey], eachSuccess, success, failure);
                return;
            }
            var me = this;
            if (EcRemote.async) {
                if ((EcRepository.fetching)[cacheKey] != null) {
                    if ((EcRepository.fetching)[cacheKey] > new Date().getTime()) {
                        setTimeout(function() {
                            me.searchWithParams(originalQuery, originalParamObj, eachSuccess, success, failure);
                        }, 100);
                        return;
                    }
                }
                (EcRepository.fetching)[cacheKey] = new Date().getTime() + 60000;
            }
        } else {
            cacheKey = null;
        }
        var fd = new FormData();
        fd.append("data", query);
        if (params != null) {
            fd.append("searchParams", JSON.stringify(params));
        }
        var me = this;
        if (EcRepository.unsigned == true || (paramObj)["unsigned"] == true) {
            fd.append("signatureSheet", "[]");
            EcRemote.postExpectingObject(me.selectedServer, "sky/repo/search", fd, function(p1) {
                if (EcRepository.cachingSearch) {
                    (EcRepository.cache)[cacheKey] = p1;
                }
                if (cacheKey != null) {
                    delete (EcRepository.fetching)[cacheKey];
                }
                me.handleSearchResults(p1, eachSuccess, success, failure);
            }, function(p1) {
                if (cacheKey != null) {
                    delete (EcRepository.fetching)[cacheKey];
                }
                if (failure != null) {
                    failure(p1);
                }
            });
        } else 
            EcIdentityManager.signatureSheetAsync(60000 + this.timeOffset, this.selectedServer, function(signatureSheet) {
                fd.append("signatureSheet", signatureSheet);
                EcRemote.postExpectingObject(me.selectedServer, "sky/repo/search", fd, function(p1) {
                    if (EcRepository.cachingSearch) {
                        (EcRepository.cache)[cacheKey] = p1;
                    }
                    if (cacheKey != null) {
                        delete (EcRepository.fetching)[cacheKey];
                    }
                    me.handleSearchResults(p1, eachSuccess, success, failure);
                }, function(p1) {
                    if (cacheKey != null) {
                        delete (EcRepository.fetching)[cacheKey];
                    }
                    if (failure != null) {
                        failure(p1);
                    }
                });
            }, failure);
    };
    /**
     *  Search a repository for JSON-LD compatible data synchronously.
     *  <p>
     *  Uses a signature sheet gathered from {@link EcIdentityManager}.
     * 
     *  @param {String} query ElasticSearch compatible query string, similar to
     *                  Google query strings.
     *  @param {Object} paramObj Additional parameters that can be used to tailor
     *                  the search.
     *  @returns EcRemoteLinkedData[]
     *  @memberOf EcRepository
     *  @method searchWithParams
     */
    searchWithParamsBlocking = function(originalQuery, originalParamObj) {
        var query = originalQuery;
        var paramObj = originalParamObj;
        if (paramObj == null) {
            paramObj = new Object();
        }
        var params = new Object();
        var paramProps = (params);
        query = this.searchParamProps(query, paramObj, paramProps);
        if ((paramObj)["fields"] != null) {
            paramProps["fields"] = (paramObj)["fields"];
        }
        var oldAsync = EcRemote.async;
        EcRemote.async = false;
        var cacheKey;
        cacheKey = JSON.stringify(paramProps) + query;
        if (EcRepository.cachingSearch) {
            if ((EcRepository.cache)[cacheKey] != null) {
                return this.handleSearchResults((EcRepository.cache)[cacheKey], null, null, null);
            }
        }
        var fd = new FormData();
        fd.append("data", query);
        if (params != null) {
            fd.append("searchParams", JSON.stringify(params));
        }
        var me = this;
        if (EcRepository.unsigned == true || (paramObj)["unsigned"] == true) {
            fd.append("signatureSheet", "[]");
            EcRemote.postExpectingObject(me.selectedServer, "sky/repo/search", fd, function(p1) {
                (EcRepository.cache)[cacheKey] = p1;
                if (cacheKey != null) {
                    delete (EcRepository.fetching)[cacheKey];
                }
            }, function(p1) {
                if (cacheKey != null) {
                    delete (EcRepository.fetching)[cacheKey];
                }
                (EcRepository.cache)[cacheKey] = null;
            });
        } else {
            var signatureSheet;
            signatureSheet = EcIdentityManager.signatureSheet(60000 + this.timeOffset, this.selectedServer);
            fd.append("signatureSheet", signatureSheet);
            EcRemote.postExpectingObject(me.selectedServer, "sky/repo/search", fd, function(p1) {
                (EcRepository.cache)[cacheKey] = p1;
                if (cacheKey != null) {
                    delete (EcRepository.fetching)[cacheKey];
                }
            }, function(p1) {
                if (cacheKey != null) {
                    delete (EcRepository.fetching)[cacheKey];
                }
                (EcRepository.cache)[cacheKey] = null;
            });
        }
        var result = this.handleSearchResults((EcRepository.cache)[cacheKey], null, null, null);
        if (!EcRepository.cachingSearch) {
            delete (EcRepository.cache)[cacheKey];
        }
        EcRemote.async = oldAsync;
        return result;
    };
    searchParamProps = function(query, paramObj, paramProps) {
        if ((paramObj)["start"] != null) {
            paramProps["start"] = (paramObj)["start"];
        }
        if ((paramObj)["size"] != null) {
            paramProps["size"] = (paramObj)["size"];
        }
        if ((paramObj)["types"] != null) {
            paramProps["types"] = (paramObj)["types"];
        }
        if ((paramObj)["sort"] != null) {
            paramProps["sort"] = (paramObj)["sort"];
        }
        if ((paramObj)["track_scores"] != null) {
            paramProps["track_scores"] = (paramObj)["track_scores"];
        }
        if ((paramObj)["index_hint"] != null) {
            paramProps["index_hint"] = (paramObj)["index_hint"];
        }
        if ((paramObj)["ownership"] != null) {
            var ownership = (paramObj)["ownership"];
            if (!query.startsWith("(") || !query.endsWith(")")) {
                query = "(" + query + ")";
            }
            if (ownership == "public") {
                query += " AND (_missing_:owner) AND (_missing_:@owner)";
            } else if (ownership == "owned") {
                query += " AND (_exists_:owner OR _exists_:@owner)";
            } else if (ownership == "me") {
                query += " AND (";
                for (var i = 0; i < EcIdentityManager.ids.length; i++) {
                    if (i != 0) {
                        query += " OR ";
                    }
                    var id = EcIdentityManager.ids[i];
                    query += "\\*owner:\"" + id.ppk.toPk().toPem() + "\"";
                }
                query += ")";
            }
        }
        return query;
    };
    /**
     *  Searches known repository endpoints to set the server configuration for
     *  this repositories instance
     * 
     *  @memberOf EcRepository
     *  @method autoDetectRepository
     */
    autoDetectRepositoryAsync = function(success, failure) {
        var protocols = new Array();
        if (typeof window !== "undefined")
        if (window != null) {
            if (window.location != null) {
                if (window.location.protocol == "https:") {
                    protocols.push("https:");
                }
            }
        }
        if (typeof window !== "undefined")
        if (window != null) {
            if (window.location != null) {
                if (window.location.protocol == "http:") {
                    protocols.push("http:");
                    protocols.push("https:");
                }
            }
        }
        if (protocols.length == 0) {
            protocols.push("https:");
            protocols.push("http:");
        }
        var hostnames = new Array();
        var servicePrefixes = new Array();
        if (this.selectedServer != null) {
            var e = window.document.createElement("a");
            (e)["href"] = this.selectedServer;
            hostnames.push((e)["host"]);
            servicePrefixes.push((e)["pathname"]);
        } else {
            if (window.location.host != null) {
                hostnames.push(window.location.host, window.location.host.replace(".", ".service."), window.location.host + ":8080", window.location.host.replace(".", ".service.") + ":8080");
            }
            if (window.location.hostname != null) {
                hostnames.push(window.location.hostname, window.location.hostname.replace(".", ".service."), window.location.hostname + ":8080", window.location.hostname.replace(".", ".service.") + ":8080");
            }
        }
        EcArray.removeDuplicates(hostnames);
        servicePrefixes.push("/" + window.location.pathname.split("/")[1] + "/api/", "/", "/service/", "/api/");
        EcArray.removeDuplicates(servicePrefixes);
        var me = this;
        me.autoDetectFound = false;
        for (var j = 0; j < hostnames.length; j++) {
            for (var k = 0; k < servicePrefixes.length; k++) {
                for (var i = 0; i < protocols.length; i++) {
                    this.autoDetectRepositoryActualAsync(protocols[i] + "//" + hostnames[j] + servicePrefixes[k].replaceAll("//", "/"), success, failure);
                    setTimeout(function() {
                        if (me.autoDetectFound == false) {
                            var servicePrefixes = new Array();
                            servicePrefixes.push("/" + window.location.pathname.split("/")[1] + "/api/custom/", "/api/custom/");
                            EcArray.removeDuplicates(servicePrefixes);
                            for (var j = 0; j < hostnames.length; j++) {
                                for (var k = 0; k < servicePrefixes.length; k++) {
                                    for (var i = 0; i < protocols.length; i++) {
                                        me.autoDetectRepositoryActualAsync(protocols[i] + "//" + hostnames[j] + servicePrefixes[k].replaceAll("//", "/"), success, failure);
                                        setTimeout(function() {
                                            if (me.autoDetectFound == false) 
                                                failure("Could not find service.");
                                        }, 5000);
                                    }
                                }
                            }
                        }
                    }, 5000);
                }
            }
        }
    };
    /**
     *  Searches known repository endpoints to set the server configuration for
     *  this repositories instance
     * 
     *  @memberOf EcRepository
     *  @method autoDetectRepository
     */
    autoDetectRepository = function() {
        EcRemote.async = false;
        var protocols = new Array();
        if (typeof window !== "undefined")
        if (window != null) {
            if (window.location != null) {
                if (window.location.protocol == "https:") {
                    protocols.push("https:");
                }
            }
        }
        if (typeof window !== "undefined")
        if (window != null) {
            if (window.location != null) {
                if (window.location.protocol == "http:") {
                    protocols.push("http:");
                    protocols.push("https:");
                }
            }
        }
        if (protocols.length == 0) {
            protocols.push("https:");
            protocols.push("http:");
        }
        var hostnames = new Array();
        var servicePrefixes = new Array();
        if (this.selectedServer != null && window != null && window.document != null) {
            var e = window.document.createElement("a");
            if (e != null) {
                (e)["href"] = this.selectedServer;
                hostnames.push((e)["host"]);
                servicePrefixes.push((e)["pathname"]);
            }
        } else if (window != null && window.location != null) {
            if (window.location.host != null) {
                hostnames.push(window.location.host, window.location.host.replace(".", ".service."), window.location.host + ":8080", window.location.host.replace(".", ".service.") + ":8080");
            }
            if (window.location.hostname != null) {
                hostnames.push(window.location.hostname, window.location.hostname.replace(".", ".service."), window.location.hostname + ":8080", window.location.hostname.replace(".", ".service.") + ":8080");
            }
        }
        if (typeof window !== "undefined")
        if (window != null) {
            if (window.location != null) {
                servicePrefixes.push("/" + window.location.pathname.split("/")[1] + "/api/");
                servicePrefixes.push("/" + window.location.pathname.split("/")[1] + "/api/custom/");
            }
        }
        if (hostnames.length == 0) {
            hostnames.push("localhost", "localhost:8080");
        }
        servicePrefixes.push("/");
        servicePrefixes.push("/service/");
        servicePrefixes.push("/api/");
        servicePrefixes.push("/api/custom/");
        for (var j = 0; j < hostnames.length; j++) {
            for (var k = 0; k < servicePrefixes.length; k++) {
                for (var i = 0; i < protocols.length; i++) {
                    if (this.autoDetectRepositoryActual(protocols[i] + "//" + hostnames[j] + servicePrefixes[k].replaceAll("//", "/"))) {
                        EcRemote.async = true;
                        return;
                    }
                }
            }
        }
        EcRemote.async = true;
    };
    /**
     *  Handles the actual detection of repository endpoint /ping service
     * 
     *  @param {String} guess The server prefix
     *  @return {boolean} Whether the detection successfully found the endpoint
     *  @memberOf EcRepository
     *  @method autoDetectRepositoryAsync
     *  @private
     */
    autoDetectRepositoryActualAsync = function(guess, success, failure) {
        var me = this;
        var successCheck = function(p1) {
            if (p1 != null) {
                if ((p1)["ping"] == "pong") {
                    if ((p1)["time"] != null) 
                        me.timeOffset = (new Date().getTime()) - ((p1)["time"]);
                    if (me.autoDetectFound == false) {
                        me.selectedServer = guess;
                        me.autoDetectFound = true;
                        success();
                    }
                }
            }
        };
        var failureCheck = function(p1) {
            if (p1 != null) {
                if (!(p1 == "")) {
                    try {
                        if (p1.indexOf("pong") != -1) {
                            if (me.autoDetectFound == false) {
                                me.selectedServer = guess;
                                me.autoDetectFound = true;
                                success();
                            }
                        }
                    }catch (ex) {}
                }
            }
        };
        if (guess != null && guess != "") {
            try {
                EcRemote.getExpectingObject(guess, "ping", successCheck, failureCheck);
            }catch (ex) {}
        }
        return this.autoDetectFound;
    };
    /**
     *  Handles the actual detection of repository endpoint /ping service
     * 
     *  @param {String} guess The server prefix
     *  @return {boolean} Whether the detection successfully found the endpoint
     *  @memberOf EcRepository
     *  @method autoDetectRepositoryActual
     *  @private
     */
    autoDetectRepositoryActual = function(guess) {
        var oldTimeout = EcRemote.timeout;
        EcRemote.timeout = 500;
        var me = this;
        var successCheck = function(p1) {
            if (p1 != null) {
                if ((p1)["ping"] == "pong") {
                    if ((p1)["time"] != null) 
                        me.timeOffset = (new Date().getTime()) - ((p1)["time"]);
                    me.selectedServer = guess;
                    me.autoDetectFound = true;
                }
            }
        };
        var failureCheck = function(p1) {
            if (p1 != null) {
                if (p1 != "") {
                    try {
                        if (p1.indexOf("pong") != -1) {
                            me.selectedServer = guess;
                            me.autoDetectFound = true;
                        }
                    }catch (ex) {}
                }
            }
        };
        if (guess != null && guess != "") {
            try {
                EcRemote.getExpectingObject(guess, "ping", successCheck, failureCheck);
            }catch (ex) {}
        }
        EcRemote.timeout = oldTimeout;
        return this.autoDetectFound;
    };
    /**
     *  Lists all types visible to the current user in the repository
     *  <p>
     *  Uses a signature sheet gathered from {@link EcIdentityManager}.
     * 
     *  @param {Callback1<Object[]>} success Success event
     *  @param {Callback1<String>}   failure Failure event.
     *  @memberOf EcRepository
     *  @method listTypes
     */
    listTypes = function(success, failure) {
        var fd = new FormData();
        fd.append("signatureSheet", EcIdentityManager.signatureSheet(60000 + this.timeOffset, this.selectedServer));
        EcRemote.postExpectingObject(this.selectedServer, "sky/repo/types", fd, function(p1) {
            var results = p1;
            if (success != null) {
                success(results);
            }
        }, failure);
    };
    /**
     *  Backs up the skyrepo elasticsearch database to the server backup directory
     * 
     *  @param {String}            serverSecret Secret string stored on the server to authenticate administrative rights
     *  @param {Callback1<Object>} success Success event
     *  @param {Callback1<String>} failure Failure event.
     *  @memberOf EcRepository
     *  @method backup
     */
    backup = function(serverSecret, success, failure) {
        EcRemote.getExpectingObject(this.selectedServer, "util/backup?secret=" + serverSecret, success, failure);
    };
    /**
     *  Restores the skyrepo elasticsearch backup from the server backup directory
     * 
     *  @param {String}            serverSecret Secret string stored on the server to authenticate administrative rights
     *  @param {Callback1<Object>} success Success event
     *  @param {Callback1<String>} failure Failure event.
     *  @memberOf EcRepository
     *  @method restoreBackup
     */
    restoreBackup = function(serverSecret, success, failure) {
        EcRemote.getExpectingObject(this.selectedServer, "util/restore?secret=" + serverSecret, success, failure);
    };
    /**
     *  Wipes all data from the the skyrepo elasticsearch, can only be restored by using backup restore
     * 
     *  @param {String}            serverSecret Secret string stored on the server to authenticate administrative rights
     *  @param {Callback1<Object>} success Success event
     *  @param {Callback1<String>} failure Failure event.
     *  @memberOf EcRepository
     *  @method wipe
     */
    wipe = function(serverSecret, success, failure) {
        EcRemote.getExpectingObject(this.selectedServer, "util/purge?secret=" + serverSecret, success, failure);
    };
    /**
     *  Handles the search results in search by params, before returning them
     *  with the callback passed into search method
     * 
     *  @param {EcRemoteLinkedData[]}            results Results to handle before returning
     *  @param {Callback1<EcRemoteLinkedData>}   eachSuccess Callback function to
     *                                           trigger for each search result
     *  @param {Callback1<EcRemoteLinkedData[]>} success Callback function to
     *                                           trigger with all search results
     *  @param failure
     *  @memberOf EcRepository
     *  @method handleSearchResults
     *  @private
     */
    handleSearchResults = function(results, eachSuccess, success, failure) {
        if (results == null) {
            if (failure != null) 
                failure("Error in search. See HTTP request for more details.");
            return null;
        }
        for (var i = 0; i < results.length; i++) {
            var d = new EcRemoteLinkedData(null, null);
            d.copyFrom(results[i]);
            results[i] = d;
            if (EcRepository.caching) {
                (EcRepository.cache)[d.shortId()] = d;
                (EcRepository.cache)[d.id] = d;
                (EcRepository.cache)[EcRemoteLinkedData.veryShortId(this.selectedServer, d.getGuid())] = d;
            }
            if (eachSuccess != null) {
                eachSuccess(results[i]);
            }
        }
        if (success != null) {
            success(results);
        }
        return results;
    };
    /**
     *  Fetches the admin keys from the server to compare for check if current
     *  user is an admin user
     * 
     *  @param {Callback1<String[]>} success
     *                               Callback triggered when the admin keys are successfully returned,
     *                               returns an array of the admin public keys
     *  @param {Callback1<String>}   failure
     *                               Callback triggered if error occurs fetching admin keys
     *  @memberOf EcRemoteIdentityManager
     *  @method fetchServerAdminKeys
     */
    fetchServerAdminKeys = function(success, failure) {
        var service;
        if (this.selectedServer.endsWith("/")) {
            service = "sky/admin";
        } else {
            service = "/sky/admin";
        }
        var me = this;
        EcRemote.getExpectingObject(this.selectedServer, service, function(p1) {
            var ary = p1;
            me.adminKeys = new Array();
            for (var i = 0; i < ary.length; i++) {
                me.adminKeys.push(ary[i]);
            }
            success(ary);
        }, function(p1) {
            failure("");
        });
    };
    static getAs = function(id, result, success, failure) {
        EcRepository.get(id, function(p1) {
            if (p1.getClass() == result.getClass()) 
                if (success != null) {
                    success(p1);
                    return;
                }
            EcEncryptedValue.fromEncryptedValueAsync(p1, function(p1) {
                if (p1.isAny(result.getTypes())) {
                    result.copyFrom(p1);
                    if (EcRepository.caching) {
                        (EcRepository.cache)[result.shortId()] = result;
                        (EcRepository.cache)[result.id] = result;
                    }
                    if (success != null) 
                        success(result);
                } else {
                    var msg = "Retrieved object was not a " + result.getFullType();
                    if (failure != null) 
                        failure(msg);
                     else 
                        console.error(msg);
                }
            }, failure);
        }, failure);
    };
    static getBlockingAs = function(id, result) {
        var p1 = EcRepository.getBlocking(id);
        if (p1 == null) 
            return null;
        if (p1.getClass() == result.getClass()) 
            return p1;
        p1 = EcEncryptedValue.fromEncryptedValue(p1);
        if (p1.isAny(result.getTypes())) {
            result.copyFrom(p1);
            if (EcRepository.caching) {
                (EcRepository.cache)[result.shortId()] = result;
                (EcRepository.cache)[result.id] = result;
            }
            return result;
        } else {
            var msg = "Retrieved object was not a " + result.getFullType();
            console.error(msg);
            return null;
        }
    };
    static searchAs = function(repo, query, factory, success, failure, paramObj) {
        if (paramObj == null) 
            paramObj = new Object();
        var template = (factory());
        var queryAdd = template.getSearchStringByType();
        (paramObj)["index_hint"] = "*" + template.type.toLowerCase() + ",*encryptedvalue";
        if (query == null || query == "") 
            query = queryAdd;
         else 
            query = "(" + query + ") AND " + queryAdd;
        repo.searchWithParams(query, paramObj, null, function(p1s) {
            var eah = new EcAsyncHelper();
            if (success != null) {
                eah.eachSet(p1s, function(p1, set) {
                    EcEncryptedValue.fromEncryptedValueAsync(p1, function(p1) {
                        var result = factory();
                        if (p1.isAny(result.getTypes())) {
                            result.copyFrom(p1);
                            set(result);
                        } else {
                            set(null);
                        }
                    }, EcAsyncHelper.setNull(set));
                }, function(results) {
                    success(results);
                });
            }
        }, failure);
    };
}

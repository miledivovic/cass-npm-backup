
const CrudCodeValues = require("./CrudCodeValues");
module.exports = class SubtaskByExternalReference extends EcRemoteLinkedData {
    subtId;
    subtRole;
    name;
    infoCode;
    subtDescr;
    duration;
    maintLoc;
    eiObjState;
    accParam;
    subtaskCircuitBreakerSettingsNonAbstractClasses;
    wcn;
    precSubt;
    inZone;
    subtTgt;
    docRef;
    secs;
    docs;
    rmks;
    applic;
    resources;
    uid;
    uri;
    crud;

    getSubtId() {
        return this.subtId;
    }

    setSubtId(value) {
        this.subtId = value;
    }

    getSubtRole() {
        return this.subtRole;
    }

    setSubtRole(value) {
        this.subtRole = value;
    }

    getName() {
        return this.name;
    }

    setName(value) {
        this.name = value;
    }

    getInfoCode() {
        return this.infoCode;
    }

    setInfoCode(value) {
        this.infoCode = value;
    }

    getSubtDescr() {
        return this.subtDescr;
    }

    setSubtDescr(value) {
        this.subtDescr = value;
    }

    getDuration() {
        return this.duration;
    }

    setDuration(value) {
        this.duration = value;
    }

    getMaintLoc() {
        return this.maintLoc;
    }

    setMaintLoc(value) {
        this.maintLoc = value;
    }

    getEiObjState() {
        if (this.eiObjState == null) {
            this.eiObjState = [];
        }
        return this.eiObjState;
    }

    getAccParam() {
        if (this.accParam == null) {
            this.accParam = [];
        }
        return this.accParam;
    }

    getSubtaskCircuitBreakerSettingsNonAbstractClasses() {
        if (this.subtaskCircuitBreakerSettingsNonAbstractClasses == null) {
            this.subtaskCircuitBreakerSettingsNonAbstractClasses = [];
        }
        return this.subtaskCircuitBreakerSettingsNonAbstractClasses;
    }

    getWcn() {
        if (this.wcn == null) {
            this.wcn = [];
        }
        return this.wcn;
    }

    getPrecSubt() {
        return this.precSubt;
    }

    setPrecSubt(value) {
        this.precSubt = value;
    }

    getInZone() {
        if (this.inZone == null) {
            this.inZone = [];
        }
        return this.inZone;
    }

    getSubtTgt() {
        if (this.subtTgt == null) {
            this.subtTgt = [];
        }
        return this.subtTgt;
    }

    getDocRef() {
        if (this.docRef == null) {
            this.docRef = [];
        }
        return this.docRef;
    }

    getSecs() {
        return this.secs;
    }

    setSecs(value) {
        this.secs = value;
    }

    getDocs() {
        return this.docs;
    }

    setDocs(value) {
        this.docs = value;
    }

    getRmks() {
        return this.rmks;
    }

    setRmks(value) {
        this.rmks = value;
    }

    getApplic() {
        return this.applic;
    }

    setApplic(value) {
        this.applic = value;
    }

    getResources() {
        return this.resources;
    }

    setResources(value) {
        this.resources = value;
    }

    getUid() {
        return this.uid;
    }

    setUid(value) {
        this.uid = value;
    }

    getUri() {
        return this.uri;
    }

    setUri(value) {
        this.uri = value;
    }

    getCrud() {
        if (this.crud == null) {
            return CrudCodeValues.I;
        } else {
            return this.crud;
        }
    }

    setCrud(value) {
        this.crud = value;
    }

    AccParam = class AccParam {
        paraDescr;
        paraValue;
        docs;
        rmks;
        applic;

        getParaDescr() {
            return this.paraDescr;
        }

        setParaDescr(value) {
            this.paraDescr = value;
        }

        getParaValue() {
            if (this.paraValue == null) {
                this.paraValue = [];
            }
            return this.paraValue;
        }

        getDocs() {
            return this.docs;
        }

        setDocs(value) {
            this.docs = value;
        }

        getRmks() {
            return this.rmks;
        }

        setRmks(value) {
            this.rmks = value;
        }

        getApplic() {
            return this.applic;
        }

        setApplic(value) {
            this.applic = value;
        }
    }

    constructor() {
        super("http://www.asd-europe.org/s-series/s3000l", "SubtaskByExternalReference");
    }
};

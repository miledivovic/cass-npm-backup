

const CrudCodeValues = require("./CrudCodeValues");
module.exports = class AuthorityDrivenTaskRequirement extends EcRemoteLinkedData {
    trId;
    authType;
    auth;
    trRev;
    secs;
    orgInfos;
    docs;
    rmks;
    applic;
    uid;
    crud;

    getTrId() {
        return this.trId;
    }

    setTrId(value) {
        this.trId = value;
    }

    getAuthType() {
        return this.authType;
    }

    setAuthType(value) {
        this.authType = value;
    }

    getAuth() {
        return this.auth;
    }

    setAuth(value) {
        this.auth = value;
    }

    getTrRev() {
        if (this.trRev == null) {
            this.trRev = [];
        }
        return this.trRev;
    }

    getSecs() {
        return this.secs;
    }

    setSecs(value) {
        this.secs = value;
    }

    getOrgInfos() {
        return this.orgInfos;
    }

    setOrgInfos(value) {
        this.orgInfos = value;
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

    getUid() {
        return this.uid;
    }

    setUid(value) {
        this.uid = value;
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

    constructor() {
        super("http://www.asd-europe.org/s-series/s3000l", "AuthorityDrivenTaskRequirement");
    }
};

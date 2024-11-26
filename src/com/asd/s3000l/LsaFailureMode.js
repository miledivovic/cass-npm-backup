
const CrudCodeValues = require("./CrudCodeValues");
module.exports = class LsaFailureMode extends EcRemoteLinkedData {
    fmId;
    fmDescr;
    failRte;
    detectRtg;
    detectDescr;
    lznRtg;
    lznDescr;
    isolRte;
    failureModeEffectNonAbstractClasses;
    techFmRef;
    orgInfos;
    docs;
    rmks;
    applic;
    uid;
    crud;

    getFmId() {
        return this.fmId;
    }

    setFmId(value) {
        this.fmId = value;
    }

    getFmDescr() {
        return this.fmDescr;
    }

    setFmDescr(value) {
        this.fmDescr = value;
    }

    getFailRte() {
        if (this.failRte == null) {
            this.failRte = [];
        }
        return this.failRte;
    }

    getDetectRtg() {
        if (this.detectRtg == null) {
            this.detectRtg = [];
        }
        return this.detectRtg;
    }

    getDetectDescr() {
        return this.detectDescr;
    }

    setDetectDescr(value) {
        this.detectDescr = value;
    }

    getLznRtg() {
        return this.lznRtg;
    }

    setLznRtg(value) {
        this.lznRtg = value;
    }

    getLznDescr() {
        return this.lznDescr;
    }

    setLznDescr(value) {
        this.lznDescr = value;
    }

    getIsolRte() {
        return this.isolRte;
    }

    setIsolRte(value) {
        this.isolRte = value;
    }

    getFailureModeEffectNonAbstractClasses() {
        if (this.failureModeEffectNonAbstractClasses == null) {
            this.failureModeEffectNonAbstractClasses = [];
        }
        return this.failureModeEffectNonAbstractClasses;
    }

    getTechFmRef() {
        if (this.techFmRef == null) {
            this.techFmRef = [];
        }
        return this.techFmRef;
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
        super("http://www.asd-europe.org/s-series/s3000l", "LsaFailureMode");
    }
};


const CrudCodeValues = require("./CrudCodeValues");
module.exports = class LearningObjectiveTrainingComponent extends EcRemoteLinkedData {
    compSeqNr;
    compName;
    media;
    method;
    resRqmt;
    loDepend;
    assessmnts;
    orgInfos;
    docs;
    rmks;
    uid;
    uri;
    crud;

    getCompSeqNr() {
        return this.compSeqNr;
    }

    setCompSeqNr(value) {
        this.compSeqNr = value;
    }

    getCompName() {
        if (this.compName == null) {
            this.compName = [];
        }
        return this.compName;
    }

    getMedia() {
        return this.media;
    }

    setMedia(value) {
        this.media = value;
    }

    getMethod() {
        return this.method;
    }

    setMethod(value) {
        this.method = value;
    }

    getResRqmt() {
        if (this.resRqmt == null) {
            this.resRqmt = [];
        }
        return this.resRqmt;
    }

    getLoDepend() {
        if (this.loDepend == null) {
            this.loDepend = [];
        }
        return this.loDepend;
    }

    getAssessmnts() {
        return this.assessmnts;
    }

    setAssessmnts(value) {
        this.assessmnts = value;
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

    constructor() {
        super("http://www.asd-europe.org/s-series/s3000l", "LearningObjectiveTrainingComponent");
    }
};

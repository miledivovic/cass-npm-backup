
const CrudCodeValues = require("./CrudCodeValues");
module.exports = class JobPosition extends EcRemoteLinkedData {
    jobPosName;
    jobPosDescr;
    trainPopDef;
    ksaGaps;
    orgInfos;
    docs;
    rmks;
    uid;
    uri;
    crud;

    getJobPosName() {
        if (this.jobPosName == null) {
            this.jobPosName = [];
        }
        return this.jobPosName;
    }

    getJobPosDescr() {
        if (this.jobPosDescr == null) {
            this.jobPosDescr = [];
        }
        return this.jobPosDescr;
    }

    getTrainPopDef() {
        return this.trainPopDef;
    }

    setTrainPopDef(value) {
        this.trainPopDef = value;
    }

    getKsaGaps() {
        return this.ksaGaps;
    }

    setKsaGaps(value) {
        this.ksaGaps = value;
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
        super("http://www.asd-europe.org/s-series/s3000l", "JobPosition");
    }
};

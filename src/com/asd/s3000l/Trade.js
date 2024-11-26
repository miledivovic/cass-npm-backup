
const CrudCodeValues = require("./CrudCodeValues");
module.exports = class Trade extends EcRemoteLinkedData {
    tradeName;
    skillLevel;
    trainPopDef;
    ksaGaps;
    orgInfos;
    docs;
    rmks;
    uid;
    crud;

    getTradeName() {
        return this.tradeName;
    }

    setTradeName(value) {
        this.tradeName = value;
    }

    getSkillLevel() {
        if (this.skillLevel == null) {
            this.skillLevel = [];
        }
        return this.skillLevel;
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
        super("http://www.asd-europe.org/s-series/s3000l", "Trade");
    }
};

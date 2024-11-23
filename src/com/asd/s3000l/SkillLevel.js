
const CrudCodeValues = require("./CrudCodeValues");
module.exports = class SkillLevel extends EcRemoteLinkedData {
    skillLevName;
    skillLevDescr;
    trainPopDef;
    ksaGaps;
    docs;
    rmks;
    uid;
    crud;

    getSkillLevName() {
        return this.skillLevName;
    }

    setSkillLevName(value) {
        this.skillLevName = value;
    }

    getSkillLevDescr() {
        return this.skillLevDescr;
    }

    setSkillLevDescr(value) {
        this.skillLevDescr = value;
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
        super("http://www.asd-europe.org/s-series/s3000l", "SkillLevel");
    }
};

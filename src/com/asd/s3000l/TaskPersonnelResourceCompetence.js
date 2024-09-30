
const CrudCodeValues = require("./CrudCodeValues");
module.exports = class TaskPersonnelResourceCompetence extends EcRemoteLinkedData {
    addTrain;
    tradeRef;
    skillLevelRef;
    skillRef;
    jobPosRef;
    applic;
    uid;
    crud;

    getAddTrain() {
        if (this.addTrain == null) {
            this.addTrain = [];
        }
        return this.addTrain;
    }

    getTradeRef() {
        return this.tradeRef;
    }

    setTradeRef(value) {
        this.tradeRef = value;
    }

    getSkillLevelRef() {
        return this.skillLevelRef;
    }

    setSkillLevelRef(value) {
        this.skillLevelRef = value;
    }

    getSkillRef() {
        return this.skillRef;
    }

    setSkillRef(value) {
        this.skillRef = value;
    }

    getJobPosRef() {
        return this.jobPosRef;
    }

    setJobPosRef(value) {
        this.jobPosRef = value;
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

    AddTrain = class AddTrain {
        trainDescr;
        trainMeth;
        docs;
        rmks;

        getTrainDescr() {
            return this.trainDescr;
        }

        setTrainDescr(value) {
            this.trainDescr = value;
        }

        getTrainMeth() {
            return this.trainMeth;
        }

        setTrainMeth(value) {
            this.trainMeth = value;
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
    }

    constructor() {
        super("http://www.asd-europe.org/s-series/s3000l", "TaskPersonnelResourceCompetence");
    }
};

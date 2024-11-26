

const CrudCodeValues = require("./CrudCodeValues");
module.exports = class DiscreteTimeLimit extends EcRemoteLinkedData {
    harmoniz;
    limitDescr;
    trig;
    thld;
    orgInfos;
    docs;
    rmks;
    applic;
    samplByDef;
    samplByValue;
    samplByRo;
    uid;
    crud;

    getHarmoniz() {
        return this.harmoniz;
    }

    setHarmoniz(value) {
        this.harmoniz = value;
    }

    getLimitDescr() {
        return this.limitDescr;
    }

    setLimitDescr(value) {
        this.limitDescr = value;
    }

    getTrig() {
        if (this.trig == null) {
            this.trig = [];
        }
        return this.trig;
    }

    getThld() {
        if (this.thld == null) {
            this.thld = [];
        }
        return this.thld;
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

    getSamplByDef() {
        return this.samplByDef;
    }

    setSamplByDef(value) {
        this.samplByDef = value;
    }

    getSamplByValue() {
        return this.samplByValue;
    }

    setSamplByValue(value) {
        this.samplByValue = value;
    }

    getSamplByRo() {
        return this.samplByRo;
    }

    setSamplByRo(value) {
        this.samplByRo = value;
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

    Thld = class Thld {
        paramThld;
        taskThld;
        sEvntThld;
        fmThld;

        getParamThld() {
            return this.paramThld;
        }

        setParamThld(value) {
            this.paramThld = value;
        }

        getTaskThld() {
            return this.taskThld;
        }

        setTaskThld(value) {
            this.taskThld = value;
        }

        getSEvntThld() {
            return this.sEvntThld;
        }

        setSEvntThld(value) {
            this.sEvntThld = value;
        }

        getFmThld() {
            return this.fmThld;
        }

        setFmThld(value) {
            this.fmThld = value;
        }
    }

    Trig = class Trig {
        paramThld;
        taskThld;
        sEvntThld;
        fmThld;

        getParamThld() {
            return this.paramThld;
        }

        setParamThld(value) {
            this.paramThld = value;
        }

        getTaskThld() {
            return this.taskThld;
        }

        setTaskThld(value) {
            this.taskThld = value;
        }

        getSEvntThld() {
            return this.sEvntThld;
        }

        setSEvntThld(value) {
            this.sEvntThld = value;
        }

        getFmThld() {
            return this.fmThld;
        }

        setFmThld(value) {
            this.fmThld = value;
        }
    }

    constructor() {
        super("http://www.asd-europe.org/s-series/s3000l", "DiscreteTimeLimit");
    }
};


const CrudCodeValues = require("./CrudCodeValues");
module.exports = class InitialTimeLimit extends EcRemoteLinkedData {
    thld;
    samplByDef;
    samplByValue;
    samplByRo;
    uid;
    crud;

    getThld() {
        if (this.thld == null) {
            this.thld = [];
        }
        return this.thld;
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

    constructor() {
        super("http://www.asd-europe.org/s-series/s3000l", "InitialTimeLimit");
    }
};

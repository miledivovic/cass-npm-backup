
const CrudCodeValues = require("./CrudCodeValues");
module.exports = class SubsequentRepeatRelationship extends EcRemoteLinkedData {
    trig;
    repeatRef;
    uid;
    crud;

    getTrig() {
        if (this.trig == null) {
            this.trig = [];
        }
        return this.trig;
    }

    getRepeatRef() {
        return this.repeatRef;
    }

    setRepeatRef(value) {
        this.repeatRef = value;
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
        super("http://www.asd-europe.org/s-series/s3000l", "SubsequentRepeatRelationship");
    }
};


const CrudCodeValues = require("./CrudCodeValues");
module.exports = class RandomSubtaskCircuitBreakerSettings extends EcRemoteLinkedData {
    cb;
    precCb;
    applic;
    uid;
    crud;

    getCb() {
        if (this.cb == null) {
            this.cb = [];
        }
        return this.cb;
    }

    getPrecCb() {
        return this.precCb;
    }

    setPrecCb(value) {
        this.precCb = value;
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

    Cb = class Cb {
        cbState;
        cbRef;
        rmks;

        getCbState() {
            return this.cbState;
        }

        setCbState(value) {
            this.cbState = value;
        }

        getCbRef() {
            return this.cbRef;
        }

        setCbRef(value) {
            this.cbRef = value;
        }

        getRmks() {
            return this.rmks;
        }

        setRmks(value) {
            this.rmks = value;
        }
    }

    constructor() {
        super("http://www.asd-europe.org/s-series/s3000l", "RandomSubtaskCircuitBreakerSettings");
    }
};

const CrudCodeValues = require("./CrudCodeValues");
module.exports = class FunctionalFailure extends EcRemoteLinkedData {
    funcFailDescr;
    efctCritic;
    uid;
    crud;

    getFuncFailDescr() {
        return this.funcFailDescr;
    }

    setFuncFailDescr(value) {
        this.funcFailDescr = value;
    }

    getEfctCritic() {
        return this.efctCritic;
    }

    setEfctCritic(value) {
        this.efctCritic = value;
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
        super("http://www.asd-europe.org/s-series/s3000l", "FunctionalFailure");
    }
};

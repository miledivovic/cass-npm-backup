

const CrudCodeValues = require("./CrudCodeValues");
module.exports = class ConditionType extends EcRemoteLinkedData {
    condName;
    condDescr;
    conditionTypeValueNonAbstractClasses;
    condInst;
    docs;
    rmks;
    uid;
    crud;

    getCondName() {
        return this.condName;
    }

    setCondName(value) {
        this.condName = value;
    }

    getCondDescr() {
        return this.condDescr;
    }

    setCondDescr(value) {
        this.condDescr = value;
    }

    getConditionTypeValueNonAbstractClasses() {
        if (this.conditionTypeValueNonAbstractClasses == null) {
            this.conditionTypeValueNonAbstractClasses = [];
        }
        return this.conditionTypeValueNonAbstractClasses;
    }

    getCondInst() {
        if (this.condInst == null) {
            this.condInst = [];
        }
        return this.condInst;
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
        super("http://www.asd-europe.org/s-series/s3000l", "ConditionType");
    }
};

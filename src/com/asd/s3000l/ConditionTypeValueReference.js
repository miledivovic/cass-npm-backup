
const CrudCodeValues = require("./CrudCodeValues");
module.exports = class ConditionTypeValueReference extends EcRemoteLinkedData {
    code;
    propValue;
    uidRef;

    getCode() {
        return this.code;
    }

    setCode(value) {
        this.code = value;
    }

    getPropValue() {
        return this.propValue;
    }

    setPropValue(value) {
        this.propValue = value;
    }

    getUidRef() {
        return this.uidRef;
    }

    setUidRef(value) {
        this.uidRef = value;
    }

    constructor() {
        super("http://www.asd-europe.org/s-series/s3000l", "ConditionTypeValueReference");
    }
};

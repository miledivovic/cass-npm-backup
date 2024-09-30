
const CrudCodeValues = require("./CrudCodeValues");
module.exports = class ConditionInstanceIdentifier extends EcRemoteLinkedData {
    clazz;
    setBy;

    getClazz() {
        return this.clazz;
    }

    setClazz(value) {
        this.clazz = value;
    }

    getSetBy() {
        return this.setBy;
    }

    setSetBy(value) {
        this.setBy = value;
    }

    constructor() {
        super("http://www.asd-europe.org/s-series/s3000l", "ConditionInstanceIdentifier");
    }
};

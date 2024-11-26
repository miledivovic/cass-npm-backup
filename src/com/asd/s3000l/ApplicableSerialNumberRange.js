
const CrudCodeValues = require("./CrudCodeValues");
module.exports = class ApplicableSerialNumberRange extends EcRemoteLinkedData {
    lowBound;
    uppBound;

    getLowBound() {
        return this.lowBound;
    }

    setLowBound(value) {
        this.lowBound = value;
    }

    getUppBound() {
        return this.uppBound;
    }

    setUppBound(value) {
        this.uppBound = value;
    }

    constructor() {
        super("http://www.asd-europe.org/s-series/s3000l", "ApplicableSerialNumberRange");
    }
};


const CrudCodeValues = require("./CrudCodeValues");
module.exports = class KeyPerformanceIndicatorStatus extends EcRemoteLinkedData {
    code;
    applic;
    docs;
    rmks;

    getCode() {
        return this.code;
    }

    setCode(value) {
        this.code = value;
    }

    getApplic() {
        return this.applic;
    }

    setApplic(value) {
        this.applic = value;
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

    constructor() {
        super("http://www.asd-europe.org/s-series/s3000l", "KeyPerformanceIndicatorStatus");
    }
};


const CrudCodeValues = require("./CrudCodeValues");
module.exports = class HardwarePartEnvironmentalAspectPlannedDisposalClass extends EcRemoteLinkedData {
    code;
    applic;
    docs;
    rmks;
    date;

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

    getDate() {
        return this.date;
    }

    setDate(value) {
        this.date = value;
    }

    constructor() {
        super("http://www.asd-europe.org/s-series/s3000l", "HardwarePartEnvironmentalAspectPlannedDisposalClass");
    }
};

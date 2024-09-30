
const CrudCodeValues = require("./CrudCodeValues");
module.exports = class JobPositionRef extends EcRemoteLinkedData {
    jobPosName;
    uidRef;
    uriRef;

    getJobPosName() {
        return this.jobPosName;
    }

    setJobPosName(value) {
        this.jobPosName = value;
    }

    getUidRef() {
        return this.uidRef;
    }

    setUidRef(value) {
        this.uidRef = value;
    }

    getUriRef() {
        return this.uriRef;
    }

    setUriRef(value) {
        this.uriRef = value;
    }

    constructor() {
        super("http://www.asd-europe.org/s-series/s3000l", "JobPositionRef");
    }
};

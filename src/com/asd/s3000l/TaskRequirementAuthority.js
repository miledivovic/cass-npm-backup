
const CrudCodeValues = require("./CrudCodeValues");
module.exports = class TaskRequirementAuthority extends EcRemoteLinkedData {

    orgRef;

    getOrgRef() {
        return this.orgRef;
    }

    setOrgRef(value) {
        this.orgRef = value;
    }

    constructor() {
        super("http://www.asd-europe.org/s-series/s3000l", "TaskRequirementAuthority");
    }

}

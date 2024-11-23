
const CrudCodeValues = require("./CrudCodeValues");
module.exports = class OrganizationReference extends EcRemoteLinkedData {
    orgId;
    uidRef;

    getOrgId() {
        return this.orgId;
    }

    setOrgId(value) {
        this.orgId = value;
    }

    getUidRef() {
        return this.uidRef;
    }

    setUidRef(value) {
        this.uidRef = value;
    }

    constructor() {
        super("http://www.asd-europe.org/s-series/s3000l", "OrganizationReference");
    }
};

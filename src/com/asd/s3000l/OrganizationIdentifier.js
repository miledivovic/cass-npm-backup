
const CrudCodeValues = require("./CrudCodeValues");
module.exports = class OrganizationIdentifier extends EcRemoteLinkedData {
    clazz;
    applic;

    getClazz() {
        return this.clazz;
    }

    setClazz(value) {
        this.clazz = value;
    }

    getApplic() {
        return this.applic;
    }

    setApplic(value) {
        this.applic = value;
    }

    constructor() {
        super("http://www.asd-europe.org/s-series/s3000l", "OrganizationIdentifier");
    }
};

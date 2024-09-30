
const CrudCodeValues = require("./CrudCodeValues");
module.exports = class ProjectReference extends EcRemoteLinkedData {
    projId;
    uidRef;

    getProjId() {
        return this.projId;
    }

    setProjId(value) {
        this.projId = value;
    }

    getUidRef() {
        return this.uidRef;
    }

    setUidRef(value) {
        this.uidRef = value;
    }

    constructor() {
        super("http://www.asd-europe.org/s-series/s3000l", "ProjectReference");
    }
};

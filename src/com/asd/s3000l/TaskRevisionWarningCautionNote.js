
const CrudCodeValues = require("./CrudCodeValues");
module.exports = class TaskRevisionWarningCautionNote extends EcRemoteLinkedData {
    wcnRef;
    wcnDef;
    applic;
    uid;
    crud;

    getWcnRef() {
        return this.wcnRef;
    }

    setWcnRef(value) {
        this.wcnRef = value;
    }

    getWcnDef() {
        return this.wcnDef;
    }

    setWcnDef(value) {
        this.wcnDef = value;
    }

    getApplic() {
        return this.applic;
    }

    setApplic(value) {
        this.applic = value;
    }

    getUid() {
        return this.uid;
    }

    setUid(value) {
        this.uid = value;
    }

    getCrud() {
        if (this.crud == null) {
            return CrudCodeValues.I;
        } else {
            return this.crud;
        }
    }

    setCrud(value) {
        this.crud = value;
    }

    constructor() {
        super("http://www.asd-europe.org/s-series/s3000l", "TaskRevisionWarningCautionNote");
    }
};

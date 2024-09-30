
const CrudCodeValues = require("./CrudCodeValues");
module.exports = class SubtaskTimeline extends EcRemoteLinkedData {
    evnt;
    lag;
    subtRef;
    docs;
    rmks;
    applic;
    uid;
    crud;

    getEvnt() {
        return this.evnt;
    }

    setEvnt(value) {
        this.evnt = value;
    }

    getLag() {
        if (this.lag == null) {
            this.lag = [];
        }
        return this.lag;
    }

    getSubtRef() {
        return this.subtRef;
    }

    setSubtRef(value) {
        this.subtRef = value;
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
        super("http://www.asd-europe.org/s-series/s3000l", "SubtaskTimeline");
    }
};


const CrudCodeValues = require("./CrudCodeValues");
module.exports = class WarningCautionNote extends EcRemoteLinkedData {
    wcnId;
    wcnDescr;
    wcnType;
    trainDcsn;
    docs;
    rmks;
    uid;
    uri;
    crud;

    getWcnId() {
        return this.wcnId;
    }

    setWcnId(value) {
        this.wcnId = value;
    }

    getWcnDescr() {
        return this.wcnDescr;
    }

    setWcnDescr(value) {
        this.wcnDescr = value;
    }

    getWcnType() {
        return this.wcnType;
    }

    setWcnType(value) {
        this.wcnType = value;
    }

    getTrainDcsn() {
        if (this.trainDcsn == null) {
            this.trainDcsn = [];
        }
        return this.trainDcsn;
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

    getUid() {
        return this.uid;
    }

    setUid(value) {
        this.uid = value;
    }

    getUri() {
        return this.uri;
    }

    setUri(value) {
        this.uri = value;
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
        super("http://www.asd-europe.org/s-series/s3000l", "WarningCautionNote");
    }
};

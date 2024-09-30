
const CrudCodeValues = require("./CrudCodeValues");
module.exports = class SoftwareElementPartRealization extends EcRemoteLinkedData {
    partRef;
    usableOnList;
    apcEfys;
    docs;
    rmks;
    uid;
    crud;

    getPartRef() {
        return this.partRef;
    }

    setPartRef(value) {
        this.partRef = value;
    }

    getUsableOnList() {
        return this.usableOnList;
    }

    setUsableOnList(value) {
        this.usableOnList = value;
    }

    getApcEfys() {
        return this.apcEfys;
    }

    setApcEfys(value) {
        this.apcEfys = value;
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
        super("http://www.asd-europe.org/s-series/s3000l", "SoftwareElementPartRealization");
    }
};

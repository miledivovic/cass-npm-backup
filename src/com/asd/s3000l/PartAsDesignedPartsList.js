
const CrudCodeValues = require("./CrudCodeValues");
module.exports = class PartAsDesignedPartsList extends EcRemoteLinkedData {
    pListType;
    pListRevId;
    pListEntry;
    apcEfys;
    docs;
    rmks;
    uid;
    crud;

    getPListType() {
        return this.pListType;
    }

    setPListType(value) {
        this.pListType = value;
    }

    getPListRevId() {
        return this.pListRevId;
    }

    setPListRevId(value) {
        this.pListRevId = value;
    }

    getPListEntry() {
        if (this.pListEntry == null) {
            this.pListEntry = [];
        }
        return this.pListEntry;
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

    ApcEfys = class ApcEfys {
        apcEfy;

        getApcEfy() {
            if (this.apcEfy == null) {
                this.apcEfy = [];
            }
            return this.apcEfy;
        }
    }

    constructor() {
        super("http://www.asd-europe.org/s-series/s3000l", "PartAsDesignedPartsList");
    }
};

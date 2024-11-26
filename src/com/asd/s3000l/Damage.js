

const CrudCodeValues = require("./CrudCodeValues");
module.exports = class Damage extends EcRemoteLinkedData {
    dmgDescr;
    dmgFamily;
    cause;
    docs;
    rmks;
    uid;
    crud;

    getDmgDescr() {
        return this.dmgDescr;
    }

    setDmgDescr(value) {
        this.dmgDescr = value;
    }

    getDmgFamily() {
        return this.dmgFamily;
    }

    setDmgFamily(value) {
        this.dmgFamily = value;
    }

    getCause() {
        if (this.cause == null) {
            this.cause = [];
        }
        return this.cause;
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
        super("http://www.asd-europe.org/s-series/s3000l", "Damage");
    }
};

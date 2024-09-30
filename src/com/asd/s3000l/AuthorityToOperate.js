

const CrudCodeValues = require("./CrudCodeValues");
module.exports = class AuthorityToOperate extends EcRemoteLinkedData {
    authToOpId;
    docs;
    rmks;
    uid;
    crud;

    getAuthToOpId() {
        return this.authToOpId;
    }

    setAuthToOpId(value) {
        this.authToOpId = value;
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
        super("http://www.asd-europe.org/s-series/s3000l", "AuthorityToOperate");
    }
};

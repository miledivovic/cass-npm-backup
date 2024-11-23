
const CrudCodeValues = require("./CrudCodeValues");
module.exports = class Remark extends EcRemoteLinkedData {
    text;
    rmkType;
    orgInfos;
    docs;
    applic;
    uid;
    crud;

    getText() {
        return this.text;
    }

    setText(value) {
        this.text = value;
    }

    getRmkType() {
        return this.rmkType;
    }

    setRmkType(value) {
        this.rmkType = value;
    }

    getOrgInfos() {
        return this.orgInfos;
    }

    setOrgInfos(value) {
        this.orgInfos = value;
    }

    getDocs() {
        return this.docs;
    }

    setDocs(value) {
        this.docs = value;
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
        super("http://www.asd-europe.org/s-series/s3000l", "Remark");
    }
};

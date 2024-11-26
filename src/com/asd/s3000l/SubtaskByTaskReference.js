
const CrudCodeValues = require("./CrudCodeValues");
module.exports = class SubtaskByTaskReference extends EcRemoteLinkedData {
    subtId;
    subtRole;
    wcn;
    precSubt;
    taskRef;
    secs;
    docs;
    rmks;
    applic;
    uid;
    uri;
    crud;

    getSubtId() {
        return this.subtId;
    }

    setSubtId(value) {
        this.subtId = value;
    }

    getSubtRole() {
        return this.subtRole;
    }

    setSubtRole(value) {
        this.subtRole = value;
    }

    getWcn() {
        if (this.wcn == null) {
            this.wcn = [];
        }
        return this.wcn;
    }

    getPrecSubt() {
        return this.precSubt;
    }

    setPrecSubt(value) {
        this.precSubt = value;
    }

    getTaskRef() {
        return this.taskRef;
    }

    setTaskRef(value) {
        this.taskRef = value;
    }

    getSecs() {
        return this.secs;
    }

    setSecs(value) {
        this.secs = value;
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
        super("http://www.asd-europe.org/s-series/s3000l", "SubtaskByTaskReference");
    }
};

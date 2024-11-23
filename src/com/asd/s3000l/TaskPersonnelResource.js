
const CrudCodeValues = require("./CrudCodeValues");
module.exports = class TaskPersonnelResource extends EcRemoteLinkedData {
    fixed;
    duration;
    persRole;
    number;
    laborTime;
    relRes;
    compt;
    docs;
    rmks;
    applic;
    uid;
    crud;

    getFixed() {
        return this.fixed;
    }

    setFixed(value) {
        this.fixed = value;
    }

    getDuration() {
        if (this.duration == null) {
            this.duration = [];
        }
        return this.duration;
    }

    getPersRole() {
        return this.persRole;
    }

    setPersRole(value) {
        this.persRole = value;
    }

    getNumber() {
        if (this.number == null) {
            this.number = [];
        }
        return this.number;
    }

    getLaborTime() {
        if (this.laborTime == null) {
            this.laborTime = [];
        }
        return this.laborTime;
    }

    getRelRes() {
        if (this.relRes == null) {
            this.relRes = [];
        }
        return this.relRes;
    }

    getCompt() {
        if (this.compt == null) {
            this.compt = [];
        }
        return this.compt;
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
        super("http://www.asd-europe.org/s-series/s3000l", "TaskPersonnelResource");
    }
};

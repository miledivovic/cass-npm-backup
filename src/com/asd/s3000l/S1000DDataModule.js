
const CrudCodeValues = require("./CrudCodeValues");
module.exports = class S1000DDataModule extends EcRemoteLinkedData {
    dmc;
    infoname;
    dmIss;
    orgInfos;
    rmks;
    uid;
    crud;

    getDmc() {
        return this.dmc;
    }

    setDmc(value) {
        this.dmc = value;
    }

    getInfoname() {
        return this.infoname;
    }

    setInfoname(value) {
        this.infoname = value;
    }

    getDmIss() {
        if (this.dmIss == null) {
            this.dmIss = [];
        }
        return this.dmIss;
    }

    getOrgInfos() {
        return this.orgInfos;
    }

    setOrgInfos(value) {
        this.orgInfos = value;
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
        super("http://www.asd-europe.org/s-series/s3000l", "S1000DDataModule");
    }
};

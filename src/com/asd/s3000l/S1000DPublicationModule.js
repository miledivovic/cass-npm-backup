
const CrudCodeValues = require("./CrudCodeValues");
module.exports = class S1000DPublicationModule extends EcRemoteLinkedData {
    pmc;
    pmTitle;
    pmIss;
    orgInfos;
    rmks;
    uid;
    crud;

    getPmc() {
        return this.pmc;
    }

    setPmc(value) {
        this.pmc = value;
    }

    getPmTitle() {
        return this.pmTitle;
    }

    setPmTitle(value) {
        this.pmTitle = value;
    }

    getPmIss() {
        if (this.pmIss == null) {
            this.pmIss = [];
        }
        return this.pmIss;
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
        super("http://www.asd-europe.org/s-series/s3000l", "S1000DPublicationModule");
    }
};

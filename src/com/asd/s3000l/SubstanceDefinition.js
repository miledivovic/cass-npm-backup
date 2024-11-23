
const CrudCodeValues = require("./CrudCodeValues");
module.exports = class SubstanceDefinition extends EcRemoteLinkedData {
    subsId;
    name;
    subsDescr;
    usageCat;
    riskDescr;
    riskFactor;
    recDate;
    orgInfos;
    docs;
    rmks;
    uid;
    crud;

    getSubsId() {
        if (this.subsId == null) {
            this.subsId = [];
        }
        return this.subsId;
    }

    getName() {
        return this.name;
    }

    setName(value) {
        this.name = value;
    }

    getSubsDescr() {
        return this.subsDescr;
    }

    setSubsDescr(value) {
        this.subsDescr = value;
    }

    getUsageCat() {
        return this.usageCat;
    }

    setUsageCat(value) {
        this.usageCat = value;
    }

    getRiskDescr() {
        if (this.riskDescr == null) {
            this.riskDescr = [];
        }
        return this.riskDescr;
    }

    getRiskFactor() {
        return this.riskFactor;
    }

    setRiskFactor(value) {
        this.riskFactor = value;
    }

    getRecDate() {
        return this.recDate;
    }

    setRecDate(value) {
        this.recDate = value;
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
        super("http://www.asd-europe.org/s-series/s3000l", "SubstanceDefinition");
    }
};

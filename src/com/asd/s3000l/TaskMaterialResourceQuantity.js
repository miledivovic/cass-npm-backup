
const CrudCodeValues = require("./CrudCodeValues");
module.exports = class TaskMaterialResourceQuantity extends EcRemoteLinkedData {
    date;
    vdtm;
    unit;
    value;
    nomVal;
    lowOff;
    uppOff;
    lowVal;
    uppVal;
    txt;
    applic;
    docs;
    orgInfos;
    rmks;

    getDate() {
        return this.date;
    }

    setDate(value) {
        this.date = value;
    }

    getVdtm() {
        return this.vdtm;
    }

    setVdtm(value) {
        this.vdtm = value;
    }

    getUnit() {
        return this.unit;
    }

    setUnit(value) {
        this.unit = value;
    }

    getValue() {
        return this.value;
    }

    setValue(value) {
        this.value = value;
    }

    getNomVal() {
        return this.nomVal;
    }

    setNomVal(value) {
        this.nomVal = value;
    }

    getLowOff() {
        return this.lowOff;
    }

    setLowOff(value) {
        this.lowOff = value;
    }

    getUppOff() {
        return this.uppOff;
    }

    setUppOff(value) {
        this.uppOff = value;
    }

    getLowVal() {
        return this.lowVal;
    }

    setLowVal(value) {
        this.lowVal = value;
    }

    getUppVal() {
        return this.uppVal;
    }

    setUppVal(value) {
        this.uppVal = value;
    }

    getTxt() {
        return this.txt;
    }

    setTxt(value) {
        this.txt = value;
    }

    getApplic() {
        return this.applic;
    }

    setApplic(value) {
        this.applic = value;
    }

    getDocs() {
        return this.docs;
    }

    setDocs(value) {
        this.docs = value;
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

    constructor() {
        super("http://www.asd-europe.org/s-series/s3000l", "TaskMaterialResourceQuantity");
    }
};

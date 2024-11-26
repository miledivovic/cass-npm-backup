
const CrudCodeValues = require("./CrudCodeValues");
module.exports = class OrganizationName extends EcRemoteLinkedData {
    descr;
    lang;
    date;
    applic;

    getDescr() {
        return this.descr;
    }

    setDescr(value) {
        this.descr = value;
    }

    getLang() {
        return this.lang;
    }

    setLang(value) {
        this.lang = value;
    }

    getDate() {
        return this.date;
    }

    setDate(value) {
        this.date = value;
    }

    getApplic() {
        return this.applic;
    }

    setApplic(value) {
        this.applic = value;
    }

    constructor() {
        super("http://www.asd-europe.org/s-series/s3000l", "OrganizationName");
    }
};



const CrudCodeValues = require("./CrudCodeValues");
module.exports = class ApplicabilityStatement extends EcRemoteLinkedData {
    applicId;
    applicDescr;
    and;
    not;
    or;
    assertInst;
    assertCond;
    nestedApplic;
    assertSi;
    docs;
    rmks;
    uid;
    crud;

    getApplicId() {
        return this.applicId;
    }

    setApplicId(value) {
        this.applicId = value;
    }

    getApplicDescr() {
        return this.applicDescr;
    }

    setApplicDescr(value) {
        this.applicDescr = value;
    }

    getAnd() {
        return this.and;
    }

    setAnd(value) {
        this.and = value;
    }

    getNot() {
        return this.not;
    }

    setNot(value) {
        this.not = value;
    }

    getOr() {
        return this.or;
    }

    setOr(value) {
        this.or = value;
    }

    getAssertInst() {
        return this.assertInst;
    }

    setAssertInst(value) {
        this.assertInst = value;
    }

    getAssertCond() {
        return this.assertCond;
    }

    setAssertCond(value) {
        this.assertCond = value;
    }

    getNestedApplic() {
        return this.nestedApplic;
    }

    setNestedApplic(value) {
        this.nestedApplic = value;
    }

    getAssertSi() {
        return this.assertSi;
    }

    setAssertSi(value) {
        this.assertSi = value;
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
        super("http://www.asd-europe.org/s-series/s3000l", "ApplicabilityStatement");
    }
};


const CrudCodeValues = require("./CrudCodeValues");
module.exports = class Not extends EcRemoteLinkedData {
    and;
    not;
    or;
    assertInst;
    assertCond;
    nestedApplic;
    assertSi;
    uid;
    crud;

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
        super("http://www.asd-europe.org/s-series/s3000l", "Not");
    }
};

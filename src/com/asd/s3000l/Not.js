
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
        return and;
    }

 setAnd( value) {
        this.and = value;
    }

 getNot() {
        return not;
    }

 setNot( value) {
        this.not = value;
    }

 getOr() {
        return or;
    }

 setOr( value) {
        this.or = value;
    }

 getAssertInst() {
        return assertInst;
    }

 setAssertInst( value) {
        this.assertInst = value;
    }

 getAssertCond() {
        return assertCond;
    }

 setAssertCond( value) {
        this.assertCond = value;
    }

 getNestedApplic() {
        return nestedApplic;
    }

 setNestedApplic( value) {
        this.nestedApplic = value;
    }

 getAssertSi() {
        return assertSi;
    }

 setAssertSi( value) {
        this.assertSi = value;
    }

 getUid() {
        return uid;
    }

 setUid( value) {
        this.uid = value;
    }

 getCrud() {
        if (this.crud == null) {
            return CrudCodeValues.I;
        } else {
            return crud;
        }
    }

 setCrud( value) {
        this.crud = value;
    }

	constructor() {
		super("http://www.asd-europe.org/s-series/s3000l", "Not");
	}
};

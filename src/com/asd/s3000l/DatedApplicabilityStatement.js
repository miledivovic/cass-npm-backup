
module.exports = class DatedApplicabilityStatement extends EcRemoteLinkedData {
applicId;
applicDescr;
startDate;
endDate;
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
        return applicId;
    }

 setApplicId( value) {
        this.applicId = value;
    }

 getApplicDescr() {
        return applicDescr;
    }

 setApplicDescr( value) {
        this.applicDescr = value;
    }

 getStartDate() {
        return startDate;
    }

 setStartDate( value) {
        this.startDate = value;
    }

 getEndDate() {
        return endDate;
    }

 setEndDate( value) {
        this.endDate = value;
    }

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

 getDocs() {
        return docs;
    }

 setDocs( value) {
        this.docs = value;
    }

 getRmks() {
        return rmks;
    }

 setRmks( value) {
        this.rmks = value;
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
		super("http://www.asd-europe.org/s-series/s3000l", "DatedApplicabilityStatement");
	}
};

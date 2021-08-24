
module.exports = class ApplicabilityEvaluationByAssertionOfCondition extends EcRemoteLinkedData {
condTypeRef;
condInstRef;
assertValue;
rmks;
uid;
crud;

 getCondTypeRef() {
        return condTypeRef;
    }

 setCondTypeRef( value) {
        this.condTypeRef = value;
    }

 getCondInstRef() {
        return condInstRef;
    }

 setCondInstRef( value) {
        this.condInstRef = value;
    }

 getAssertValue() {
        return assertValue;
    }

 setAssertValue( value) {
        this.assertValue = value;
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
        if (crud == null) {
            return CrudCodeValues.I;
        } else {
            return crud;
        }
    }

 setCrud( value) {
        this.crud = value;
    }

	constructor() {
		super("http://www.asd-europe.org/s-series/s3000l", "ApplicabilityEvaluationByAssertionOfCondition");
	}
};

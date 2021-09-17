
module.exports = class ApplicabilityEvaluationByAssertionOfSerializedItems extends EcRemoteLinkedData {
range;
partRef;
prodRef;
prodVarRef;
rmks;
uid;
crud;

 getRange() {
        return range;
    }

 setRange( value) {
        this.range = value;
    }

 getPartRef() {
        return partRef;
    }

 setPartRef( value) {
        this.partRef = value;
    }

 getProdRef() {
        return prodRef;
    }

 setProdRef( value) {
        this.prodRef = value;
    }

 getProdVarRef() {
        return prodVarRef;
    }

 setProdVarRef( value) {
        this.prodVarRef = value;
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
		super("http://www.asd-europe.org/s-series/s3000l", "ApplicabilityEvaluationByAssertionOfSerializedItems");
	}
};

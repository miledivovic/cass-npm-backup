
module.exports = class ConditionType extends EcRemoteLinkedData {
condName;
condDescr;
conditionTypeValueNonAbstractClasses;
condInst;
docs;
rmks;
uid;
crud;

 getCondName() {
        return condName;
    }

 setCondName( value) {
        this.condName = value;
    }

 getCondDescr() {
        return condDescr;
    }

 setCondDescr( value) {
        this.condDescr = value;
    }

 getConditionTypeValueNonAbstractClasses() {
        if (conditionTypeValueNonAbstractClasses == null) {
            conditionTypeValueNonAbstractClasses = [];
        }
        return this.conditionTypeValueNonAbstractClasses;
    }

 getCondInst() {
        if (condInst == null) {
            condInst = [];
        }
        return this.condInst;
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
		super("http://www.asd-europe.org/s-series/s3000l", "ConditionType");
	}
};


module.exports = class FunctionalFailure extends EcRemoteLinkedData {
funcFailDescr;
efctCritic;
uid;
crud;

 getFuncFailDescr() {
        return funcFailDescr;
    }

 setFuncFailDescr( value) {
        this.funcFailDescr = value;
    }

 getEfctCritic() {
        return efctCritic;
    }

 setEfctCritic( value) {
        this.efctCritic = value;
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
		super("http://www.asd-europe.org/s-series/s3000l", "FunctionalFailure");
	}
};

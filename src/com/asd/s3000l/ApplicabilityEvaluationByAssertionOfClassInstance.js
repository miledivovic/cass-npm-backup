
module.exports = class ApplicabilityEvaluationByAssertionOfClassInstance extends EcRemoteLinkedData {
prodVarRef;
hwElemRealRef;
swElemRealRef;
orgRef;
opLocRef;
opTypeRef;
mlvRef;
mLocRef;
beRef;
usagePhaseRef;
contrRef;
partRef;
prodConfRef;
rmks;
uid;
crud;

 getProdVarRef() {
        return prodVarRef;
    }

 setProdVarRef( value) {
        this.prodVarRef = value;
    }

 getHwElemRealRef() {
        return hwElemRealRef;
    }

 setHwElemRealRef( value) {
        this.hwElemRealRef = value;
    }

 getSwElemRealRef() {
        return swElemRealRef;
    }

 setSwElemRealRef( value) {
        this.swElemRealRef = value;
    }

 getOrgRef() {
        return orgRef;
    }

 setOrgRef( value) {
        this.orgRef = value;
    }

 getOpLocRef() {
        return opLocRef;
    }

 setOpLocRef( value) {
        this.opLocRef = value;
    }

 getOpTypeRef() {
        return opTypeRef;
    }

 setOpTypeRef( value) {
        this.opTypeRef = value;
    }

 getMlvRef() {
        return mlvRef;
    }

 setMlvRef( value) {
        this.mlvRef = value;
    }

 getMLocRef() {
        return mLocRef;
    }

 setMLocRef( value) {
        this.mLocRef = value;
    }

 getBeRef() {
        return beRef;
    }

 setBeRef( value) {
        this.beRef = value;
    }

 getUsagePhaseRef() {
        return usagePhaseRef;
    }

 setUsagePhaseRef( value) {
        this.usagePhaseRef = value;
    }

 getContrRef() {
        return contrRef;
    }

 setContrRef( value) {
        this.contrRef = value;
    }

 getPartRef() {
        return partRef;
    }

 setPartRef( value) {
        this.partRef = value;
    }

 getProdConfRef() {
        return prodConfRef;
    }

 setProdConfRef( value) {
        this.prodConfRef = value;
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
		super("http://www.asd-europe.org/s-series/s3000l", "ApplicabilityEvaluationByAssertionOfClassInstance");
	}
};

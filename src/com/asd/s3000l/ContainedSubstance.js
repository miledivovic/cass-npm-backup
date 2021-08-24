
module.exports = class ContainedSubstance extends EcRemoteLinkedData {
qty;
justDescr;
subsRef;
docs;
rmks;
uid;
crud;

 getQty() {
        return qty;
    }

 setQty( value) {
        this.qty = value;
    }

 getJustDescr() {
        return justDescr;
    }

 setJustDescr( value) {
        this.justDescr = value;
    }

 getSubsRef() {
        return subsRef;
    }

 setSubsRef( value) {
        this.subsRef = value;
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
		super("http://www.asd-europe.org/s-series/s3000l", "ContainedSubstance");
	}
};

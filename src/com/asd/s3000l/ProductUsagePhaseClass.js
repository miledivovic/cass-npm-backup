
module.exports = class ProductUsagePhaseClass extends EcRemoteLinkedData {
usagePhase;
docs;
rmks;
uid;
crud;

 getUsagePhase() {
        return usagePhase;
    }

 setUsagePhase( value) {
        this.usagePhase = value;
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
		super("http://www.asd-europe.org/s-series/s3000l", "ProductUsagePhaseClass");
	}
};

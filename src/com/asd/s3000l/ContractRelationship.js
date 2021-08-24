
module.exports = class ContractRelationship extends EcRemoteLinkedData {
relType;
contrRef;
rmks;
uid;
crud;

 getRelType() {
        return relType;
    }

 setRelType( value) {
        this.relType = value;
    }

 getContrRef() {
        return contrRef;
    }

 setContrRef( value) {
        this.contrRef = value;
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
		super("http://www.asd-europe.org/s-series/s3000l", "ContractRelationship");
	}
};

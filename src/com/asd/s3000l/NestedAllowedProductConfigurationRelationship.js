
module.exports = class NestedAllowedProductConfigurationRelationship extends EcRemoteLinkedData {
hwConfPartRef;
prodConfRef;
rmks;
uid;
crud;

 getHwConfPartRef() {
        return hwConfPartRef;
    }

 setHwConfPartRef( value) {
        this.hwConfPartRef = value;
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
		super("http://www.asd-europe.org/s-series/s3000l", "NestedAllowedProductConfigurationRelationship");
	}
};

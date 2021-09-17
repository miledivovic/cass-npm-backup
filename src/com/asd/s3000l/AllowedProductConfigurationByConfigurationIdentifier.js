
module.exports = class AllowedProductConfigurationByConfigurationIdentifier extends EcRemoteLinkedData {
prodConfId;
authToOp;
nestedPC;
orgInfos;
docs;
rmks;
uid;
crud;

 getProdConfId() {
        return prodConfId;
    }

 setProdConfId( value) {
        this.prodConfId = value;
    }

 getAuthToOp() {
        return authToOp;
    }

 setAuthToOp( value) {
        this.authToOp = value;
    }

 getNestedPC() {
        if (this.nestedPC == null) {
            this.nestedPC = [];
        }
        return this.nestedPC;
    }

 getOrgInfos() {
        return orgInfos;
    }

 setOrgInfos( value) {
        this.orgInfos = value;
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
		super("http://www.asd-europe.org/s-series/s3000l", "AllowedProductConfigurationByConfigurationIdentifier");
	}
};

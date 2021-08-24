
module.exports = class ProductVariant extends EcRemoteLinkedData {
prodVarId;
name;
allowedProductConfigurationInterfaceRealizedBy;
nestedPV;
bkdns;
orgInfos;
docs;
rmks;
uid;
crud;

 getProdVarId() {
        if (prodVarId == null) {
            prodVarId = [];
        }
        return this.prodVarId;
    }

 getName() {
        if (name == null) {
            name = [];
        }
        return this.name;
    }

 getAllowedProductConfigurationInterfaceRealizedBy() {
        if (allowedProductConfigurationInterfaceRealizedBy == null) {
            allowedProductConfigurationInterfaceRealizedBy = [];
        }
        return this.allowedProductConfigurationInterfaceRealizedBy;
    }

 getNestedPV() {
        if (nestedPV == null) {
            nestedPV = [];
        }
        return this.nestedPV;
    }

 getBkdns() {
        return bkdns;
    }

 setBkdns( value) {
        this.bkdns = value;
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
        if (crud == null) {
            return CrudCodeValues.I;
        } else {
            return crud;
        }
    }

 setCrud( value) {
        this.crud = value;
    }

    Bkdns = class Bkdns {
bkdn;

 getBkdn() {
            if (bkdn == null) {
                bkdn = [];
            }
            return this.bkdn;
        }
    }

	constructor() {
		super("http://www.asd-europe.org/s-series/s3000l", "ProductVariant");
	}
};

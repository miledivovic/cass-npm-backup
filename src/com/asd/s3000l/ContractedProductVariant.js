
module.exports = class ContractedProductVariant extends EcRemoteLinkedData {
qty;
block;
prodVarRef;
user;
atOpLocType;
atOpLoc;
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

 getBlock() {
        if (block == null) {
            block = [];
        }
        return this.block;
    }

 getProdVarRef() {
        return prodVarRef;
    }

 setProdVarRef( value) {
        this.prodVarRef = value;
    }

 getUser() {
        if (user == null) {
            user = [];
        }
        return this.user;
    }

 getAtOpLocType() {
        if (atOpLocType == null) {
            atOpLocType = [];
        }
        return this.atOpLocType;
    }

 getAtOpLoc() {
        if (atOpLoc == null) {
            atOpLoc = [];
        }
        return this.atOpLoc;
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
		super("http://www.asd-europe.org/s-series/s3000l", "ContractedProductVariant");
	}
};

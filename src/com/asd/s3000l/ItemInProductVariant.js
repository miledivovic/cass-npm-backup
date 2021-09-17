
module.exports = class ItemInProductVariant extends EcRemoteLinkedData {
prodVarRef;
rangeEfys;
rmks;
uid;
crud;

 getProdVarRef() {
        return prodVarRef;
    }

 setProdVarRef( value) {
        this.prodVarRef = value;
    }

 getRangeEfys() {
        return rangeEfys;
    }

 setRangeEfys( value) {
        this.rangeEfys = value;
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

    RangeEfys = class RangeEfys {
efy;

 getEfy() {
            if (this.efy == null) {
                this.efy = [];
            }
            return this.efy;
        }
    }

	constructor() {
		super("http://www.asd-europe.org/s-series/s3000l", "ItemInProductVariant");
	}
};


module.exports = class ContractedProductVariantAtOperatingLocation extends EcRemoteLinkedData {
qty;
opReq;
theaterOfOp;
rmks;
uid;
crud;

 getQty() {
        return qty;
    }

 setQty( value) {
        this.qty = value;
    }

 getOpReq() {
        return opReq;
    }

 setOpReq( value) {
        this.opReq = value;
    }

 getTheaterOfOp() {
        return theaterOfOp;
    }

 setTheaterOfOp( value) {
        this.theaterOfOp = value;
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
		super("http://www.asd-europe.org/s-series/s3000l", "ContractedProductVariantAtOperatingLocation");
	}
};

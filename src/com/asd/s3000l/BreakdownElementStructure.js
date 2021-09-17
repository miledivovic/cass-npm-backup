
module.exports = class BreakdownElementStructure extends EcRemoteLinkedData {
rfd;
qty;
beChildRef;
relatedElem;
uid;
crud;

 getRfd() {
        if (this.rfd == null) {
            this.rfd = [];
        }
        return this.rfd;
    }

 getQty() {
        return qty;
    }

 setQty( value) {
        this.qty = value;
    }

 getBeChildRef() {
        return beChildRef;
    }

 setBeChildRef( value) {
        this.beChildRef = value;
    }

 getRelatedElem() {
        if (this.relatedElem == null) {
            this.relatedElem = [];
        }
        return this.relatedElem;
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
		super("http://www.asd-europe.org/s-series/s3000l", "BreakdownElementStructure");
	}
};

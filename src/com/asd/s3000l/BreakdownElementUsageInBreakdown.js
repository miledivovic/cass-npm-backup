
module.exports = class BreakdownElementUsageInBreakdown extends EcRemoteLinkedData {
beRef;
beChild;
inZone;
usableOnList;
rmks;
uid;
crud;

 getBeRef() {
        return beRef;
    }

 setBeRef( value) {
        this.beRef = value;
    }

 getBeChild() {
        if (this.beChild == null) {
            this.beChild = [];
        }
        return this.beChild;
    }

 getInZone() {
        return inZone;
    }

 setInZone( value) {
        this.inZone = value;
    }

 getUsableOnList() {
        return usableOnList;
    }

 setUsableOnList( value) {
        this.usableOnList = value;
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
		super("http://www.asd-europe.org/s-series/s3000l", "BreakdownElementUsageInBreakdown");
	}
};

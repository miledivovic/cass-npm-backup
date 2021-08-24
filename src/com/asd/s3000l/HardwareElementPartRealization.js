
module.exports = class HardwareElementPartRealization extends EcRemoteLinkedData {
partRef;
usableOnList;
apcEfys;
docs;
rmks;
uid;
crud;

 getPartRef() {
        return partRef;
    }

 setPartRef( value) {
        this.partRef = value;
    }

 getUsableOnList() {
        return usableOnList;
    }

 setUsableOnList( value) {
        this.usableOnList = value;
    }

 getApcEfys() {
        return apcEfys;
    }

 setApcEfys( value) {
        this.apcEfys = value;
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

    UsableOnList = class UsableOnList {
usableOn;

 getUsableOn() {
            if (usableOn == null) {
                usableOn = [];
            }
            return this.usableOn;
        }
    }

	constructor() {
		super("http://www.asd-europe.org/s-series/s3000l", "HardwareElementPartRealization");
	}
};

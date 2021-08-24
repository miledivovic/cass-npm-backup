
module.exports = class PartAsDesignedPartsList extends EcRemoteLinkedData {
pListType;
pListRevId;
pListEntry;
apcEfys;
docs;
rmks;
uid;
crud;

 getPListType() {
        return pListType;
    }

 setPListType( value) {
        this.pListType = value;
    }

 getPListRevId() {
        return pListRevId;
    }

 setPListRevId( value) {
        this.pListRevId = value;
    }

 getPListEntry() {
        if (pListEntry == null) {
            pListEntry = [];
        }
        return this.pListEntry;
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

    ApcEfys = class ApcEfys {
apcEfy;

 getApcEfy() {
            if (apcEfy == null) {
                apcEfy = [];
            }
            return this.apcEfy;
        }
    }

	constructor() {
		super("http://www.asd-europe.org/s-series/s3000l", "PartAsDesignedPartsList");
	}
};

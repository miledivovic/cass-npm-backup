
module.exports = class MaintenanceLevel extends EcRemoteLinkedData {
mlvId;
name;
mlvCapDescr;
opers;
docs;
rmks;
uid;
crud;

 getMlvId() {
        return mlvId;
    }

 setMlvId( value) {
        this.mlvId = value;
    }

 getName() {
        return name;
    }

 setName( value) {
        this.name = value;
    }

 getMlvCapDescr() {
        return mlvCapDescr;
    }

 setMlvCapDescr( value) {
        this.mlvCapDescr = value;
    }

 getOpers() {
        if (opers == null) {
            opers = [];
        }
        return this.opers;
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
		super("http://www.asd-europe.org/s-series/s3000l", "MaintenanceLevel");
	}
};

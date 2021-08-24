
module.exports = class Damage extends EcRemoteLinkedData {
dmgDescr;
dmgFamily;
cause;
docs;
rmks;
uid;
crud;

 getDmgDescr() {
        return dmgDescr;
    }

 setDmgDescr( value) {
        this.dmgDescr = value;
    }

 getDmgFamily() {
        return dmgFamily;
    }

 setDmgFamily( value) {
        this.dmgFamily = value;
    }

 getCause() {
        if (cause == null) {
            cause = [];
        }
        return this.cause;
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
		super("http://www.asd-europe.org/s-series/s3000l", "Damage");
	}
};

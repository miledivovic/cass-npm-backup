
module.exports = class ConditionInstance extends EcRemoteLinkedData {
condInstId;
name;
condInstDescr;
docs;
rmks;
uid;
crud;

 getCondInstId() {
        return condInstId;
    }

 setCondInstId( value) {
        this.condInstId = value;
    }

 getName() {
        return name;
    }

 setName( value) {
        this.name = value;
    }

 getCondInstDescr() {
        return condInstDescr;
    }

 setCondInstDescr( value) {
        this.condInstDescr = value;
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
        if (this.crud == null) {
            return CrudCodeValues.I;
        } else {
            return crud;
        }
    }

 setCrud( value) {
        this.crud = value;
    }

    Docs = class Docs {
doc;

 getDoc() {
            if (this.doc == null) {
                this.doc = [];
            }
            return this.doc;
        }
    }

    Rmks = class Rmks {
rmk;

 getRmk() {
            if (this.rmk == null) {
                this.rmk = [];
            }
            return this.rmk;
        }
    }

	constructor() {
		super("http://www.asd-europe.org/s-series/s3000l", "ConditionInstance");
	}
};

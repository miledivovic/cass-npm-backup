
module.exports = class TaskMaterialResourceBySpecification extends EcRemoteLinkedData {
fixed;
duration;
qty;
cat;
relRes;
specRef;
docs;
rmks;
applic;
uid;
crud;

 getFixed() {
        return fixed;
    }

 setFixed( value) {
        this.fixed = value;
    }

 getDuration() {
        if (duration == null) {
            duration = [];
        }
        return this.duration;
    }

 getQty() {
        return qty;
    }

 setQty( value) {
        this.qty = value;
    }

 getCat() {
        return cat;
    }

 setCat( value) {
        this.cat = value;
    }

 getRelRes() {
        if (relRes == null) {
            relRes = [];
        }
        return this.relRes;
    }

 getSpecRef() {
        return specRef;
    }

 setSpecRef( value) {
        this.specRef = value;
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

 getApplic() {
        return applic;
    }

 setApplic( value) {
        this.applic = value;
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
		super("http://www.asd-europe.org/s-series/s3000l", "TaskMaterialResourceBySpecification");
	}
};

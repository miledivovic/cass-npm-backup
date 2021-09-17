
module.exports = class TaskMaterialResourceByReference extends EcRemoteLinkedData {
fixed;
duration;
qty;
cat;
relRes;
beRef;
partRef;
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
        if (this.duration == null) {
            this.duration = [];
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
        if (this.relRes == null) {
            this.relRes = [];
        }
        return this.relRes;
    }

 getBeRef() {
        return beRef;
    }

 setBeRef( value) {
        this.beRef = value;
    }

 getPartRef() {
        return partRef;
    }

 setPartRef( value) {
        this.partRef = value;
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
		super("http://www.asd-europe.org/s-series/s3000l", "TaskMaterialResourceByReference");
	}
};

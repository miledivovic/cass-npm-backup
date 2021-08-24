
module.exports = class Remark extends EcRemoteLinkedData {
text;
rmkType;
orgInfos;
docs;
applic;
uid;
crud;

 getText() {
        return text;
    }

 setText( value) {
        this.text = value;
    }

 getRmkType() {
        return rmkType;
    }

 setRmkType( value) {
        this.rmkType = value;
    }

 getOrgInfos() {
        return orgInfos;
    }

 setOrgInfos( value) {
        this.orgInfos = value;
    }

 getDocs() {
        return docs;
    }

 setDocs( value) {
        this.docs = value;
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
		super("http://www.asd-europe.org/s-series/s3000l", "Remark");
	}
};

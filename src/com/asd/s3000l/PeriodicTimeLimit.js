
module.exports = class PeriodicTimeLimit extends EcRemoteLinkedData {
harmoniz;
limitDescr;
initial;
repeat;
orgInfos;
docs;
rmks;
applic;
uid;
crud;

 getHarmoniz() {
        return harmoniz;
    }

 setHarmoniz( value) {
        this.harmoniz = value;
    }

 getLimitDescr() {
        return limitDescr;
    }

 setLimitDescr( value) {
        this.limitDescr = value;
    }

 getInitial() {
        if (this.initial == null) {
            this.initial = [];
        }
        return this.initial;
    }

 getRepeat() {
        if (this.repeat == null) {
            this.repeat = [];
        }
        return this.repeat;
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
		super("http://www.asd-europe.org/s-series/s3000l", "PeriodicTimeLimit");
	}
};

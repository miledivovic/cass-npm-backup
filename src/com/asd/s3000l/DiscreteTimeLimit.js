
module.exports = class DiscreteTimeLimit extends EcRemoteLinkedData {
harmoniz;
limitDescr;
trig;
thld;
orgInfos;
docs;
rmks;
applic;
samplByDef;
samplByValue;
samplByRo;
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

 getTrig() {
        if (trig == null) {
            trig = [];
        }
        return this.trig;
    }

 getThld() {
        if (thld == null) {
            thld = [];
        }
        return this.thld;
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

 getSamplByDef() {
        return samplByDef;
    }

 setSamplByDef( value) {
        this.samplByDef = value;
    }

 getSamplByValue() {
        return samplByValue;
    }

 setSamplByValue( value) {
        this.samplByValue = value;
    }

 getSamplByRo() {
        return samplByRo;
    }

 setSamplByRo( value) {
        this.samplByRo = value;
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

    Thld = class Thld {
paramThld;
taskThld;
sEvntThld;
fmThld;

 getParamThld() {
            return paramThld;
        }

 setParamThld( value) {
            this.paramThld = value;
        }

 getTaskThld() {
            return taskThld;
        }

 setTaskThld( value) {
            this.taskThld = value;
        }

 getSEvntThld() {
            return sEvntThld;
        }

 setSEvntThld( value) {
            this.sEvntThld = value;
        }

 getFmThld() {
            return fmThld;
        }

 setFmThld( value) {
            this.fmThld = value;
        }
    }

    Trig = class Trig {
paramThld;
taskThld;
sEvntThld;
fmThld;

 getParamThld() {
            return paramThld;
        }

 setParamThld( value) {
            this.paramThld = value;
        }

 getTaskThld() {
            return taskThld;
        }

 setTaskThld( value) {
            this.taskThld = value;
        }

 getSEvntThld() {
            return sEvntThld;
        }

 setSEvntThld( value) {
            this.sEvntThld = value;
        }

 getFmThld() {
            return fmThld;
        }

 setFmThld( value) {
            this.fmThld = value;
        }
    }

	constructor() {
		super("http://www.asd-europe.org/s-series/s3000l", "DiscreteTimeLimit");
	}
};

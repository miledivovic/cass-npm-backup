
module.exports = class InitialTimeLimit extends EcRemoteLinkedData {
thld;
samplByDef;
samplByValue;
samplByRo;
uid;
crud;

 getThld() {
        if (this.thld == null) {
            this.thld = [];
        }
        return this.thld;
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
        if (this.crud == null) {
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

	constructor() {
		super("http://www.asd-europe.org/s-series/s3000l", "InitialTimeLimit");
	}
};


module.exports = class ParameterThresholdDefinition extends EcRemoteLinkedData {
thldValue;
rmks;
applic;
uid;
crud;

 getThldValue() {
        return thldValue;
    }

 setThldValue( value) {
        this.thldValue = value;
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
		super("http://www.asd-europe.org/s-series/s3000l", "ParameterThresholdDefinition");
	}
};

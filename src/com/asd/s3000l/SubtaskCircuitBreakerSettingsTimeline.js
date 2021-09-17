
module.exports = class SubtaskCircuitBreakerSettingsTimeline extends EcRemoteLinkedData {
cbSettingRef;
applic;
uid;
crud;

 getCbSettingRef() {
        return cbSettingRef;
    }

 setCbSettingRef( value) {
        this.cbSettingRef = value;
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
		super("http://www.asd-europe.org/s-series/s3000l", "SubtaskCircuitBreakerSettingsTimeline");
	}
};

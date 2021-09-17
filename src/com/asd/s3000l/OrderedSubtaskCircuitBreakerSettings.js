
module.exports = class OrderedSubtaskCircuitBreakerSettings extends EcRemoteLinkedData {
cb;
precCb;
applic;
uid;
crud;

 getCb() {
        if (this.cb == null) {
            this.cb = [];
        }
        return this.cb;
    }

 getPrecCb() {
        return precCb;
    }

 setPrecCb( value) {
        this.precCb = value;
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
		super("http://www.asd-europe.org/s-series/s3000l", "OrderedSubtaskCircuitBreakerSettings");
	}
};

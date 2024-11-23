
const CrudCodeValues = require("./CrudCodeValues");
module.exports = class SubtaskCircuitBreakerSettingsTimeline extends EcRemoteLinkedData {
    cbSettingRef;
    applic;
    uid;
    crud;

    getCbSettingRef() {
        return this.cbSettingRef;
    }

    setCbSettingRef(value) {
        this.cbSettingRef = value;
    }

    getApplic() {
        return this.applic;
    }

    setApplic(value) {
        this.applic = value;
    }

    getUid() {
        return this.uid;
    }

    setUid(value) {
        this.uid = value;
    }

    getCrud() {
        if (this.crud == null) {
            return CrudCodeValues.I;
        } else {
            return this.crud;
        }
    }

    setCrud(value) {
        this.crud = value;
    }

    constructor() {
        super("http://www.asd-europe.org/s-series/s3000l", "SubtaskCircuitBreakerSettingsTimeline");
    }
};

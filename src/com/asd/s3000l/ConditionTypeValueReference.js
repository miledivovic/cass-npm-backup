
module.exports = class ConditionTypeValueReference extends EcRemoteLinkedData {
code;
propValue;
uidRef;

 getCode() {
        return code;
    }

 setCode( value) {
        this.code = value;
    }

 getPropValue() {
        return propValue;
    }

 setPropValue( value) {
        this.propValue = value;
    }

 getUidRef() {
        return uidRef;
    }

 setUidRef( value) {
        this.uidRef = value;
    }

	constructor() {
		super("http://www.asd-europe.org/s-series/s3000l", "ConditionTypeValueReference");
	}
};

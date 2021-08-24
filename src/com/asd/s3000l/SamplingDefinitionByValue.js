
module.exports = class SamplingDefinitionByValue extends EcRemoteLinkedData {
samplDescr;
samplValue;
rmks;
uid;
crud;

 getSamplDescr() {
        return samplDescr;
    }

 setSamplDescr( value) {
        this.samplDescr = value;
    }

 getSamplValue() {
        return samplValue;
    }

 setSamplValue( value) {
        this.samplValue = value;
    }

 getRmks() {
        return rmks;
    }

 setRmks( value) {
        this.rmks = value;
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
		super("http://www.asd-europe.org/s-series/s3000l", "SamplingDefinitionByValue");
	}
};

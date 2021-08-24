
module.exports = class MeanTimeBetweenFailure extends EcRemoteLinkedData {
date;
vdtm;
unit;
value;
nomVal;
lowOff;
uppOff;
lowVal;
uppVal;
txt;
applic;
docs;
orgInfos;
rmks;

 getDate() {
        return date;
    }

 setDate( value) {
        this.date = value;
    }

 getVdtm() {
        return vdtm;
    }

 setVdtm( value) {
        this.vdtm = value;
    }

 getUnit() {
        return unit;
    }

 setUnit( value) {
        this.unit = value;
    }

 getValue() {
        return value;
    }

 setValue( value) {
        this.value = value;
    }

 getNomVal() {
        return nomVal;
    }

 setNomVal( value) {
        this.nomVal = value;
    }

 getLowOff() {
        return lowOff;
    }

 setLowOff( value) {
        this.lowOff = value;
    }

 getUppOff() {
        return uppOff;
    }

 setUppOff( value) {
        this.uppOff = value;
    }

 getLowVal() {
        return lowVal;
    }

 setLowVal( value) {
        this.lowVal = value;
    }

 getUppVal() {
        return uppVal;
    }

 setUppVal( value) {
        this.uppVal = value;
    }

 getTxt() {
        return txt;
    }

 setTxt( value) {
        this.txt = value;
    }

 getApplic() {
        return applic;
    }

 setApplic( value) {
        this.applic = value;
    }

 getDocs() {
        return docs;
    }

 setDocs( value) {
        this.docs = value;
    }

 getOrgInfos() {
        return orgInfos;
    }

 setOrgInfos( value) {
        this.orgInfos = value;
    }

 getRmks() {
        return rmks;
    }

 setRmks( value) {
        this.rmks = value;
    }

	constructor() {
		super("http://www.asd-europe.org/s-series/s3000l", "MeanTimeBetweenFailure");
	}
};

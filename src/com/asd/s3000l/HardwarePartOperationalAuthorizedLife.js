
module.exports = class HardwarePartOperationalAuthorizedLife extends EcRemoteLinkedData {
aul;
orgRef;
applic;
docs;
rmks;

 getAul() {
        if (this.aul == null) {
            this.aul = [];
        }
        return this.aul;
    }

 getOrgRef() {
        return orgRef;
    }

 setOrgRef( value) {
        this.orgRef = value;
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

 getRmks() {
        return rmks;
    }

 setRmks( value) {
        this.rmks = value;
    }

    Aul = class Aul {
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
    }

	constructor() {
		super("http://www.asd-europe.org/s-series/s3000l", "HardwarePartOperationalAuthorizedLife");
	}
};

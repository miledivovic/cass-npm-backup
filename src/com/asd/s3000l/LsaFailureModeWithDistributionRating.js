
module.exports = class LsaFailureModeWithDistributionRating extends EcRemoteLinkedData {
fmId;
fmDescr;
failRte;
detectRtg;
detectDescr;
lznRtg;
lznDescr;
isolRte;
distrRtg;
failureModeEffectNonAbstractClasses;
techFmRef;
orgInfos;
docs;
rmks;
applic;
uid;
crud;

 getFmId() {
        return fmId;
    }

 setFmId( value) {
        this.fmId = value;
    }

 getFmDescr() {
        return fmDescr;
    }

 setFmDescr( value) {
        this.fmDescr = value;
    }

 getFailRte() {
        if (failRte == null) {
            failRte = [];
        }
        return this.failRte;
    }

 getDetectRtg() {
        if (detectRtg == null) {
            detectRtg = [];
        }
        return this.detectRtg;
    }

 getDetectDescr() {
        return detectDescr;
    }

 setDetectDescr( value) {
        this.detectDescr = value;
    }

 getLznRtg() {
        return lznRtg;
    }

 setLznRtg( value) {
        this.lznRtg = value;
    }

 getLznDescr() {
        return lznDescr;
    }

 setLznDescr( value) {
        this.lznDescr = value;
    }

 getIsolRte() {
        return isolRte;
    }

 setIsolRte( value) {
        this.isolRte = value;
    }

 getDistrRtg() {
        if (distrRtg == null) {
            distrRtg = [];
        }
        return this.distrRtg;
    }

 getFailureModeEffectNonAbstractClasses() {
        if (failureModeEffectNonAbstractClasses == null) {
            failureModeEffectNonAbstractClasses = [];
        }
        return this.failureModeEffectNonAbstractClasses;
    }

 getTechFmRef() {
        if (techFmRef == null) {
            techFmRef = [];
        }
        return this.techFmRef;
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
		super("http://www.asd-europe.org/s-series/s3000l", "LsaFailureModeWithDistributionRating");
	}
};

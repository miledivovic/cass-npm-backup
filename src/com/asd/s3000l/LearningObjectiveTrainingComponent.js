
module.exports = class LearningObjectiveTrainingComponent extends EcRemoteLinkedData {
compSeqNr;
compName;
media;
method;
resRqmt;
loDepend;
assessmnts;
orgInfos;
docs;
rmks;
uid;
uri;
crud;

 getCompSeqNr() {
        return compSeqNr;
    }

 setCompSeqNr( value) {
        this.compSeqNr = value;
    }

 getCompName() {
        if (compName == null) {
            compName = [];
        }
        return this.compName;
    }

 getMedia() {
        return media;
    }

 setMedia( value) {
        this.media = value;
    }

 getMethod() {
        return method;
    }

 setMethod( value) {
        this.method = value;
    }

 getResRqmt() {
        if (resRqmt == null) {
            resRqmt = [];
        }
        return this.resRqmt;
    }

 getLoDepend() {
        if (loDepend == null) {
            loDepend = [];
        }
        return this.loDepend;
    }

 getAssessmnts() {
        return assessmnts;
    }

 setAssessmnts( value) {
        this.assessmnts = value;
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

 getUid() {
        return uid;
    }

 setUid( value) {
        this.uid = value;
    }

 getUri() {
        return uri;
    }

 setUri( value) {
        this.uri = value;
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
		super("http://www.asd-europe.org/s-series/s3000l", "LearningObjectiveTrainingComponent");
	}
};

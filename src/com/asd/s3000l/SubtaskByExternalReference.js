
module.exports = class SubtaskByExternalReference extends EcRemoteLinkedData {
subtId;
subtRole;
name;
infoCode;
subtDescr;
duration;
maintLoc;
eiObjState;
accParam;
subtaskCircuitBreakerSettingsNonAbstractClasses;
wcn;
precSubt;
inZone;
subtTgt;
docRef;
secs;
docs;
rmks;
applic;
resources;
uid;
uri;
crud;

 getSubtId() {
        return subtId;
    }

 setSubtId( value) {
        this.subtId = value;
    }

 getSubtRole() {
        return subtRole;
    }

 setSubtRole( value) {
        this.subtRole = value;
    }

 getName() {
        return name;
    }

 setName( value) {
        this.name = value;
    }

 getInfoCode() {
        return infoCode;
    }

 setInfoCode( value) {
        this.infoCode = value;
    }

 getSubtDescr() {
        return subtDescr;
    }

 setSubtDescr( value) {
        this.subtDescr = value;
    }

 getDuration() {
        return duration;
    }

 setDuration( value) {
        this.duration = value;
    }

 getMaintLoc() {
        return maintLoc;
    }

 setMaintLoc( value) {
        this.maintLoc = value;
    }

 getEiObjState() {
        if (eiObjState == null) {
            eiObjState = [];
        }
        return this.eiObjState;
    }

 getAccParam() {
        if (accParam == null) {
            accParam = [];
        }
        return this.accParam;
    }

 getSubtaskCircuitBreakerSettingsNonAbstractClasses() {
        if (subtaskCircuitBreakerSettingsNonAbstractClasses == null) {
            subtaskCircuitBreakerSettingsNonAbstractClasses = [];
        }
        return this.subtaskCircuitBreakerSettingsNonAbstractClasses;
    }

 getWcn() {
        if (wcn == null) {
            wcn = [];
        }
        return this.wcn;
    }

 getPrecSubt() {
        return precSubt;
    }

 setPrecSubt( value) {
        this.precSubt = value;
    }

 getInZone() {
        if (inZone == null) {
            inZone = [];
        }
        return this.inZone;
    }

 getSubtTgt() {
        if (subtTgt == null) {
            subtTgt = [];
        }
        return this.subtTgt;
    }

 getDocRef() {
        if (docRef == null) {
            docRef = [];
        }
        return this.docRef;
    }

 getSecs() {
        return secs;
    }

 setSecs( value) {
        this.secs = value;
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

 getResources() {
        return resources;
    }

 setResources( value) {
        this.resources = value;
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

    AccParam = class AccParam {
paraDescr;
paraValue;
docs;
rmks;
applic;

 getParaDescr() {
            return paraDescr;
        }

 setParaDescr( value) {
            this.paraDescr = value;
        }

 getParaValue() {
            if (paraValue == null) {
                paraValue = [];
            }
            return this.paraValue;
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
    }

	constructor() {
		super("http://www.asd-europe.org/s-series/s3000l", "SubtaskByExternalReference");
	}
};

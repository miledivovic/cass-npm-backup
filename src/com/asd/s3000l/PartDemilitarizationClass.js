
module.exports = class PartDemilitarizationClass extends EcRemoteLinkedData {
code;
applic;
docs;
rmks;
date;

 getCode() {
        return code;
    }

 setCode( value) {
        this.code = value;
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

 getDate() {
        return date;
    }

 setDate( value) {
        this.date = value;
    }

	constructor() {
		super("http://www.asd-europe.org/s-series/s3000l", "PartDemilitarizationClass");
	}
};

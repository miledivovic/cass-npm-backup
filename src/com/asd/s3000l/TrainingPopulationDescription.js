
module.exports = class TrainingPopulationDescription extends EcRemoteLinkedData {
descr;
lang;
date;
providedBy;
applic;

 getDescr() {
        return descr;
    }

 setDescr( value) {
        this.descr = value;
    }

 getLang() {
        return lang;
    }

 setLang( value) {
        this.lang = value;
    }

 getDate() {
        return date;
    }

 setDate( value) {
        this.date = value;
    }

 getProvidedBy() {
        return providedBy;
    }

 setProvidedBy( value) {
        this.providedBy = value;
    }

 getApplic() {
        return applic;
    }

 setApplic( value) {
        this.applic = value;
    }

	constructor() {
		super("http://www.asd-europe.org/s-series/s3000l", "TrainingPopulationDescription");
	}
};

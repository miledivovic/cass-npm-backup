
module.exports = class OrganizationName extends EcRemoteLinkedData {
descr;
lang;
date;
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

 getApplic() {
        return applic;
    }

 setApplic( value) {
        this.applic = value;
    }

	constructor() {
		super("http://www.asd-europe.org/s-series/s3000l", "OrganizationName");
	}
};

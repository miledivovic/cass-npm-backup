
module.exports = class TrainingComponentName extends EcRemoteLinkedData {
name;
lang;
providedBy;

 getName() {
        return name;
    }

 setName( value) {
        this.name = value;
    }

 getLang() {
        return lang;
    }

 setLang( value) {
        this.lang = value;
    }

 getProvidedBy() {
        return providedBy;
    }

 setProvidedBy( value) {
        this.providedBy = value;
    }

	constructor() {
		super("http://www.asd-europe.org/s-series/s3000l", "TrainingComponentName");
	}
};

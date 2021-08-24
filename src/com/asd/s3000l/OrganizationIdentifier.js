
module.exports = class OrganizationIdentifier extends EcRemoteLinkedData {
clazz;
applic;

 getClazz() {
        return clazz;
    }

 setClazz( value) {
        this.clazz = value;
    }

 getApplic() {
        return applic;
    }

 setApplic( value) {
        this.applic = value;
    }

	constructor() {
		super("http://www.asd-europe.org/s-series/s3000l", "OrganizationIdentifier");
	}
};

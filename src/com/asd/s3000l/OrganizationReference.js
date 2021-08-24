
module.exports = class OrganizationReference extends EcRemoteLinkedData {
orgId;
uidRef;

 getOrgId() {
        return orgId;
    }

 setOrgId( value) {
        this.orgId = value;
    }

 getUidRef() {
        return uidRef;
    }

 setUidRef( value) {
        this.uidRef = value;
    }

	constructor() {
		super("http://www.asd-europe.org/s-series/s3000l", "OrganizationReference");
	}
};

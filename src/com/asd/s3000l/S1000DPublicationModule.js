
module.exports = class S1000DPublicationModule extends EcRemoteLinkedData {
pmc;
pmTitle;
pmIss;
orgInfos;
rmks;
uid;
crud;

 getPmc() {
        return pmc;
    }

 setPmc( value) {
        this.pmc = value;
    }

 getPmTitle() {
        return pmTitle;
    }

 setPmTitle( value) {
        this.pmTitle = value;
    }

 getPmIss() {
        if (pmIss == null) {
            pmIss = [];
        }
        return this.pmIss;
    }

 getOrgInfos() {
        return orgInfos;
    }

 setOrgInfos( value) {
        this.orgInfos = value;
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
		super("http://www.asd-europe.org/s-series/s3000l", "S1000DPublicationModule");
	}
};

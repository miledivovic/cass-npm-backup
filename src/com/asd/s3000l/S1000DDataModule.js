
module.exports = class S1000DDataModule extends EcRemoteLinkedData {
dmc;
infoname;
dmIss;
orgInfos;
rmks;
uid;
crud;

 getDmc() {
        return dmc;
    }

 setDmc( value) {
        this.dmc = value;
    }

 getInfoname() {
        return infoname;
    }

 setInfoname( value) {
        this.infoname = value;
    }

 getDmIss() {
        if (this.dmIss == null) {
            this.dmIss = [];
        }
        return this.dmIss;
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
        if (this.crud == null) {
            return CrudCodeValues.I;
        } else {
            return crud;
        }
    }

 setCrud( value) {
        this.crud = value;
    }

	constructor() {
		super("http://www.asd-europe.org/s-series/s3000l", "S1000DDataModule");
	}
};

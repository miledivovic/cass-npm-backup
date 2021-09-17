
module.exports = class SubstanceDefinition extends EcRemoteLinkedData {
subsId;
name;
subsDescr;
usageCat;
riskDescr;
riskFactor;
recDate;
orgInfos;
docs;
rmks;
uid;
crud;

 getSubsId() {
        if (this.subsId == null) {
            this.subsId = [];
        }
        return this.subsId;
    }

 getName() {
        return name;
    }

 setName( value) {
        this.name = value;
    }

 getSubsDescr() {
        return subsDescr;
    }

 setSubsDescr( value) {
        this.subsDescr = value;
    }

 getUsageCat() {
        return usageCat;
    }

 setUsageCat( value) {
        this.usageCat = value;
    }

 getRiskDescr() {
        if (this.riskDescr == null) {
            this.riskDescr = [];
        }
        return this.riskDescr;
    }

 getRiskFactor() {
        return riskFactor;
    }

 setRiskFactor( value) {
        this.riskFactor = value;
    }

 getRecDate() {
        return recDate;
    }

 setRecDate( value) {
        this.recDate = value;
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
		super("http://www.asd-europe.org/s-series/s3000l", "SubstanceDefinition");
	}
};

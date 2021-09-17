
module.exports = class Contract extends EcRemoteLinkedData {
contrId;
contractor;
customer;
context;
relContr;
contrPv;
orgInfos;
docs;
rmks;
uid;
crud;

 getContrId() {
        if (this.contrId == null) {
            this.contrId = [];
        }
        return this.contrId;
    }

 getContractor() {
        if (this.contractor == null) {
            this.contractor = [];
        }
        return this.contractor;
    }

 getCustomer() {
        if (this.customer == null) {
            this.customer = [];
        }
        return this.customer;
    }

 getContext() {
        if (this.context == null) {
            this.context = [];
        }
        return this.context;
    }

 getRelContr() {
        if (this.relContr == null) {
            this.relContr = [];
        }
        return this.relContr;
    }

 getContrPv() {
        if (this.contrPv == null) {
            this.contrPv = [];
        }
        return this.contrPv;
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
		super("http://www.asd-europe.org/s-series/s3000l", "Contract");
	}
};

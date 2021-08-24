
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
        if (contrId == null) {
            contrId = [];
        }
        return this.contrId;
    }

 getContractor() {
        if (contractor == null) {
            contractor = [];
        }
        return this.contractor;
    }

 getCustomer() {
        if (customer == null) {
            customer = [];
        }
        return this.customer;
    }

 getContext() {
        if (context == null) {
            context = [];
        }
        return this.context;
    }

 getRelContr() {
        if (relContr == null) {
            relContr = [];
        }
        return this.relContr;
    }

 getContrPv() {
        if (contrPv == null) {
            contrPv = [];
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
		super("http://www.asd-europe.org/s-series/s3000l", "Contract");
	}
};

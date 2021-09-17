
module.exports = class MessageContext extends EcRemoteLinkedData {
prodRef;
prodVarRef;
projRef;
contrRef;
uid;
crud;

 getProdRef() {
        return prodRef;
    }

 setProdRef( value) {
        this.prodRef = value;
    }

 getProdVarRef() {
        return prodVarRef;
    }

 setProdVarRef( value) {
        this.prodVarRef = value;
    }

 getProjRef() {
        return projRef;
    }

 setProjRef( value) {
        this.projRef = value;
    }

 getContrRef() {
        return contrRef;
    }

 setContrRef( value) {
        this.contrRef = value;
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
		super("http://www.asd-europe.org/s-series/s3000l", "MessageContext");
	}
};

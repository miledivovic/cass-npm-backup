
const CrudCodeValues = require("./CrudCodeValues");
module.exports = class MessageContext extends EcRemoteLinkedData {
    prodRef;
    prodVarRef;
    projRef;
    contrRef;
    uid;
    crud;

    getProdRef() {
        return this.prodRef;
    }

    setProdRef(value) {
        this.prodRef = value;
    }

    getProdVarRef() {
        return this.prodVarRef;
    }

    setProdVarRef(value) {
        this.prodVarRef = value;
    }

    getProjRef() {
        return this.projRef;
    }

    setProjRef(value) {
        this.projRef = value;
    }

    getContrRef() {
        return this.contrRef;
    }

    setContrRef(value) {
        this.contrRef = value;
    }

    getUid() {
        return this.uid;
    }

    setUid(value) {
        this.uid = value;
    }

    getCrud() {
        if (this.crud == null) {
            return CrudCodeValues.I;
        } else {
            return this.crud;
        }
    }

    setCrud(value) {
        this.crud = value;
    }

    constructor() {
        super("http://www.asd-europe.org/s-series/s3000l", "MessageContext");
    }
};

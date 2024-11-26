
const CrudCodeValues = require("./CrudCodeValues");
module.exports = class MessageRelationship extends EcRemoteLinkedData {
    relType;
    msgRef;
    uid;
    crud;

    getRelType() {
        return this.relType;
    }

    setRelType(value) {
        this.relType = value;
    }

    getMsgRef() {
        return this.msgRef;
    }

    setMsgRef(value) {
        this.msgRef = value;
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
        super("http://www.asd-europe.org/s-series/s3000l", "MessageRelationship");
    }
};

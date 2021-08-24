
module.exports = class MessageRelationship extends EcRemoteLinkedData {
relType;
msgRef;
uid;
crud;

 getRelType() {
        return relType;
    }

 setRelType( value) {
        this.relType = value;
    }

 getMsgRef() {
        return msgRef;
    }

 setMsgRef( value) {
        this.msgRef = value;
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
		super("http://www.asd-europe.org/s-series/s3000l", "MessageRelationship");
	}
};

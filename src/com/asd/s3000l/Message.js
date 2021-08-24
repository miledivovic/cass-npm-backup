
module.exports = class Message extends EcRemoteLinkedData {
msgId;
msgDate;
msgLang;
msgStatus;
msgSend;
msgReceive;
msgContext;
msgContent;
relatedMsg;
secs;
rmks;
uid;
crud;

 getMsgId() {
        return msgId;
    }

 setMsgId( value) {
        this.msgId = value;
    }

 getMsgDate() {
        return msgDate;
    }

 setMsgDate( value) {
        this.msgDate = value;
    }

 getMsgLang() {
        return msgLang;
    }

 setMsgLang( value) {
        this.msgLang = value;
    }

 getMsgStatus() {
        return msgStatus;
    }

 setMsgStatus( value) {
        this.msgStatus = value;
    }

 getMsgSend() {
        if (msgSend == null) {
            msgSend = [];
        }
        return this.msgSend;
    }

 getMsgReceive() {
        if (msgReceive == null) {
            msgReceive = [];
        }
        return this.msgReceive;
    }

 getMsgContext() {
        return msgContext;
    }

 setMsgContext( value) {
        this.msgContext = value;
    }

 getMsgContent() {
        return msgContent;
    }

 setMsgContent( value) {
        this.msgContent = value;
    }

 getRelatedMsg() {
        if (relatedMsg == null) {
            relatedMsg = [];
        }
        return this.relatedMsg;
    }

 getSecs() {
        return secs;
    }

 setSecs( value) {
        this.secs = value;
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
		super("http://www.asd-europe.org/s-series/s3000l", "Message");
	}
};

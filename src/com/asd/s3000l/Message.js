
const CrudCodeValues = require("./CrudCodeValues");
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
        return this.msgId;
    }

    setMsgId(value) {
        this.msgId = value;
    }

    getMsgDate() {
        return this.msgDate;
    }

    setMsgDate(value) {
        this.msgDate = value;
    }

    getMsgLang() {
        return this.msgLang;
    }

    setMsgLang(value) {
        this.msgLang = value;
    }

    getMsgStatus() {
        return this.msgStatus;
    }

    setMsgStatus(value) {
        this.msgStatus = value;
    }

    getMsgSend() {
        if (this.msgSend == null) {
            this.msgSend = [];
        }
        return this.msgSend;
    }

    getMsgReceive() {
        if (this.msgReceive == null) {
            this.msgReceive = [];
        }
        return this.msgReceive;
    }

    getMsgContext() {
        return this.msgContext;
    }

    setMsgContext(value) {
        this.msgContext = value;
    }

    getMsgContent() {
        return this.msgContent;
    }

    setMsgContent(value) {
        this.msgContent = value;
    }

    getRelatedMsg() {
        if (this.relatedMsg == null) {
            this.relatedMsg = [];
        }
        return this.relatedMsg;
    }

    getSecs() {
        return this.secs;
    }

    setSecs(value) {
        this.secs = value;
    }

    getRmks() {
        return this.rmks;
    }

    setRmks(value) {
        this.rmks = value;
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
        super("http://www.asd-europe.org/s-series/s3000l", "Message");
    }
};


const CrudCodeValues = require("./CrudCodeValues");
module.exports = class MessageReference extends EcRemoteLinkedData {
    msgId;
    uidRef;

    getMsgId() {
        return this.msgId;
    }

    setMsgId(value) {
        this.msgId = value;
    }

    getUidRef() {
        return this.uidRef;
    }

    setUidRef(value) {
        this.uidRef = value;
    }

    constructor() {
        super("http://www.asd-europe.org/s-series/s3000l", "MessageReference");
    }
};

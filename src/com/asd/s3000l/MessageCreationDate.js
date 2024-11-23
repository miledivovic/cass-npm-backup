
const CrudCodeValues = require("./CrudCodeValues");
module.exports = class MessageCreationDate extends EcRemoteLinkedData {
    dateTime;

    getDateTime() {
        return this.dateTime;
    }

    setDateTime(value) {
        this.dateTime = value;
    }

    constructor() {
        super("http://www.asd-europe.org/s-series/s3000l", "MessageCreationDate");
    }
};

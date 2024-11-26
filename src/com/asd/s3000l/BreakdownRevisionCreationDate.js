
const CrudCodeValues = require("./CrudCodeValues");
module.exports = class BreakdownRevisionCreationDate extends EcRemoteLinkedData {
    date;

    getDate() {
        return this.date;
    }

    setDate(value) {
        this.date = value;
    }

    constructor() {
        super("http://www.asd-europe.org/s-series/s3000l", "BreakdownRevisionCreationDate");
    }
};


module.exports = class MessageCreationDate extends EcRemoteLinkedData {
dateTime;

 getDateTime() {
        return dateTime;
    }

 setDateTime( value) {
        this.dateTime = value;
    }

	constructor() {
		super("http://www.asd-europe.org/s-series/s3000l", "MessageCreationDate");
	}
};

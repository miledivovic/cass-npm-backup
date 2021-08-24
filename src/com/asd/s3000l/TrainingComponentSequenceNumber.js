
module.exports = class TrainingComponentSequenceNumber extends EcRemoteLinkedData {
value;

 getValue() {
        return value;
    }

 setValue( value) {
        this.value = value;
    }

	constructor() {
		super("http://www.asd-europe.org/s-series/s3000l", "TrainingComponentSequenceNumber");
	}
};

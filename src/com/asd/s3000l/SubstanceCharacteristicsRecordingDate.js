
module.exports = class SubstanceCharacteristicsRecordingDate extends EcRemoteLinkedData {
date;

 getDate() {
        return date;
    }

 setDate( value) {
        this.date = value;
    }

	constructor() {
		super("http://www.asd-europe.org/s-series/s3000l", "SubstanceCharacteristicsRecordingDate");
	}
};

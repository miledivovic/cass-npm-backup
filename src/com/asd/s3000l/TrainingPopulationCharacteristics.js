
module.exports = class TrainingPopulationCharacteristics extends EcRemoteLinkedData {
trainPopDescr;
number;

 getTrainPopDescr() {
        if (this.trainPopDescr == null) {
            this.trainPopDescr = [];
        }
        return this.trainPopDescr;
    }

 getNumber() {
        if (this.number == null) {
            this.number = [];
        }
        return this.number;
    }

	constructor() {
		super("http://www.asd-europe.org/s-series/s3000l", "TrainingPopulationCharacteristics");
	}
};


module.exports = class TrainingPopulationCharacteristics extends EcRemoteLinkedData {
trainPopDescr;
number;

 getTrainPopDescr() {
        if (trainPopDescr == null) {
            trainPopDescr = [];
        }
        return this.trainPopDescr;
    }

 getNumber() {
        if (number == null) {
            number = [];
        }
        return this.number;
    }

	constructor() {
		super("http://www.asd-europe.org/s-series/s3000l", "TrainingPopulationCharacteristics");
	}
};

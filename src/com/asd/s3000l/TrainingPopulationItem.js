
module.exports = class TrainingPopulationItem extends EcRemoteLinkedData {
trainPopData;
compDef;

 getTrainPopData() {
        return trainPopData;
    }

 setTrainPopData( value) {
        this.trainPopData = value;
    }

 getCompDef() {
        if (compDef == null) {
            compDef = [];
        }
        return this.compDef;
    }

	constructor() {
		super("http://www.asd-europe.org/s-series/s3000l", "TrainingPopulationItem");
	}
};


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
        if (this.compDef == null) {
            this.compDef = [];
        }
        return this.compDef;
    }

	constructor() {
		super("http://www.asd-europe.org/s-series/s3000l", "TrainingPopulationItem");
	}
};

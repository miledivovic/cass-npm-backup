
module.exports = class TaskAffectivelevelOfLearningIterationIdentifier extends EcRemoteLinkedData {
clazz;
setBy;

 getClazz() {
        return clazz;
    }

 setClazz( value) {
        this.clazz = value;
    }

 getSetBy() {
        return setBy;
    }

 setSetBy( value) {
        this.setBy = value;
    }

	constructor() {
		super("http://www.asd-europe.org/s-series/s3000l", "TaskAffectivelevelOfLearningIterationIdentifier");
	}
};


module.exports = class ContractedBlockOfSerializedItems extends EcRemoteLinkedData {
lowBound;
uppBound;

 getLowBound() {
        return lowBound;
    }

 setLowBound( value) {
        this.lowBound = value;
    }

 getUppBound() {
        return uppBound;
    }

 setUppBound( value) {
        this.uppBound = value;
    }

	constructor() {
		super("http://www.asd-europe.org/s-series/s3000l", "ContractedBlockOfSerializedItems");
	}
};

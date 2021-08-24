
module.exports = class BreakdownElementRevisionReference extends EcRemoteLinkedData {
beId;
beRevId;
uidRef;

 getBeId() {
        return beId;
    }

 setBeId( value) {
        this.beId = value;
    }

 getBeRevId() {
        return beRevId;
    }

 setBeRevId( value) {
        this.beRevId = value;
    }

 getUidRef() {
        return uidRef;
    }

 setUidRef( value) {
        this.uidRef = value;
    }

	constructor() {
		super("http://www.asd-europe.org/s-series/s3000l", "BreakdownElementRevisionReference");
	}
};

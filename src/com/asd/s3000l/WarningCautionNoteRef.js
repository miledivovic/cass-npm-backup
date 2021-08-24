
module.exports = class WarningCautionNoteRef extends EcRemoteLinkedData {
wcnId;
uidRef;

 getWcnId() {
        return wcnId;
    }

 setWcnId( value) {
        this.wcnId = value;
    }

 getUidRef() {
        return uidRef;
    }

 setUidRef( value) {
        this.uidRef = value;
    }

	constructor() {
		super("http://www.asd-europe.org/s-series/s3000l", "WarningCautionNoteRef");
	}
};

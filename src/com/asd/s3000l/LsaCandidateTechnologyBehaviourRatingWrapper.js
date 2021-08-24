
module.exports = class LsaCandidateTechnologyBehaviourRatingWrapper extends EcRemoteLinkedData {
bhvrRtg;
sensRtg;
docs;
rmks;

 getBhvrRtg() {
        if (bhvrRtg == null) {
            bhvrRtg = [];
        }
        return this.bhvrRtg;
    }

 getSensRtg() {
        if (sensRtg == null) {
            sensRtg = [];
        }
        return this.sensRtg;
    }

 getDocs() {
        return docs;
    }

 setDocs( value) {
        this.docs = value;
    }

 getRmks() {
        return rmks;
    }

 setRmks( value) {
        this.rmks = value;
    }

	constructor() {
		super("http://www.asd-europe.org/s-series/s3000l", "LsaCandidateTechnologyBehaviourRatingWrapper");
	}
};


const CrudCodeValues = require("./CrudCodeValues");
module.exports = class LsaCandidateTechnologyBehaviourRatingWrapper extends EcRemoteLinkedData {
    bhvrRtg;
    sensRtg;
    docs;
    rmks;

    getBhvrRtg() {
        if (this.bhvrRtg == null) {
            this.bhvrRtg = [];
        }
        return this.bhvrRtg;
    }

    getSensRtg() {
        if (this.sensRtg == null) {
            this.sensRtg = [];
        }
        return this.sensRtg;
    }

    getDocs() {
        return this.docs;
    }

    setDocs(value) {
        this.docs = value;
    }

    getRmks() {
        return this.rmks;
    }

    setRmks(value) {
        this.rmks = value;
    }

    constructor() {
        super("http://www.asd-europe.org/s-series/s3000l", "LsaCandidateTechnologyBehaviourRatingWrapper");
    }
};

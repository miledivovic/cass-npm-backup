
const CrudCodeValues = require("./CrudCodeValues");
module.exports = class SpecialEvent extends EcRemoteLinkedData {
    evntTitle;
    evntDescr;
    evntGrp;
    specialEventOccurrenceNonAbstractClasses;
    docs;
    rmks;
    uid;
    crud;

    getEvntTitle() {
        return this.evntTitle;
    }

    setEvntTitle(value) {
        this.evntTitle = value;
    }

    getEvntDescr() {
        return this.evntDescr;
    }

    setEvntDescr(value) {
        this.evntDescr = value;
    }

    getEvntGrp() {
        return this.evntGrp;
    }

    setEvntGrp(value) {
        this.evntGrp = value;
    }

    getSpecialEventOccurrenceNonAbstractClasses() {
        if (this.specialEventOccurrenceNonAbstractClasses == null) {
            this.specialEventOccurrenceNonAbstractClasses = [];
        }
        return this.specialEventOccurrenceNonAbstractClasses;
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

    getUid() {
        return this.uid;
    }

    setUid(value) {
        this.uid = value;
    }

    getCrud() {
        if (this.crud == null) {
            return CrudCodeValues.I;
        } else {
            return this.crud;
        }
    }

    setCrud(value) {
        this.crud = value;
    }

    constructor() {
        super("http://www.asd-europe.org/s-series/s3000l", "SpecialEvent");
    }
};

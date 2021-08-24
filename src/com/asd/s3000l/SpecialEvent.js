
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
        return evntTitle;
    }

 setEvntTitle( value) {
        this.evntTitle = value;
    }

 getEvntDescr() {
        return evntDescr;
    }

 setEvntDescr( value) {
        this.evntDescr = value;
    }

 getEvntGrp() {
        return evntGrp;
    }

 setEvntGrp( value) {
        this.evntGrp = value;
    }

 getSpecialEventOccurrenceNonAbstractClasses() {
        if (specialEventOccurrenceNonAbstractClasses == null) {
            specialEventOccurrenceNonAbstractClasses = [];
        }
        return this.specialEventOccurrenceNonAbstractClasses;
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

 getUid() {
        return uid;
    }

 setUid( value) {
        this.uid = value;
    }

 getCrud() {
        if (crud == null) {
            return CrudCodeValues.I;
        } else {
            return crud;
        }
    }

 setCrud( value) {
        this.crud = value;
    }

	constructor() {
		super("http://www.asd-europe.org/s-series/s3000l", "SpecialEvent");
	}
};

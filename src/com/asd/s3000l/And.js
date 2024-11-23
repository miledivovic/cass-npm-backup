

const CrudCodeValues = require("./CrudCodeValues");
module.exports = class And extends EcRemoteLinkedData {
    applicabilityEvaluationNonAbstractClasses;
    uid;
    crud;

    getApplicabilityEvaluationNonAbstractClasses() {
        if (this.applicabilityEvaluationNonAbstractClasses == null) {
            this.applicabilityEvaluationNonAbstractClasses = [];
        }
        return this.applicabilityEvaluationNonAbstractClasses;
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
        super("http://www.asd-europe.org/s-series/s3000l", "And");
    }
};

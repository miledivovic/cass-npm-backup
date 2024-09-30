
const CrudCodeValues = require("./CrudCodeValues");
module.exports = class TaskRevision extends EcRemoteLinkedData {
    taskRevId;
    name;
    status;
    revChangeDescr;
    infoCode;
    persSafety;
    prodIntegr;
    opImpact;
    duration;
    laborTime;
    subtaskNonAbstractClasses;
    taskTrainDecisionNonAbstractClasses;
    wcn;
    taskJust;
    dm;
    resources;
    docs;
    rmks;
    uid;
    crud;

    getTaskRevId() {
        return this.taskRevId;
    }

    setTaskRevId(value) {
        this.taskRevId = value;
    }

    getName() {
        if (this.name == null) {
            this.name = [];
        }
        return this.name;
    }

    getStatus() {
        return this.status;
    }

    setStatus(value) {
        this.status = value;
    }

    getRevChangeDescr() {
        return this.revChangeDescr;
    }

    setRevChangeDescr(value) {
        this.revChangeDescr = value;
    }

    getInfoCode() {
        return this.infoCode;
    }

    setInfoCode(value) {
        this.infoCode = value;
    }

    getPersSafety() {
        return this.persSafety;
    }

    setPersSafety(value) {
        this.persSafety = value;
    }

    getProdIntegr() {
        return this.prodIntegr;
    }

    setProdIntegr(value) {
        this.prodIntegr = value;
    }

    getOpImpact() {
        return this.opImpact;
    }

    setOpImpact(value) {
        this.opImpact = value;
    }

    getDuration() {
        if (this.duration == null) {
            this.duration = [];
        }
        return this.duration;
    }

    getLaborTime() {
        if (this.laborTime == null) {
            this.laborTime = [];
        }
        return this.laborTime;
    }

    getSubtaskNonAbstractClasses() {
        if (this.subtaskNonAbstractClasses == null) {
            this.subtaskNonAbstractClasses = [];
        }
        return this.subtaskNonAbstractClasses;
    }

    getTaskTrainDecisionNonAbstractClasses() {
        if (this.taskTrainDecisionNonAbstractClasses == null) {
            this.taskTrainDecisionNonAbstractClasses = [];
        }
        return this.taskTrainDecisionNonAbstractClasses;
    }

    getWcn() {
        if (this.wcn == null) {
            this.wcn = [];
        }
        return this.wcn;
    }

    getTaskJust() {
        if (this.taskJust == null) {
            this.taskJust = [];
        }
        return this.taskJust;
    }

    getDm() {
        if (this.dm == null) {
            this.dm = [];
        }
        return this.dm;
    }

    getResources() {
        return this.resources;
    }

    setResources(value) {
        this.resources = value;
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

    Resources = class Resources {
        taskResourceNonAbstractClasses;

        getTaskResourceNonAbstractClasses() {
            if (this.taskResourceNonAbstractClasses == null) {
                this.taskResourceNonAbstractClasses = [];
            }
            return this.taskResourceNonAbstractClasses;
        }
    }

    constructor() {
        super("http://www.asd-europe.org/s-series/s3000l", "TaskRevision");
    }
};

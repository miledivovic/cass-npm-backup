
const CrudCodeValues = require("./CrudCodeValues");
module.exports = class SoftwareElementRevision extends EcRemoteLinkedData {
    beRevId;
    status;
    msi;
    swSize;
    modFreq;
    beRevDate;
    funcFail;
    beRel;
    swPart;
    lsaCand;
    candRtnl;
    maintCpt;
    maintSln;
    productServiceLife;
    scheduledMaintenanceInterval;
    maintenanceFreeOperatingPeriod;
    downTime;
    maintenanceManHoursPerOperatingHour;
    meanTimeBetweenUnscheduledRemoval;
    meanTimeToRepair;
    directMaintenanceCost;
    shopProcessingTime;
    failuresPerOperatingHour;
    replacementTime;
    lifeCycleCost;
    meanTimeBetweenFailure;
    failureRate;
    anlysActvty;
    taskReq;
    taskTargetNonAbstractClasses;
    docs;
    rmks;
    dmgAnlys;
    failModes;
    detectMnCaps;
    uid;
    crud;

    getBeRevId() {
        return this.beRevId;
    }

    setBeRevId(value) {
        this.beRevId = value;
    }

    getStatus() {
        return this.status;
    }

    setStatus(value) {
        this.status = value;
    }

    getMsi() {
        return this.msi;
    }

    setMsi(value) {
        this.msi = value;
    }

    getSwSize() {
        return this.swSize;
    }

    setSwSize(value) {
        this.swSize = value;
    }

    getModFreq() {
        return this.modFreq;
    }

    setModFreq(value) {
        this.modFreq = value;
    }

    getBeRevDate() {
        return this.beRevDate;
    }

    setBeRevDate(value) {
        this.beRevDate = value;
    }

    getFuncFail() {
        if (this.funcFail == null) {
            this.funcFail = [];
        }
        return this.funcFail;
    }

    getBeRel() {
        if (this.beRel == null) {
            this.beRel = [];
        }
        return this.beRel;
    }

    getSwPart() {
        if (this.swPart == null) {
            this.swPart = [];
        }
        return this.swPart;
    }

    getLsaCand() {
        return this.lsaCand;
    }

    setLsaCand(value) {
        this.lsaCand = value;
    }

    getCandRtnl() {
        return this.candRtnl;
    }

    setCandRtnl(value) {
        this.candRtnl = value;
    }

    getMaintCpt() {
        if (this.maintCpt == null) {
            this.maintCpt = [];
        }
        return this.maintCpt;
    }

    getMaintSln() {
        if (this.maintSln == null) {
            this.maintSln = [];
        }
        return this.maintSln;
    }

    getProductServiceLife() {
        if (this.productServiceLife == null) {
            this.productServiceLife = [];
        }
        return this.productServiceLife;
    }

    getScheduledMaintenanceInterval() {
        if (this.scheduledMaintenanceInterval == null) {
            this.scheduledMaintenanceInterval = [];
        }
        return this.scheduledMaintenanceInterval;
    }

    getMaintenanceFreeOperatingPeriod() {
        if (this.maintenanceFreeOperatingPeriod == null) {
            this.maintenanceFreeOperatingPeriod = [];
        }
        return this.maintenanceFreeOperatingPeriod;
    }

    getDownTime() {
        if (this.downTime == null) {
            this.downTime = [];
        }
        return this.downTime;
    }

    getMaintenanceManHoursPerOperatingHour() {
        if (this.maintenanceManHoursPerOperatingHour == null) {
            this.maintenanceManHoursPerOperatingHour = [];
        }
        return this.maintenanceManHoursPerOperatingHour;
    }

    getMeanTimeBetweenUnscheduledRemoval() {
        if (this.meanTimeBetweenUnscheduledRemoval == null) {
            this.meanTimeBetweenUnscheduledRemoval = [];
        }
        return this.meanTimeBetweenUnscheduledRemoval;
    }

    getMeanTimeToRepair() {
        if (this.meanTimeToRepair == null) {
            this.meanTimeToRepair = [];
        }
        return this.meanTimeToRepair;
    }

    getDirectMaintenanceCost() {
        if (this.directMaintenanceCost == null) {
            this.directMaintenanceCost = [];
        }
        return this.directMaintenanceCost;
    }

    getShopProcessingTime() {
        if (this.shopProcessingTime == null) {
            this.shopProcessingTime = [];
        }
        return this.shopProcessingTime;
    }

    getFailuresPerOperatingHour() {
        if (this.failuresPerOperatingHour == null) {
            this.failuresPerOperatingHour = [];
        }
        return this.failuresPerOperatingHour;
    }

    getReplacementTime() {
        if (this.replacementTime == null) {
            this.replacementTime = [];
        }
        return this.replacementTime;
    }

    getLifeCycleCost() {
        if (this.lifeCycleCost == null) {
            this.lifeCycleCost = [];
        }
        return this.lifeCycleCost;
    }

    getMeanTimeBetweenFailure() {
        if (this.meanTimeBetweenFailure == null) {
            this.meanTimeBetweenFailure = [];
        }
        return this.meanTimeBetweenFailure;
    }

    getFailureRate() {
        if (this.failureRate == null) {
            this.failureRate = [];
        }
        return this.failureRate;
    }

    getAnlysActvty() {
        return this.anlysActvty;
    }

    setAnlysActvty(value) {
        this.anlysActvty = value;
    }

    getTaskReq() {
        if (this.taskReq == null) {
            this.taskReq = [];
        }
        return this.taskReq;
    }

    getTaskTargetNonAbstractClasses() {
        if (this.taskTargetNonAbstractClasses == null) {
            this.taskTargetNonAbstractClasses = [];
        }
        return this.taskTargetNonAbstractClasses;
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

    getDmgAnlys() {
        return this.dmgAnlys;
    }

    setDmgAnlys(value) {
        this.dmgAnlys = value;
    }

    getFailModes() {
        return this.failModes;
    }

    setFailModes(value) {
        this.failModes = value;
    }

    getDetectMnCaps() {
        return this.detectMnCaps;
    }

    setDetectMnCaps(value) {
        this.detectMnCaps = value;
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
        super("http://www.asd-europe.org/s-series/s3000l", "SoftwareElementRevision");
    }
};

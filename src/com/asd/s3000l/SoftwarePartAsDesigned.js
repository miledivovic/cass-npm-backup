
const CrudCodeValues = require("./CrudCodeValues");
module.exports = class SoftwarePartAsDesigned extends EcRemoteLinkedData {
    partId;
    name;
    dec;
    phstReq;
    maturity;
    obsRisk;
    swType;
    swSize;
    partsList;
    altPart;
    secs;
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
    orgInfos;
    docs;
    rmks;
    dmgAnlys;
    failModes;
    detectMnCaps;
    uid;
    crud;

    getPartId() {
        if (this.partId == null) {
            this.partId = [];
        }
        return this.partId;
    }

    getName() {
        if (this.name == null) {
            this.name = [];
        }
        return this.name;
    }

    getDec() {
        return this.dec;
    }

    setDec(value) {
        this.dec = value;
    }

    getPhstReq() {
        return this.phstReq;
    }

    setPhstReq(value) {
        this.phstReq = value;
    }

    getMaturity() {
        if (this.maturity == null) {
            this.maturity = [];
        }
        return this.maturity;
    }

    getObsRisk() {
        if (this.obsRisk == null) {
            this.obsRisk = [];
        }
        return this.obsRisk;
    }

    getSwType() {
        return this.swType;
    }

    setSwType(value) {
        this.swType = value;
    }

    getSwSize() {
        return this.swSize;
    }

    setSwSize(value) {
        this.swSize = value;
    }

    getPartsList() {
        if (this.partsList == null) {
            this.partsList = [];
        }
        return this.partsList;
    }

    getAltPart() {
        if (this.altPart == null) {
            this.altPart = [];
        }
        return this.altPart;
    }

    getSecs() {
        return this.secs;
    }

    setSecs(value) {
        this.secs = value;
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

    getOrgInfos() {
        return this.orgInfos;
    }

    setOrgInfos(value) {
        this.orgInfos = value;
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
        super("http://www.asd-europe.org/s-series/s3000l", "SoftwarePartAsDesigned");
    }
};

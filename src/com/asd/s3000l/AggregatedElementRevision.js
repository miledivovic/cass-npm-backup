
module.exports = class AggregatedElementRevision extends EcRemoteLinkedData {
beRevId;
status;
msi;
beRevDate;
beDescr;
funcFail;
beRel;
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
        return beRevId;
    }

 setBeRevId( value) {
        this.beRevId = value;
    }

 getStatus() {
        return status;
    }

 setStatus( value) {
        this.status = value;
    }

 getMsi() {
        return msi;
    }

 setMsi( value) {
        this.msi = value;
    }

 getBeRevDate() {
        return beRevDate;
    }

 setBeRevDate( value) {
        this.beRevDate = value;
    }

 getBeDescr() {
        return beDescr;
    }

 setBeDescr( value) {
        this.beDescr = value;
    }

 getFuncFail() {
        if (funcFail == null) {
            funcFail = [];
        }
        return this.funcFail;
    }

 getBeRel() {
        if (beRel == null) {
            beRel = [];
        }
        return this.beRel;
    }

 getLsaCand() {
        return lsaCand;
    }

 setLsaCand( value) {
        this.lsaCand = value;
    }

 getCandRtnl() {
        return candRtnl;
    }

 setCandRtnl( value) {
        this.candRtnl = value;
    }

 getMaintCpt() {
        if (maintCpt == null) {
            maintCpt = [];
        }
        return this.maintCpt;
    }

 getMaintSln() {
        if (maintSln == null) {
            maintSln = [];
        }
        return this.maintSln;
    }

 getProductServiceLife() {
        if (productServiceLife == null) {
            productServiceLife = [];
        }
        return this.productServiceLife;
    }

 getScheduledMaintenanceInterval() {
        if (scheduledMaintenanceInterval == null) {
            scheduledMaintenanceInterval = [];
        }
        return this.scheduledMaintenanceInterval;
    }

 getMaintenanceFreeOperatingPeriod() {
        if (maintenanceFreeOperatingPeriod == null) {
            maintenanceFreeOperatingPeriod = [];
        }
        return this.maintenanceFreeOperatingPeriod;
    }

 getDownTime() {
        if (downTime == null) {
            downTime = [];
        }
        return this.downTime;
    }

 getMaintenanceManHoursPerOperatingHour() {
        if (maintenanceManHoursPerOperatingHour == null) {
            maintenanceManHoursPerOperatingHour = [];
        }
        return this.maintenanceManHoursPerOperatingHour;
    }

 getMeanTimeBetweenUnscheduledRemoval() {
        if (meanTimeBetweenUnscheduledRemoval == null) {
            meanTimeBetweenUnscheduledRemoval = [];
        }
        return this.meanTimeBetweenUnscheduledRemoval;
    }

 getMeanTimeToRepair() {
        if (meanTimeToRepair == null) {
            meanTimeToRepair = [];
        }
        return this.meanTimeToRepair;
    }

 getDirectMaintenanceCost() {
        if (directMaintenanceCost == null) {
            directMaintenanceCost = [];
        }
        return this.directMaintenanceCost;
    }

 getShopProcessingTime() {
        if (shopProcessingTime == null) {
            shopProcessingTime = [];
        }
        return this.shopProcessingTime;
    }

 getFailuresPerOperatingHour() {
        if (failuresPerOperatingHour == null) {
            failuresPerOperatingHour = [];
        }
        return this.failuresPerOperatingHour;
    }

 getReplacementTime() {
        if (replacementTime == null) {
            replacementTime = [];
        }
        return this.replacementTime;
    }

 getLifeCycleCost() {
        if (lifeCycleCost == null) {
            lifeCycleCost = [];
        }
        return this.lifeCycleCost;
    }

 getMeanTimeBetweenFailure() {
        if (meanTimeBetweenFailure == null) {
            meanTimeBetweenFailure = [];
        }
        return this.meanTimeBetweenFailure;
    }

 getFailureRate() {
        if (failureRate == null) {
            failureRate = [];
        }
        return this.failureRate;
    }

 getAnlysActvty() {
        return anlysActvty;
    }

 setAnlysActvty( value) {
        this.anlysActvty = value;
    }

 getTaskReq() {
        if (taskReq == null) {
            taskReq = [];
        }
        return this.taskReq;
    }

 getTaskTargetNonAbstractClasses() {
        if (taskTargetNonAbstractClasses == null) {
            taskTargetNonAbstractClasses = [];
        }
        return this.taskTargetNonAbstractClasses;
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

 getDmgAnlys() {
        return dmgAnlys;
    }

 setDmgAnlys( value) {
        this.dmgAnlys = value;
    }

 getFailModes() {
        return failModes;
    }

 setFailModes( value) {
        this.failModes = value;
    }

 getDetectMnCaps() {
        return detectMnCaps;
    }

 setDetectMnCaps( value) {
        this.detectMnCaps = value;
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
		super("http://www.asd-europe.org/s-series/s3000l", "AggregatedElementRevision");
	}
};

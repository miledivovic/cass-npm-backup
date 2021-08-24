
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
        if (partId == null) {
            partId = [];
        }
        return this.partId;
    }

 getName() {
        if (name == null) {
            name = [];
        }
        return this.name;
    }

 getDec() {
        return dec;
    }

 setDec( value) {
        this.dec = value;
    }

 getPhstReq() {
        return phstReq;
    }

 setPhstReq( value) {
        this.phstReq = value;
    }

 getMaturity() {
        if (maturity == null) {
            maturity = [];
        }
        return this.maturity;
    }

 getObsRisk() {
        if (obsRisk == null) {
            obsRisk = [];
        }
        return this.obsRisk;
    }

 getSwType() {
        return swType;
    }

 setSwType( value) {
        this.swType = value;
    }

 getSwSize() {
        return swSize;
    }

 setSwSize( value) {
        this.swSize = value;
    }

 getPartsList() {
        if (partsList == null) {
            partsList = [];
        }
        return this.partsList;
    }

 getAltPart() {
        if (altPart == null) {
            altPart = [];
        }
        return this.altPart;
    }

 getSecs() {
        return secs;
    }

 setSecs( value) {
        this.secs = value;
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

 getOrgInfos() {
        return orgInfos;
    }

 setOrgInfos( value) {
        this.orgInfos = value;
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
		super("http://www.asd-europe.org/s-series/s3000l", "SoftwarePartAsDesigned");
	}
};

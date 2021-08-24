
module.exports = class HardwarePartAsDesigned extends EcRemoteLinkedData {
partId;
name;
haz;
opAul;
ftc;
emi;
ess;
ems;
mse;
rse;
logCat;
rep;
sra;
rpy;
maintStart;
inUseDispDescr;
plndDispDescr;
envmtInUseClass;
envmtDispClass;
consRte;
dec;
phstReq;
maturity;
obsRisk;
partsList;
altPart;
contSubs;
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

 getHaz() {
        return haz;
    }

 setHaz( value) {
        this.haz = value;
    }

 getOpAul() {
        if (opAul == null) {
            opAul = [];
        }
        return this.opAul;
    }

 getFtc() {
        return ftc;
    }

 setFtc( value) {
        this.ftc = value;
    }

 getEmi() {
        return emi;
    }

 setEmi( value) {
        this.emi = value;
    }

 getEss() {
        return ess;
    }

 setEss( value) {
        this.ess = value;
    }

 getEms() {
        return ems;
    }

 setEms( value) {
        this.ems = value;
    }

 getMse() {
        return mse;
    }

 setMse( value) {
        this.mse = value;
    }

 getRse() {
        return rse;
    }

 setRse( value) {
        this.rse = value;
    }

 getLogCat() {
        return logCat;
    }

 setLogCat( value) {
        this.logCat = value;
    }

 getRep() {
        return rep;
    }

 setRep( value) {
        this.rep = value;
    }

 getSra() {
        if (sra == null) {
            sra = [];
        }
        return this.sra;
    }

 getRpy() {
        if (rpy == null) {
            rpy = [];
        }
        return this.rpy;
    }

 getMaintStart() {
        return maintStart;
    }

 setMaintStart( value) {
        this.maintStart = value;
    }

 getInUseDispDescr() {
        if (inUseDispDescr == null) {
            inUseDispDescr = [];
        }
        return this.inUseDispDescr;
    }

 getPlndDispDescr() {
        if (plndDispDescr == null) {
            plndDispDescr = [];
        }
        return this.plndDispDescr;
    }

 getEnvmtInUseClass() {
        if (envmtInUseClass == null) {
            envmtInUseClass = [];
        }
        return this.envmtInUseClass;
    }

 getEnvmtDispClass() {
        if (envmtDispClass == null) {
            envmtDispClass = [];
        }
        return this.envmtDispClass;
    }

 getConsRte() {
        if (consRte == null) {
            consRte = [];
        }
        return this.consRte;
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

 getContSubs() {
        if (contSubs == null) {
            contSubs = [];
        }
        return this.contSubs;
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
		super("http://www.asd-europe.org/s-series/s3000l", "HardwarePartAsDesigned");
	}
};

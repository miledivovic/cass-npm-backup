
module.exports = class AllowedProductConfigurationHardwarePartAsDesigned extends EcRemoteLinkedData {
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
authToOp;
nestedPC;
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

 getHaz() {
        return haz;
    }

 setHaz( value) {
        this.haz = value;
    }

 getOpAul() {
        if (this.opAul == null) {
            this.opAul = [];
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
        if (this.sra == null) {
            this.sra = [];
        }
        return this.sra;
    }

 getRpy() {
        if (this.rpy == null) {
            this.rpy = [];
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
        if (this.inUseDispDescr == null) {
            this.inUseDispDescr = [];
        }
        return this.inUseDispDescr;
    }

 getPlndDispDescr() {
        if (this.plndDispDescr == null) {
            this.plndDispDescr = [];
        }
        return this.plndDispDescr;
    }

 getEnvmtInUseClass() {
        if (this.envmtInUseClass == null) {
            this.envmtInUseClass = [];
        }
        return this.envmtInUseClass;
    }

 getEnvmtDispClass() {
        if (this.envmtDispClass == null) {
            this.envmtDispClass = [];
        }
        return this.envmtDispClass;
    }

 getConsRte() {
        if (this.consRte == null) {
            this.consRte = [];
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

 getContSubs() {
        if (this.contSubs == null) {
            this.contSubs = [];
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
        return anlysActvty;
    }

 setAnlysActvty( value) {
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

 getAuthToOp() {
        return authToOp;
    }

 setAuthToOp( value) {
        this.authToOp = value;
    }

 getNestedPC() {
        if (this.nestedPC == null) {
            this.nestedPC = [];
        }
        return this.nestedPC;
    }

 getUid() {
        return uid;
    }

 setUid( value) {
        this.uid = value;
    }

 getCrud() {
        if (this.crud == null) {
            return CrudCodeValues.I;
        } else {
            return crud;
        }
    }

 setCrud( value) {
        this.crud = value;
    }

	constructor() {
		super("http://www.asd-europe.org/s-series/s3000l", "AllowedProductConfigurationHardwarePartAsDesigned");
	}
};

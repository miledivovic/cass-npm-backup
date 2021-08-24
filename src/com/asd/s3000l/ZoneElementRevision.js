
module.exports = class ZoneElementRevision extends EcRemoteLinkedData {
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

    DetectMnCaps = class DetectMnCaps {
detectMnCap;

 getDetectMnCap() {
            if (detectMnCap == null) {
                detectMnCap = [];
            }
            return this.detectMnCap;
        }
    }

    Dmc = class Dmc {
cost;
kpiMthd;
kpiStatus;
kpiPctl;
orgInfos;
docs;
rmks;
applic;

 getCost() {
            if (cost == null) {
                cost = [];
            }
            return this.cost;
        }

 getKpiMthd() {
            return kpiMthd;
        }

 setKpiMthd( value) {
            this.kpiMthd = value;
        }

 getKpiStatus() {
            return kpiStatus;
        }

 setKpiStatus( value) {
            this.kpiStatus = value;
        }

 getKpiPctl() {
            return kpiPctl;
        }

 setKpiPctl( value) {
            this.kpiPctl = value;
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

 getApplic() {
            return applic;
        }

 setApplic( value) {
            this.applic = value;
        }
    }

    DmgAnlys = class DmgAnlys {
techBhvr;
dmg;

 getTechBhvr() {
            return techBhvr;
        }

 setTechBhvr( value) {
            this.techBhvr = value;
        }

 getDmg() {
            if (dmg == null) {
                dmg = [];
            }
            return this.dmg;
        }
    }

    Dt = class Dt {
time;
kpiMthd;
kpiStatus;
kpiPctl;
orgInfos;
docs;
rmks;
applic;

 getTime() {
            if (time == null) {
                time = [];
            }
            return this.time;
        }

 getKpiMthd() {
            return kpiMthd;
        }

 setKpiMthd( value) {
            this.kpiMthd = value;
        }

 getKpiStatus() {
            return kpiStatus;
        }

 setKpiStatus( value) {
            this.kpiStatus = value;
        }

 getKpiPctl() {
            return kpiPctl;
        }

 setKpiPctl( value) {
            this.kpiPctl = value;
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

 getApplic() {
            return applic;
        }

 setApplic( value) {
            this.applic = value;
        }
    }

    FRate = class FRate {
rate;
kpiMthd;
kpiStatus;
kpiPctl;
corrFact;
orgInfos;
docs;
rmks;
applic;

 getRate() {
            if (rate == null) {
                rate = [];
            }
            return this.rate;
        }

 getKpiMthd() {
            return kpiMthd;
        }

 setKpiMthd( value) {
            this.kpiMthd = value;
        }

 getKpiStatus() {
            return kpiStatus;
        }

 setKpiStatus( value) {
            this.kpiStatus = value;
        }

 getKpiPctl() {
            return kpiPctl;
        }

 setKpiPctl( value) {
            this.kpiPctl = value;
        }

 getCorrFact() {
            if (corrFact == null) {
                corrFact = [];
            }
            return this.corrFact;
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

 getApplic() {
            return applic;
        }

 setApplic( value) {
            this.applic = value;
        }

        CorrFact = class CorrFact {
factor;
just;
defDate;
docs;
rmks;
applic;

 getFactor() {
                return factor;
            }

 setFactor( value) {
                this.factor = value;
            }

 getJust() {
                return just;
            }

 setJust( value) {
                this.just = value;
            }

 getDefDate() {
                return defDate;
            }

 setDefDate( value) {
                this.defDate = value;
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

 getApplic() {
                return applic;
            }

 setApplic( value) {
                this.applic = value;
            }
        }
    }

    FailModes = class FailModes {
failureModeNonAbstractClasses;

 getFailureModeNonAbstractClasses() {
            if (failureModeNonAbstractClasses == null) {
                failureModeNonAbstractClasses = [];
            }
            return this.failureModeNonAbstractClasses;
        }
    }

    Foh = class Foh {
nr;
kpiMthd;
kpiStatus;
kpiPctl;
orgInfos;
docs;
rmks;
applic;

 getNr() {
            if (nr == null) {
                nr = [];
            }
            return this.nr;
        }

 getKpiMthd() {
            return kpiMthd;
        }

 setKpiMthd( value) {
            this.kpiMthd = value;
        }

 getKpiStatus() {
            return kpiStatus;
        }

 setKpiStatus( value) {
            this.kpiStatus = value;
        }

 getKpiPctl() {
            return kpiPctl;
        }

 setKpiPctl( value) {
            this.kpiPctl = value;
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

 getApplic() {
            return applic;
        }

 setApplic( value) {
            this.applic = value;
        }
    }

    Lcc = class Lcc {
cost;
kpiMthd;
kpiStatus;
kpiPctl;
orgInfos;
docs;
rmks;
applic;

 getCost() {
            if (cost == null) {
                cost = [];
            }
            return this.cost;
        }

 getKpiMthd() {
            return kpiMthd;
        }

 setKpiMthd( value) {
            this.kpiMthd = value;
        }

 getKpiStatus() {
            return kpiStatus;
        }

 setKpiStatus( value) {
            this.kpiStatus = value;
        }

 getKpiPctl() {
            return kpiPctl;
        }

 setKpiPctl( value) {
            this.kpiPctl = value;
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

 getApplic() {
            return applic;
        }

 setApplic( value) {
            this.applic = value;
        }
    }

    Mfop = class Mfop {
per;
kpiMthd;
kpiStatus;
kpiPctl;
orgInfos;
docs;
rmks;
applic;

 getPer() {
            if (per == null) {
                per = [];
            }
            return this.per;
        }

 getKpiMthd() {
            return kpiMthd;
        }

 setKpiMthd( value) {
            this.kpiMthd = value;
        }

 getKpiStatus() {
            return kpiStatus;
        }

 setKpiStatus( value) {
            this.kpiStatus = value;
        }

 getKpiPctl() {
            return kpiPctl;
        }

 setKpiPctl( value) {
            this.kpiPctl = value;
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

 getApplic() {
            return applic;
        }

 setApplic( value) {
            this.applic = value;
        }
    }

    Mmhoh = class Mmhoh {
mh;
kpiMthd;
kpiStatus;
kpiPctl;
orgInfos;
docs;
rmks;
applic;

 getMh() {
            if (mh == null) {
                mh = [];
            }
            return this.mh;
        }

 getKpiMthd() {
            return kpiMthd;
        }

 setKpiMthd( value) {
            this.kpiMthd = value;
        }

 getKpiStatus() {
            return kpiStatus;
        }

 setKpiStatus( value) {
            this.kpiStatus = value;
        }

 getKpiPctl() {
            return kpiPctl;
        }

 setKpiPctl( value) {
            this.kpiPctl = value;
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

 getApplic() {
            return applic;
        }

 setApplic( value) {
            this.applic = value;
        }
    }

    Mtbf = class Mtbf {
mt;
kpiMthd;
kpiStatus;
kpiPctl;
corrFact;
orgInfos;
docs;
rmks;
applic;

 getMt() {
            if (mt == null) {
                mt = [];
            }
            return this.mt;
        }

 getKpiMthd() {
            return kpiMthd;
        }

 setKpiMthd( value) {
            this.kpiMthd = value;
        }

 getKpiStatus() {
            return kpiStatus;
        }

 setKpiStatus( value) {
            this.kpiStatus = value;
        }

 getKpiPctl() {
            return kpiPctl;
        }

 setKpiPctl( value) {
            this.kpiPctl = value;
        }

 getCorrFact() {
            if (corrFact == null) {
                corrFact = [];
            }
            return this.corrFact;
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

 getApplic() {
            return applic;
        }

 setApplic( value) {
            this.applic = value;
        }
    }

    Mtbur = class Mtbur {
mt;
kpiMthd;
kpiStatus;
kpiPctl;
orgInfos;
docs;
rmks;
applic;

 getMt() {
            if (mt == null) {
                mt = [];
            }
            return this.mt;
        }

 getKpiMthd() {
            return kpiMthd;
        }

 setKpiMthd( value) {
            this.kpiMthd = value;
        }

 getKpiStatus() {
            return kpiStatus;
        }

 setKpiStatus( value) {
            this.kpiStatus = value;
        }

 getKpiPctl() {
            return kpiPctl;
        }

 setKpiPctl( value) {
            this.kpiPctl = value;
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

 getApplic() {
            return applic;
        }

 setApplic( value) {
            this.applic = value;
        }
    }

    Mttr = class Mttr {
mt;
kpiMthd;
kpiStatus;
kpiPctl;
orgInfos;
docs;
rmks;
applic;

 getMt() {
            if (mt == null) {
                mt = [];
            }
            return this.mt;
        }

 getKpiMthd() {
            return kpiMthd;
        }

 setKpiMthd( value) {
            this.kpiMthd = value;
        }

 getKpiStatus() {
            return kpiStatus;
        }

 setKpiStatus( value) {
            this.kpiStatus = value;
        }

 getKpiPctl() {
            return kpiPctl;
        }

 setKpiPctl( value) {
            this.kpiPctl = value;
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

 getApplic() {
            return applic;
        }

 setApplic( value) {
            this.applic = value;
        }
    }

    Rplt = class Rplt {
time;
kpiMthd;
kpiStatus;
kpiPctl;
orgInfos;
docs;
rmks;
applic;

 getTime() {
            if (time == null) {
                time = [];
            }
            return this.time;
        }

 getKpiMthd() {
            return kpiMthd;
        }

 setKpiMthd( value) {
            this.kpiMthd = value;
        }

 getKpiStatus() {
            return kpiStatus;
        }

 setKpiStatus( value) {
            this.kpiStatus = value;
        }

 getKpiPctl() {
            return kpiPctl;
        }

 setKpiPctl( value) {
            this.kpiPctl = value;
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

 getApplic() {
            return applic;
        }

 setApplic( value) {
            this.applic = value;
        }
    }

    SmInt = class SmInt {
_int;
kpiMthd;
kpiStatus;
kpiPctl;
orgInfos;
docs;
rmks;
applic;

 getInt() {
            if (_int == null) {
                _int = [];
            }
            return this._int;
        }

 getKpiMthd() {
            return kpiMthd;
        }

 setKpiMthd( value) {
            this.kpiMthd = value;
        }

 getKpiStatus() {
            return kpiStatus;
        }

 setKpiStatus( value) {
            this.kpiStatus = value;
        }

 getKpiPctl() {
            return kpiPctl;
        }

 setKpiPctl( value) {
            this.kpiPctl = value;
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

 getApplic() {
            return applic;
        }

 setApplic( value) {
            this.applic = value;
        }
    }

    Spt = class Spt {
time;
kpiMthd;
kpiStatus;
kpiPctl;
orgInfos;
docs;
rmks;
applic;

 getTime() {
            if (time == null) {
                time = [];
            }
            return this.time;
        }

 getKpiMthd() {
            return kpiMthd;
        }

 setKpiMthd( value) {
            this.kpiMthd = value;
        }

 getKpiStatus() {
            return kpiStatus;
        }

 setKpiStatus( value) {
            this.kpiStatus = value;
        }

 getKpiPctl() {
            return kpiPctl;
        }

 setKpiPctl( value) {
            this.kpiPctl = value;
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

 getApplic() {
            return applic;
        }

 setApplic( value) {
            this.applic = value;
        }
    }

    SrvLife = class SrvLife {
life;
kpiMthd;
kpiStatus;
kpiPctl;
orgInfos;
docs;
rmks;
applic;

 getLife() {
            if (life == null) {
                life = [];
            }
            return this.life;
        }

 getKpiMthd() {
            return kpiMthd;
        }

 setKpiMthd( value) {
            this.kpiMthd = value;
        }

 getKpiStatus() {
            return kpiStatus;
        }

 setKpiStatus( value) {
            this.kpiStatus = value;
        }

 getKpiPctl() {
            return kpiPctl;
        }

 setKpiPctl( value) {
            this.kpiPctl = value;
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

 getApplic() {
            return applic;
        }

 setApplic( value) {
            this.applic = value;
        }
    }

	constructor() {
		super("http://www.asd-europe.org/s-series/s3000l", "ZoneElementRevision");
	}
};

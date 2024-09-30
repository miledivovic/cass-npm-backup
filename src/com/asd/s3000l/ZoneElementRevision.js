
const CrudCodeValues = require("./CrudCodeValues");
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

    getBeRevDate() {
        return this.beRevDate;
    }

    setBeRevDate(value) {
        this.beRevDate = value;
    }

    getBeDescr() {
        return this.beDescr;
    }

    setBeDescr(value) {
        this.beDescr = value;
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

    DetectMnCaps = class DetectMnCaps {
        detectMnCap;

        getDetectMnCap() {
            if (this.detectMnCap == null) {
                this.detectMnCap = [];
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
            if (this.cost == null) {
                this.cost = [];
            }
            return this.cost;
        }

        getKpiMthd() {
            return this.kpiMthd;
        }

        setKpiMthd(value) {
            this.kpiMthd = value;
        }

        getKpiStatus() {
            return this.kpiStatus;
        }

        setKpiStatus(value) {
            this.kpiStatus = value;
        }

        getKpiPctl() {
            return this.kpiPctl;
        }

        setKpiPctl(value) {
            this.kpiPctl = value;
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

        getApplic() {
            return this.applic;
        }

        setApplic(value) {
            this.applic = value;
        }
    }

    DmgAnlys = class DmgAnlys {
        techBhvr;
        dmg;

        getTechBhvr() {
            return this.techBhvr;
        }

        setTechBhvr(value) {
            this.techBhvr = value;
        }

        getDmg() {
            if (this.dmg == null) {
                this.dmg = [];
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
            if (this.time == null) {
                this.time = [];
            }
            return this.time;
        }

        getKpiMthd() {
            return this.kpiMthd;
        }

        setKpiMthd(value) {
            this.kpiMthd = value;
        }

        getKpiStatus() {
            return this.kpiStatus;
        }

        setKpiStatus(value) {
            this.kpiStatus = value;
        }

        getKpiPctl() {
            return this.kpiPctl;
        }

        setKpiPctl(value) {
            this.kpiPctl = value;
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

        getApplic() {
            return this.applic;
        }

        setApplic(value) {
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
            if (this.rate == null) {
                this.rate = [];
            }
            return this.rate;
        }

        getKpiMthd() {
            return this.kpiMthd;
        }

        setKpiMthd(value) {
            this.kpiMthd = value;
        }

        getKpiStatus() {
            return this.kpiStatus;
        }

        setKpiStatus(value) {
            this.kpiStatus = value;
        }

        getKpiPctl() {
            return this.kpiPctl;
        }

        setKpiPctl(value) {
            this.kpiPctl = value;
        }

        getCorrFact() {
            if (this.corrFact == null) {
                this.corrFact = [];
            }
            return this.corrFact;
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

        getApplic() {
            return this.applic;
        }

        setApplic(value) {
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
                return this.factor;
            }

            setFactor(value) {
                this.factor = value;
            }

            getJust() {
                return this.just;
            }

            setJust(value) {
                this.just = value;
            }

            getDefDate() {
                return this.defDate;
            }

            setDefDate(value) {
                this.defDate = value;
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

            getApplic() {
                return this.applic;
            }

            setApplic(value) {
                this.applic = value;
            }
        }
    }

    FailModes = class FailModes {
        failureModeNonAbstractClasses;

        getFailureModeNonAbstractClasses() {
            if (this.failureModeNonAbstractClasses == null) {
                this.failureModeNonAbstractClasses = [];
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
            if (this.nr == null) {
                this.nr = [];
            }
            return this.nr;
        }

        getKpiMthd() {
            return this.kpiMthd;
        }

        setKpiMthd(value) {
            this.kpiMthd = value;
        }

        getKpiStatus() {
            return this.kpiStatus;
        }

        setKpiStatus(value) {
            this.kpiStatus = value;
        }

        getKpiPctl() {
            return this.kpiPctl;
        }

        setKpiPctl(value) {
            this.kpiPctl = value;
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

        getApplic() {
            return this.applic;
        }

        setApplic(value) {
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
            if (this.cost == null) {
                this.cost = [];
            }
            return this.cost;
        }

        getKpiMthd() {
            return this.kpiMthd;
        }

        setKpiMthd(value) {
            this.kpiMthd = value;
        }

        getKpiStatus() {
            return this.kpiStatus;
        }

        setKpiStatus(value) {
            this.kpiStatus = value;
        }

        getKpiPctl() {
            return this.kpiPctl;
        }

        setKpiPctl(value) {
            this.kpiPctl = value;
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

        getApplic() {
            return this.applic;
        }

        setApplic(value) {
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
            if (this.per == null) {
                this.per = [];
            }
            return this.per;
        }

        getKpiMthd() {
            return this.kpiMthd;
        }

        setKpiMthd(value) {
            this.kpiMthd = value;
        }

        getKpiStatus() {
            return this.kpiStatus;
        }

        setKpiStatus(value) {
            this.kpiStatus = value;
        }

        getKpiPctl() {
            return this.kpiPctl;
        }

        setKpiPctl(value) {
            this.kpiPctl = value;
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

        getApplic() {
            return this.applic;
        }

        setApplic(value) {
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
            if (this.mh == null) {
                this.mh = [];
            }
            return this.mh;
        }

        getKpiMthd() {
            return this.kpiMthd;
        }

        setKpiMthd(value) {
            this.kpiMthd = value;
        }

        getKpiStatus() {
            return this.kpiStatus;
        }

        setKpiStatus(value) {
            this.kpiStatus = value;
        }

        getKpiPctl() {
            return this.kpiPctl;
        }

        setKpiPctl(value) {
            this.kpiPctl = value;
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

        getApplic() {
            return this.applic;
        }

        setApplic(value) {
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
            if (this.mt == null) {
                this.mt = [];
            }
            return this.mt;
        }

        getKpiMthd() {
            return this.kpiMthd;
        }

        setKpiMthd(value) {
            this.kpiMthd = value;
        }

        getKpiStatus() {
            return this.kpiStatus;
        }

        setKpiStatus(value) {
            this.kpiStatus = value;
        }

        getKpiPctl() {
            return this.kpiPctl;
        }

        setKpiPctl(value) {
            this.kpiPctl = value;
        }

        getCorrFact() {
            if (this.corrFact == null) {
                this.corrFact = [];
            }
            return this.corrFact;
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

        getApplic() {
            return this.applic;
        }

        setApplic(value) {
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
            if (this.mt == null) {
                this.mt = [];
            }
            return this.mt;
        }

        getKpiMthd() {
            return this.kpiMthd;
        }

        setKpiMthd(value) {
            this.kpiMthd = value;
        }

        getKpiStatus() {
            return this.kpiStatus;
        }

        setKpiStatus(value) {
            this.kpiStatus = value;
        }

        getKpiPctl() {
            return this.kpiPctl;
        }

        setKpiPctl(value) {
            this.kpiPctl = value;
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

        getApplic() {
            return this.applic;
        }

        setApplic(value) {
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
            if (this.mt == null) {
                this.mt = [];
            }
            return this.mt;
        }

        getKpiMthd() {
            return this.kpiMthd;
        }

        setKpiMthd(value) {
            this.kpiMthd = value;
        }

        getKpiStatus() {
            return this.kpiStatus;
        }

        setKpiStatus(value) {
            this.kpiStatus = value;
        }

        getKpiPctl() {
            return this.kpiPctl;
        }

        setKpiPctl(value) {
            this.kpiPctl = value;
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

        getApplic() {
            return this.applic;
        }

        setApplic(value) {
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
            if (this.time == null) {
                this.time = [];
            }
            return this.time;
        }

        getKpiMthd() {
            return this.kpiMthd;
        }

        setKpiMthd(value) {
            this.kpiMthd = value;
        }

        getKpiStatus() {
            return this.kpiStatus;
        }

        setKpiStatus(value) {
            this.kpiStatus = value;
        }

        getKpiPctl() {
            return this.kpiPctl;
        }

        setKpiPctl(value) {
            this.kpiPctl = value;
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

        getApplic() {
            return this.applic;
        }

        setApplic(value) {
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
            if (this._int == null) {
                _int = [];
            }
            return this._int;
        }

        getKpiMthd() {
            return this.kpiMthd;
        }

        setKpiMthd(value) {
            this.kpiMthd = value;
        }

        getKpiStatus() {
            return this.kpiStatus;
        }

        setKpiStatus(value) {
            this.kpiStatus = value;
        }

        getKpiPctl() {
            return this.kpiPctl;
        }

        setKpiPctl(value) {
            this.kpiPctl = value;
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

        getApplic() {
            return this.applic;
        }

        setApplic(value) {
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
            if (this.time == null) {
                this.time = [];
            }
            return this.time;
        }

        getKpiMthd() {
            return this.kpiMthd;
        }

        setKpiMthd(value) {
            this.kpiMthd = value;
        }

        getKpiStatus() {
            return this.kpiStatus;
        }

        setKpiStatus(value) {
            this.kpiStatus = value;
        }

        getKpiPctl() {
            return this.kpiPctl;
        }

        setKpiPctl(value) {
            this.kpiPctl = value;
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

        getApplic() {
            return this.applic;
        }

        setApplic(value) {
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
            if (this.life == null) {
                this.life = [];
            }
            return this.life;
        }

        getKpiMthd() {
            return this.kpiMthd;
        }

        setKpiMthd(value) {
            this.kpiMthd = value;
        }

        getKpiStatus() {
            return this.kpiStatus;
        }

        setKpiStatus(value) {
            this.kpiStatus = value;
        }

        getKpiPctl() {
            return this.kpiPctl;
        }

        setKpiPctl(value) {
            this.kpiPctl = value;
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

        getApplic() {
            return this.applic;
        }

        setApplic(value) {
            this.applic = value;
        }
    }

    constructor() {
        super("http://www.asd-europe.org/s-series/s3000l", "ZoneElementRevision");
    }
};

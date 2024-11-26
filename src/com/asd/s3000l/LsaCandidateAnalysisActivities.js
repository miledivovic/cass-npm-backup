
const CrudCodeValues = require("./CrudCodeValues");
module.exports = class LsaCandidateAnalysisActivities extends EcRemoteLinkedData {
    comp;
    hf;
    rlbty;
    mntnblty;
    tstblty;
    fmea;
    dmg;
    sEvnt;
    lora;
    mta;
    sdl;
    ssa;
    opa;
    simOp;
    tna;
    other;

    getComp() {
        return this.comp;
    }

    setComp(value) {
        this.comp = value;
    }

    getHf() {
        return this.hf;
    }

    setHf(value) {
        this.hf = value;
    }

    getRlbty() {
        return this.rlbty;
    }

    setRlbty(value) {
        this.rlbty = value;
    }

    getMntnblty() {
        return this.mntnblty;
    }

    setMntnblty(value) {
        this.mntnblty = value;
    }

    getTstblty() {
        return this.tstblty;
    }

    setTstblty(value) {
        this.tstblty = value;
    }

    getFmea() {
        return this.fmea;
    }

    setFmea(value) {
        this.fmea = value;
    }

    getDmg() {
        return this.dmg;
    }

    setDmg(value) {
        this.dmg = value;
    }

    getSEvnt() {
        return this.sEvnt;
    }

    setSEvnt(value) {
        this.sEvnt = value;
    }

    getLora() {
        return this.lora;
    }

    setLora(value) {
        this.lora = value;
    }

    getMta() {
        return this.mta;
    }

    setMta(value) {
        this.mta = value;
    }

    getSdl() {
        return this.sdl;
    }

    setSdl(value) {
        this.sdl = value;
    }

    getSsa() {
        return this.ssa;
    }

    setSsa(value) {
        this.ssa = value;
    }

    getOpa() {
        return this.opa;
    }

    setOpa(value) {
        this.opa = value;
    }

    getSimOp() {
        return this.simOp;
    }

    setSimOp(value) {
        this.simOp = value;
    }

    getTna() {
        return this.tna;
    }

    setTna(value) {
        this.tna = value;
    }

    getOther() {
        return this.other;
    }

    setOther(value) {
        this.other = value;
    }

    constructor() {
        super("http://www.asd-europe.org/s-series/s3000l", "LsaCandidateAnalysisActivities");
    }
};

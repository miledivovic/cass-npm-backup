
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
        return comp;
    }

 setComp( value) {
        this.comp = value;
    }

 getHf() {
        return hf;
    }

 setHf( value) {
        this.hf = value;
    }

 getRlbty() {
        return rlbty;
    }

 setRlbty( value) {
        this.rlbty = value;
    }

 getMntnblty() {
        return mntnblty;
    }

 setMntnblty( value) {
        this.mntnblty = value;
    }

 getTstblty() {
        return tstblty;
    }

 setTstblty( value) {
        this.tstblty = value;
    }

 getFmea() {
        return fmea;
    }

 setFmea( value) {
        this.fmea = value;
    }

 getDmg() {
        return dmg;
    }

 setDmg( value) {
        this.dmg = value;
    }

 getSEvnt() {
        return sEvnt;
    }

 setSEvnt( value) {
        this.sEvnt = value;
    }

 getLora() {
        return lora;
    }

 setLora( value) {
        this.lora = value;
    }

 getMta() {
        return mta;
    }

 setMta( value) {
        this.mta = value;
    }

 getSdl() {
        return sdl;
    }

 setSdl( value) {
        this.sdl = value;
    }

 getSsa() {
        return ssa;
    }

 setSsa( value) {
        this.ssa = value;
    }

 getOpa() {
        return opa;
    }

 setOpa( value) {
        this.opa = value;
    }

 getSimOp() {
        return simOp;
    }

 setSimOp( value) {
        this.simOp = value;
    }

 getTna() {
        return tna;
    }

 setTna( value) {
        this.tna = value;
    }

 getOther() {
        return other;
    }

 setOther( value) {
        this.other = value;
    }

	constructor() {
		super("http://www.asd-europe.org/s-series/s3000l", "LsaCandidateAnalysisActivities");
	}
};

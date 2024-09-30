
const CrudCodeValues = require("./CrudCodeValues");
module.exports = class ItemInAllowedProductConfiguration extends EcRemoteLinkedData {
    nonConf;
    hwConfPartRef;
    prodConfRef;
    rangeEfys;
    docs;
    rmks;
    uid;
    crud;

    getNonConf() {
        if (this.nonConf == null) {
            this.nonConf = [];
        }
        return this.nonConf;
    }

    getHwConfPartRef() {
        return this.hwConfPartRef;
    }

    setHwConfPartRef(value) {
        this.hwConfPartRef = value;
    }

    getProdConfRef() {
        return this.prodConfRef;
    }

    setProdConfRef(value) {
        this.prodConfRef = value;
    }

    getRangeEfys() {
        return this.rangeEfys;
    }

    setRangeEfys(value) {
        this.rangeEfys = value;
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

    NonConf = class NonConf {
        nonConfType;
        nonConfDescr;
        nonConfRestr;

        getNonConfType() {
            return this.nonConfType;
        }

        setNonConfType(value) {
            this.nonConfType = value;
        }

        getNonConfDescr() {
            return this.nonConfDescr;
        }

        setNonConfDescr(value) {
            this.nonConfDescr = value;
        }

        getNonConfRestr() {
            if (this.nonConfRestr == null) {
                this.nonConfRestr = [];
            }
            return this.nonConfRestr;
        }
    }

    constructor() {
        super("http://www.asd-europe.org/s-series/s3000l", "ItemInAllowedProductConfiguration");
    }
};

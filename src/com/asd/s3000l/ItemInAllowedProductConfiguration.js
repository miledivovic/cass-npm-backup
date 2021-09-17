
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
        return hwConfPartRef;
    }

 setHwConfPartRef( value) {
        this.hwConfPartRef = value;
    }

 getProdConfRef() {
        return prodConfRef;
    }

 setProdConfRef( value) {
        this.prodConfRef = value;
    }

 getRangeEfys() {
        return rangeEfys;
    }

 setRangeEfys( value) {
        this.rangeEfys = value;
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

    NonConf = class NonConf {
nonConfType;
nonConfDescr;
nonConfRestr;

 getNonConfType() {
            return nonConfType;
        }

 setNonConfType( value) {
            this.nonConfType = value;
        }

 getNonConfDescr() {
            return nonConfDescr;
        }

 setNonConfDescr( value) {
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

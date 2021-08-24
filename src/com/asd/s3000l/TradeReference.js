
module.exports = class TradeReference extends EcRemoteLinkedData {
tradeName;
uidRef;
uriRef;

 getTradeName() {
        return tradeName;
    }

 setTradeName( value) {
        this.tradeName = value;
    }

 getUidRef() {
        return uidRef;
    }

 setUidRef( value) {
        this.uidRef = value;
    }

 getUriRef() {
        return uriRef;
    }

 setUriRef( value) {
        this.uriRef = value;
    }

	constructor() {
		super("http://www.asd-europe.org/s-series/s3000l", "TradeReference");
	}
};

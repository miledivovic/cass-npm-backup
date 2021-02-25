var RollupRuleProcessor = function(ip, ep) {
    this.ip = ip;
    this.rollupRulePacketGenerator = new RollupRulePacketGenerator(ip, ep);
};
RollupRuleProcessor = stjs.extend(RollupRuleProcessor, null, [], function(constructor, prototype) {
    prototype.success = null;
    prototype.failure = null;
    prototype.logFunction = null;
    prototype.positive = null;
    prototype.negative = null;
    prototype.onQueryExitResult = null;
    prototype.query = null;
    prototype.rollupRulePacketGenerator = null;
    prototype.s = null;
    prototype.tok = null;
    prototype.que = null;
    prototype.ip = null;
    prototype.log = function(string) {
        if (this.logFunction != null) 
            this.logFunction(string);
    };
    prototype.enterS = function(ctx) {
        if (this.s != null) 
             throw new RuntimeException("We found another S in our S.");
        this.s = new RrS();
    };
    prototype.exitS = function(ctx) {
        this.ip.subPackets.push(this.rollupRulePacketGenerator.generatePacket());
    };
    prototype.enterToken = function(ctx) {
        this.s.addToken(this.tok = new RrToken());
    };
    prototype.exitToken = function(ctx) {};
    prototype.enterQuery = function(ctx) {
        this.s.addQuery(this.que = new RrQuery());
        this.query = "";
        this.onQueryExitResult = null;
    };
    prototype.exitQuery = function(ctx) {
        this.que.query = this.query.trim();
        this.log("ADDING QUERY: " + this.query.trim());
        this.rollupRulePacketGenerator.addQuery(this.query.trim());
    };
    prototype.exitInnerquery = function(ctx) {
        if (ctx.cLogic != null) 
            this.query += " " + ctx.cLogic.text + " ";
        if (ctx.cValue != null) {
            this.query += ctx.cKey.text + "" + ctx.cOperator.text + "\"" + ctx.cValue.text + "\" ";
        }
        if (ctx.cNumber != null) {
            this.query += ctx.cKey.text + "" + ctx.cOperator.text + "" + ctx.cNumber.text + " ";
        }
    };
    prototype.exitLogical_or_math_operator = function(ctx) {
        if (ctx.cLogic != null) {
            if ("AND" == ctx.cLogic.text.toUpperCase()) {
                this.log("ADDING OPERATION: " + RollupRulePacketGenerator.OperationType.AND);
                this.rollupRulePacketGenerator.addQueryOperation(RollupRulePacketGenerator.OperationType.AND);
            } else if ("OR" == ctx.cLogic.text.toUpperCase()) {
                this.log("ADDING OPERATION: " + RollupRulePacketGenerator.OperationType.OR);
                this.rollupRulePacketGenerator.addQueryOperation(RollupRulePacketGenerator.OperationType.OR);
            }
        }
    };
}, {success: {name: "Callback1", arguments: [null]}, failure: {name: "Callback1", arguments: [null]}, logFunction: {name: "Callback1", arguments: ["Object"]}, positive: {name: "Array", arguments: ["EcAssertion"]}, negative: {name: "Array", arguments: ["EcAssertion"]}, rollupRulePacketGenerator: "RollupRulePacketGenerator", s: "RrS", tok: "RrToken", que: "RrQuery", ip: "InquiryPacket"}, {});

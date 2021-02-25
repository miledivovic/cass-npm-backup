var RollupRulePacketGenerator = function(ip, ep) {
    this.ip = ip;
    this.ep = ep;
    this.queries = new Array();
    this.queryOperations = new Array();
};
RollupRulePacketGenerator = stjs.extend(RollupRulePacketGenerator, null, [], function(constructor, prototype) {
    prototype.queries = null;
    prototype.queryOperations = null;
    prototype.ip = null;
    prototype.ep = null;
    constructor.main = function(args) {};
    prototype.addQuery = function(query) {
        this.queries.push(query);
    };
    prototype.addQueryOperation = function(operation) {
        this.queryOperations.push(operation);
    };
    prototype.hasOrOperation = function() {
        for (var i = 0; i < this.queryOperations.length; i++) {
            if (RollupRulePacketGenerator.OperationType.OR.equals(this.queryOperations[i])) 
                return true;
        }
        return false;
    };
    prototype.getIPType = function() {
        if (this.hasOrOperation()) 
            return InquiryPacket.IPType.RELATION_OR;
        return InquiryPacket.IPType.RELATION_AND;
    };
    prototype.generateComboAndPacket = function() {
        var meEp = this.ep;
        var meIp = this.ip;
        return new InquiryPacket(this.ip.subject, null, null, this.ip.context, function(p1) {
            if (meEp != null) 
                meEp.continueProcessingFirstPass(meIp);
        }, this.ip.failure, null, InquiryPacket.IPType.RELATION_AND);
    };
    prototype.generateRollupRulePacket = function(rule) {
        var meEp = this.ep;
        var meIp = this.ip;
        return new InquiryPacket(this.ip.subject, null, null, this.ip.context, function(p1) {
            if (meEp != null) 
                meEp.continueProcessingFirstPass(meIp);
        }, this.ip.failure, rule, InquiryPacket.IPType.ROLLUPRULE);
    };
    prototype.addAllQueries = function(rollupIp) {
        for (var i = 0; i < this.queries.length; i++) {
            rollupIp.subPackets.push(this.generateRollupRulePacket(this.queries[i]));
        }
    };
    prototype.buildQueryTree = function(rollupIp) {
        if (this.queryOperations.length <= 0) 
            return;
        var currentAndPacket = this.generateComboAndPacket();
        var priorOt;
        if (RollupRulePacketGenerator.OperationType.OR.equals(this.queryOperations[0])) 
            rollupIp.subPackets.push(this.generateRollupRulePacket(this.queries[0]));
         else 
            currentAndPacket.subPackets.push(this.generateRollupRulePacket(this.queries[0]));
        priorOt = this.queryOperations[0];
        for (var i = 1; i < this.queryOperations.length; i++) {
            if (RollupRulePacketGenerator.OperationType.OR.equals(this.queryOperations[i])) {
                if (RollupRulePacketGenerator.OperationType.OR.equals(priorOt)) 
                    rollupIp.subPackets.push(this.generateRollupRulePacket(this.queries[i]));
                 else {
                    currentAndPacket.subPackets.push(this.generateRollupRulePacket(this.queries[i]));
                    rollupIp.subPackets.push(currentAndPacket);
                }
            } else {
                if (RollupRulePacketGenerator.OperationType.OR.equals(priorOt)) {
                    currentAndPacket = this.generateComboAndPacket();
                    currentAndPacket.subPackets.push(this.generateRollupRulePacket(this.queries[i]));
                } else 
                    currentAndPacket.subPackets.push(this.generateRollupRulePacket(this.queries[i]));
            }
            priorOt = this.queryOperations[i];
        }
        if (RollupRulePacketGenerator.OperationType.OR.equals(priorOt)) 
            rollupIp.subPackets.push(this.generateRollupRulePacket(this.queries[this.queries.length - 1]));
         else {
            currentAndPacket.subPackets.push(this.generateRollupRulePacket(this.queries[this.queries.length - 1]));
            rollupIp.subPackets.push(currentAndPacket);
        }
    };
    prototype.generatePacket = function() {
        var ipt = this.getIPType();
        var meEp = this.ep;
        var meIp = this.ip;
        var rollupIp = new InquiryPacket(this.ip.subject, null, null, this.ip.context, function(p1) {
            if (meEp != null) 
                meEp.continueProcessingFirstPass(meIp);
        }, this.ip.failure, null, ipt);
        if (InquiryPacket.IPType.RELATION_AND.equals(ipt)) 
            this.addAllQueries(rollupIp);
         else 
            this.buildQueryTree(rollupIp);
        return rollupIp;
    };
    constructor.OperationType = stjs.enumeration("AND", "OR");
}, {queries: {name: "Array", arguments: [null]}, queryOperations: {name: "Array", arguments: [{name: "Enum", arguments: ["RollupRulePacketGenerator.OperationType"]}]}, ip: "InquiryPacket", ep: "AssertionProcessor"}, {});
if (!stjs.mainCallDisabled) 
    RollupRulePacketGenerator.main();

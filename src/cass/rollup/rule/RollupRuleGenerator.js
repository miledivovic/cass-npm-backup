var RollupRuleGenerator = function(ip) {
    this.ip = ip;
    this.rule = "";
    this.outerRule = "";
};
RollupRuleGenerator = stjs.extend(RollupRuleGenerator, null, [], function(constructor, prototype) {
    prototype.failure = null;
    prototype.success = null;
    prototype.rule = null;
    prototype.outerRule = null;
    prototype.ip = null;
    prototype.go = function() {
        var me = this;
        if (this.ip.getContext().relation == null) 
            this.success(null);
         else 
            for (var i = 0; i < this.ip.getContext().relation.length; i++) {
                this.ip.numberOfQueriesRunning++;
                EcAlignment.get(this.ip.getContext().relation[i], function(p1) {
                    me.ip.numberOfQueriesRunning--;
                    if (!p1.source.equals(me.ip.competency) && !p1.target.equals(me.ip.competency)) 
                        return;
                    if (p1.source.equals(me.ip.competency)) {
                        if (p1.relationType.equals(EcAlignment.REQUIRES)) {
                            if (me.rule != null && me.rule != "") 
                                me.rule += " AND ";
                            me.rule += "[notNegative competency:\"" + p1.target + "\"]";
                        }
                        if (p1.relationType.equals(EcAlignment.NARROWS)) {
                            if (me.outerRule != null && me.outerRule != "") 
                                me.outerRule += " OR ";
                            me.outerRule += "[competency:\"" + p1.target + "\"]";
                        }
                    }
                }, function(p1) {
                    me.ip.numberOfQueriesRunning--;
                });
            }
    };
}, {failure: {name: "Callback1", arguments: [null]}, success: {name: "Callback1", arguments: [null]}, ip: "InquiryPacket"}, {});

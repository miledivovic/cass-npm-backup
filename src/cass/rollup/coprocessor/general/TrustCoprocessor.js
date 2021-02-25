var TrustCoprocessor = function() {
    AssertionCoprocessor.call(this);
};
TrustCoprocessor = stjs.extend(TrustCoprocessor, AssertionCoprocessor, [], function(constructor, prototype) {
    prototype.agent = null;
    prototype.multiplier = 1.0;
    prototype.removeNoConfidence = false;
    prototype.mutateAssertions = function(ip, listOfCompetencies, success) {
        var keys = EcObject.keys(this.assertionProcessor.assertions);
        for (var keyIndex = 0; keyIndex < keys.length; keyIndex++) {
            var ary = (this.assertionProcessor.assertions)[keys[keyIndex]];
            for (var i = 0; i < ary.length; i++) {
                var a = ary[i];
                if (a.getAgent().toPem() == this.agent.toPem()) {
                    a.confidence = a.confidence * this.multiplier;
                    if (this.removeNoConfidence && a.confidence == 0.0) 
                        ary.splice(i--, 1);
                }
            }
        }
        success();
    };
}, {agent: "EcPk", assertionProcessor: "AssertionProcessor"}, {});

var OptimisticQuadnaryAssertionProcessor = function() {
    CombinatorAssertionProcessor.call(this);
};
OptimisticQuadnaryAssertionProcessor = stjs.extend(OptimisticQuadnaryAssertionProcessor, CombinatorAssertionProcessor, [], function(constructor, prototype) {
    prototype.transferIndeterminateOptimistically = true;
    prototype.determineCombinatorAndResult = function(ip) {
        if (ip.anyChildPacketsAreFalse()) {
            ip.result = InquiryPacket.ResultType.FALSE;
        } else if (ip.anyIndeterminantChildPackets()) {
            ip.result = InquiryPacket.ResultType.INDETERMINANT;
        } else if (ip.anyChildPacketsAreUnknown()) {
            ip.result = InquiryPacket.ResultType.UNKNOWN;
        } else {
            ip.result = InquiryPacket.ResultType.TRUE;
        }
    };
    prototype.determineCombinatorNarrowsResult = function(ip) {
        if (ip.anyChildPacketsAreTrue()) {
            ip.result = InquiryPacket.ResultType.TRUE;
        } else if (this.transferIndeterminateOptimistically && ip.anyIndeterminantChildPackets()) {
            ip.result = InquiryPacket.ResultType.FALSE;
        } else {
            ip.result = InquiryPacket.ResultType.UNKNOWN;
        }
    };
    prototype.determineCombinatorBroadensResult = function(ip) {
        if (ip.anyChildPacketsAreFalse()) {
            ip.result = InquiryPacket.ResultType.FALSE;
        } else if (this.transferIndeterminateOptimistically && ip.anyIndeterminantChildPackets()) {
            ip.result = InquiryPacket.ResultType.TRUE;
        } else if (!(ip.anyChildPacketsAreFalse() || ip.anyChildPacketsAreUnknown())) {
            ip.result = InquiryPacket.ResultType.TRUE;
        } else {
            ip.result = InquiryPacket.ResultType.UNKNOWN;
        }
    };
    prototype.determineCombinatorRequiresResult = function(ip) {
        if (ip.anyChildPacketsAreFalse()) {
            ip.result = InquiryPacket.ResultType.FALSE;
        } else if (this.transferIndeterminateOptimistically && ip.anyIndeterminantChildPackets()) {
            ip.result = InquiryPacket.ResultType.TRUE;
        } else {
            ip.result = InquiryPacket.ResultType.UNKNOWN;
        }
    };
    prototype.determineCombinatorIsRequiredByResult = function(ip) {
        if (ip.anyChildPacketsAreTrue()) {
            ip.result = InquiryPacket.ResultType.TRUE;
        } else if (this.transferIndeterminateOptimistically && ip.anyIndeterminantChildPackets()) {
            ip.result = InquiryPacket.ResultType.FALSE;
        } else {
            ip.result = InquiryPacket.ResultType.UNKNOWN;
        }
    };
    prototype.determineCombinatorOrResult = function(ip) {
        if (ip.anyChildPacketsAreTrue()) {
            ip.result = InquiryPacket.ResultType.TRUE;
        } else if (ip.anyIndeterminantChildPackets()) {
            ip.result = InquiryPacket.ResultType.INDETERMINANT;
        } else if (ip.allChildPacketsUnknown()) {
            ip.result = InquiryPacket.ResultType.UNKNOWN;
        } else {
            ip.result = InquiryPacket.ResultType.FALSE;
        }
    };
    prototype.getPacketAssertionResult = function(ip) {
        if (ip.positive.length > 0 && ip.negative.length == 0) {
            return InquiryPacket.ResultType.TRUE;
        } else if (ip.positive.length == 0 && ip.negative.length > 0) {
            return InquiryPacket.ResultType.FALSE;
        } else if (ip.positive.length > 0 && ip.negative.length > 0) {
            return InquiryPacket.ResultType.INDETERMINANT;
        } else {
            return InquiryPacket.ResultType.UNKNOWN;
        }
    };
    prototype.determineResultForUnknownAssertionResult = function(ip) {
        if (ip.allChildPacketsUnknown()) {
            ip.result = InquiryPacket.ResultType.UNKNOWN;
        } else if (ip.allEquivalentPacketsUnknown()) {
            if (ip.allSubPacketsTrueOrUnknown()) {
                ip.result = InquiryPacket.ResultType.TRUE;
            } else if (ip.allSubPacketsFalseOrUnknown()) {
                ip.result = InquiryPacket.ResultType.FALSE;
            } else {
                ip.result = InquiryPacket.ResultType.INDETERMINANT;
            }
        } else if (ip.allEquivalentPacketsTrueOrUnknown()) {
            if (ip.allSubPacketsTrueOrUnknown()) {
                ip.result = InquiryPacket.ResultType.TRUE;
            } else {
                ip.result = InquiryPacket.ResultType.INDETERMINANT;
            }
        } else if (ip.allEquivalentPacketsFalseOrUnknown()) {
            if (ip.allSubPacketsFalseOrUnknown()) {
                ip.result = InquiryPacket.ResultType.FALSE;
            } else {
                ip.result = InquiryPacket.ResultType.INDETERMINANT;
            }
        } else {
            ip.result = InquiryPacket.ResultType.INDETERMINANT;
        }
    };
    prototype.determineResultForTrueAssertionResult = function(ip) {
        if (ip.allEquivalentPacketsTrueOrUnknown()) {
            if (ip.allSubPacketsTrueOrUnknown()) {
                ip.result = InquiryPacket.ResultType.TRUE;
            } else {
                ip.result = InquiryPacket.ResultType.INDETERMINANT;
            }
        } else {
            ip.result = InquiryPacket.ResultType.INDETERMINANT;
        }
    };
    prototype.determineResultForFalseAssertionResult = function(ip) {
        if (ip.allEquivalentPacketsFalseOrUnknown()) {
            if (ip.allSubPacketsFalseOrUnknown()) {
                ip.result = InquiryPacket.ResultType.FALSE;
            } else {
                ip.result = InquiryPacket.ResultType.INDETERMINANT;
            }
        } else {
            ip.result = InquiryPacket.ResultType.INDETERMINANT;
        }
    };
    /**
     *  IF IP type is COMPETENCY|ROLLUPRULE: assertionResult = ( IF number of
     *  positive assertions > 0 && number of negative assertions = 0 THEN
     *  assertionResult = TRUE IF number of positive assertions = 0 && number of
     *  negative assertions > 0 THEN assertionResult = FALSE IF number of
     *  positive assertions > 0 && number of negative assertions > 0 THEN
     *  assertionResult = INDETERMINANT IF number of positive assertions = 0 &&
     *  number of negative assertions = 0 THEN assertionResult = UNKNOWN )
     *  <p>
     *  IF assertionResult = INDETERMINANT THEN INDETERMINANT ELSE IF any
     *  equivalent packets = INDETERMINANT THEN INDETERMINANT ELSE IF any sub
     *  packets = INDETERMINANT THEN INDETERMINANT
     *  <p>
     *  ELSE IF assertionResult = UNKNOWN: IF all equivalent packets = UNKNOWN IF
     *  all sub packets = UNKNOWN THEN UNKNOWN IF all sub packets = TRUE|UNKNOWN
     *  THEN TRUE IF all sub packets = FALSE|UNKNOWN THEN FALSE ELSE
     *  INDETERMINANT
     *  <p>
     *  ELSE IF all equivalent packets = TRUE|UNKNOWN IF all sub packets =
     *  TRUE|UNKNOWN THEN TRUE ELSE INDETERMINANT
     *  <p>
     *  ELSE IF all equivalent packets = FALSE|UNKNOWN IF all sub packets =
     *  FALSE|UNKNOWN THEN FALSE ELSE INDETERMINANT
     *  <p>
     *  ELSE INDETERMINANT
     *  <p>
     *  <p>
     *  ELSE IF assertionResult = TRUE: IF all equivalent packets = TRUE|UNKNOWN
     *  IF all sub packets = TRUE|UNKNOWN THEN TRUE ELSE INDETERMINANT
     *  <p>
     *  ELSE INDETERMINANT
     *  <p>
     *  ELSE IF assertionResult = FALSE: IF all equivalent packets =
     *  FALSE|UNKNOWN IF all sub packets = FALSE|UNKNOWN THEN FALSE ELSE
     *  INDETERMINANT
     *  <p>
     *  ELSE INDETERMINANT
     */
    prototype.determineCompetencyOrRollupRuleResult = function(ip) {
        var assertionResult = this.getPacketAssertionResult(ip);
        if (InquiryPacket.ResultType.INDETERMINANT.equals(assertionResult) || ip.anyIndeterminantChildPackets()) {
            ip.result = InquiryPacket.ResultType.INDETERMINANT;
        } else if (InquiryPacket.ResultType.UNKNOWN.equals(assertionResult)) {
            this.determineResultForUnknownAssertionResult(ip);
        } else if (InquiryPacket.ResultType.TRUE.equals(assertionResult)) {
            this.determineResultForTrueAssertionResult(ip);
        } else {
            this.determineResultForFalseAssertionResult(ip);
        }
    };
    prototype.determineResult = function(ip) {
        if (ip.numberOfQueriesRunning == 0) {
            if (InquiryPacket.IPType.RELATION_AND.equals(ip.type)) {
                this.determineCombinatorAndResult(ip);
            } else if (InquiryPacket.IPType.RELATION_OR.equals(ip.type)) {
                this.determineCombinatorOrResult(ip);
            } else if (InquiryPacket.IPType.RELATION_NARROWS.equals(ip.type)) {
                this.determineCombinatorNarrowsResult(ip);
            } else if (InquiryPacket.IPType.RELATION_BROADENS.equals(ip.type)) {
                this.determineCombinatorBroadensResult(ip);
            } else if (InquiryPacket.IPType.RELATION_REQUIRES.equals(ip.type)) {
                this.determineCombinatorRequiresResult(ip);
            } else if (InquiryPacket.IPType.RELATION_ISREQUIREDBY.equals(ip.type)) {
                this.determineCombinatorIsRequiredByResult(ip);
            } else {
                this.determineCompetencyOrRollupRuleResult(ip);
            }
        } else {
            this.log(ip, "We are not finished accumulating data to answer this query. Error: " + ip.numberOfQueriesRunning);
        }
    };
}, {relationLookup: "Object", repositories: {name: "Array", arguments: ["EcRepository"]}, logFunction: {name: "Callback1", arguments: ["Object"]}, assertions: "Object", coprocessors: {name: "Array", arguments: ["AssertionCoprocessor"]}, processedEquivalencies: {name: "Map", arguments: [null, null]}, context: "EcFramework"}, {});

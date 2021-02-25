/**
 *  Created by fray on 5/30/17.
 */
var AssertionCoprocessor = function() {};
AssertionCoprocessor = stjs.extend(AssertionCoprocessor, null, [], function(constructor, prototype) {
    prototype.assertionProcessor = null;
    prototype.collectAssertions = function(ip, listOfCompetencies, success) {
        success(new Array());
    };
    prototype.mutateAssertions = function(ip, listOfCompetencies, success) {
        success();
    };
}, {assertionProcessor: "AssertionProcessor"}, {});

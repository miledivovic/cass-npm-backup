var ExceptionReturn = function(errorMessage) {
    this.errorMessage = errorMessage;
};
ExceptionReturn = stjs.extend(ExceptionReturn, null, [], function(constructor, prototype) {
    prototype.errorMessage = null;
    prototype.getErrorMessage = function() {
        return this.errorMessage;
    };
    prototype.setErrorMessage = function(errorMessage) {
        this.errorMessage = errorMessage;
    };
    prototype.getJsonString = function() {
        return JSON.stringify(this);
    };
}, {}, {});

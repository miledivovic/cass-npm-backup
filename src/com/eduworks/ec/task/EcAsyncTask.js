var EcAsyncTask = function(job, param1, param2, param3, param4) {
    this.creationTime = new Date();
    this.job = job;
    this.args = [];
    this.timeoutSec = 20;
    if (param1 != null && param1 != undefined) 
        this.args.push(param1);
    if (param2 != null && param2 != undefined) 
        this.args.push(param2);
    if (param3 != null && param2 != undefined) 
        this.args.push(param3);
    if (param4 != null && param4 != undefined) 
        this.args.push(param4);
};
EcAsyncTask = stjs.extend(EcAsyncTask, null, [], function(constructor, prototype) {
    prototype.job = null;
    prototype.args = null;
    prototype.timeoutSec = 0;
    prototype.creationTime = null;
    prototype.isComplete = false;
    prototype.isStarted = false;
    prototype.start = null;
    prototype.stop = null;
    prototype.error = null;
    prototype.setJob = function(job) {
        this.job = job;
    };
    prototype.getArguments = function() {
        return this.args;
    };
    prototype.setArguments = function(_arguments) {
        this.args = [];
        for (var i = 0; i < arguments.length; i++) {
            this.args[i] = arguments[i];
        }
    };
    prototype.getTimeout = function() {
        return this.timeoutSec;
    };
    prototype.setTimeout = function(timeout) {
        this.timeoutSec = timeout;
    };
    prototype.getCreationTime = function() {
        return this.creationTime;
    };
    prototype.getIsComplete = function() {
        return this.isComplete;
    };
    prototype.setComplete = function() {
        this.stop = new Date();
        this.isComplete = true;
    };
    prototype.getIsStarted = function() {
        return this.isStarted;
    };
    prototype.getStart = function() {
        return this.start;
    };
    prototype.doTask = function(_arguments) {
        var ret = undefined;
        if (!this.isStarted) {
            this.start = new Date();
            this.isStarted = true;
            try {
                if (arguments.length == 0) {
                    ret = this.invoke0();
                } else if (arguments.length == 1) {
                    ret = this.invoke1(arguments[0]);
                } else if (arguments.length == 2) {
                    ret = this.invoke2(arguments[0], arguments[1]);
                } else if (arguments.length == 3) {
                    ret = this.invoke3(arguments[0], arguments[1], arguments[2]);
                } else if (arguments.length == 4) {
                    ret = this.invoke4(arguments[0], arguments[1], arguments[2], arguments[3]);
                } else {
                    ret = undefined;
                }
            }catch (e) {
                this.stop = new Date();
                this.isComplete = true;
                this.error = e.getMessage();
                 throw e;
            }
        }
        return ret;
    };
    prototype.invoke0 = function() {
        var that = this;
        var ret = (this.job).call(this, function() {
            that.setComplete();
        });
        return ret;
    };
    prototype.invoke1 = function(arg1) {
        var that = this;
        var ret = (this.job).call(this, arg1, function() {
            that.setComplete();
        });
        return ret;
    };
    prototype.invoke2 = function(arg1, arg2) {
        var that = this;
        var ret = (this.job).call(this, arg1, arg2, function() {
            that.setComplete();
        });
        return ret;
    };
    prototype.invoke3 = function(arg1, arg2, arg3) {
        var that = this;
        var ret = (this.job).call(this, arg1, arg2, arg3, function() {
            that.setComplete();
        });
        return ret;
    };
    prototype.invoke4 = function(arg1, arg2, arg3, arg4) {
        var that = this;
        var ret = (this.job).call(this, arg1, arg2, arg3, arg4, function() {
            that.setComplete();
        });
        return ret;
    };
}, {job: "CallbackOrFunction", args: {name: "Array", arguments: ["Object"]}, creationTime: "Date", start: "Date", stop: "Date"}, {});

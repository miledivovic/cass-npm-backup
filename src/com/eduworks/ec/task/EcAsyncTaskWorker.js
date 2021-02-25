var EcAsyncTaskWorker = function() {
    this.assignedList = [];
    var that = this;
    this.intervalHandler = setInterval(function() {
        that.run();
    }, this.checkWorkInterval);
};
EcAsyncTaskWorker = stjs.extend(EcAsyncTaskWorker, null, [], function(constructor, prototype) {
    prototype.checkWorkInterval = 100;
    prototype.intervalHandler = null;
    prototype.taskHandler = null;
    prototype.currentTask = null;
    prototype.assignedList = null;
    prototype.getAssignedCount = function() {
        return this.assignedList.length;
    };
    prototype.assign = function(task) {
        if (this.currentTask == null || this.currentTask == undefined || this.currentTask.getIsComplete()) {
            this.currentTask = task;
        } else {
            this.assignedList.push(task);
        }
    };
    prototype.invoke = function() {
        if (!this.currentTask.getIsComplete()) {
            var args = this.currentTask.getArguments();
            if (args == null || args == undefined || args.length == 0) {
                this.currentTask.doTask();
            } else if (args.length == 1) {
                this.currentTask.doTask(args[0]);
            } else if (args.length == 2) {
                this.currentTask.doTask(args[0], args[1]);
            } else if (args.length == 3) {
                this.currentTask.doTask(args[0], args[1], args[2]);
            } else if (args.length == 4) {
                this.currentTask.doTask(args[0], args[1], args[2], args[3]);
            }
        }
    };
    prototype.run = function() {
        var that = this;
        this.taskHandler = Task.immediate(function() {
            if (that.currentTask != undefined && that.currentTask != null && !that.currentTask.getIsStarted()) {
                that.invoke();
            }
            if (that.currentTask != undefined && that.currentTask != null && that.currentTask.getIsComplete()) {
                that.currentTask = that.assignedList.shift();
            }
        });
    };
}, {intervalHandler: "TimeoutHandler", taskHandler: "TimeoutHandler", currentTask: "EcAsyncTask", assignedList: {name: "Array", arguments: ["EcAsyncTask"]}}, {});

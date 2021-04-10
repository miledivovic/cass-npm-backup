var EcAsyncTaskManager = function(workerCount) {
    this.workerList = [];
    for (var i = 0; i < workerCount; i++) {
        this.workerList.push(new EcAsyncTaskWorker());
    }
    var that = this;
    setInterval(function() {
        that.cleanupTasks();
    }, this.taskCleanupInterval);
};
EcAsyncTaskManager = stjs.extend(EcAsyncTaskManager, null, [], function(constructor, prototype) {
    taskMap = null;
    workerList = null;
    taskCleanupInterval = 2500;
    addTasks(tasks) {
        var retMap = {};
        if (tasks != undefined) {
            for (var i = 0; i < tasks.length; i++) {
                var task = tasks[i];
                var key = this.addTask(task);
                retMap[key] = task;
            }
        }
        return retMap;
    };
    addTask(task) {
        if (this.taskMap == undefined || this.taskMap == null) {
            this.taskMap = {};
        }
        var key = "";
         while (key == "" || (this.taskMap[key] != undefined && this.taskMap[key] != null)){
            key = generateUUID();
        }
        this.taskMap[key] = task;
        this.assignNewTask(task);
        this.cleanupTasks();
        return key;
    };
    cleanupTasks() {
        for (var key in this.taskMap) {
            var task = this.taskMap[key];
            if (task.getIsStarted()) {
                var timeoutSec = task.getTimeout();
                if (task.getStart().getTime() < new Date().getTime() - (timeoutSec * 1000)) {
                    task.setComplete();
                }
            }
            if (task.getIsComplete()) {
                delete this.taskMap[key];
            }
        }
    };
    assignNewTask(task) {
        var min = 10000;
        var theGuy = null;
        for (var i = 0; i < this.workerList.length; i++) {
            if (this.workerList[i].getAssignedCount() < min) {
                theGuy = this.workerList[i];
                min = theGuy.getAssignedCount();
            }
        }
        if (theGuy != null) 
            theGuy.assign(task);
    };
}, {taskMap: {name: "Map", arguments: [null, "EcAsyncTask"]}, workerList: {name: "Array", arguments: ["EcAsyncTaskWorker"]}}, {});

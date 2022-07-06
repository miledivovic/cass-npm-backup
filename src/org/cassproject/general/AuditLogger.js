if (!global.auditLogger) { // Running client-side
    global.auditLogger = {
        report: function(system, severity, message, ...data) {
            if (severity === 'error') {
                console.trace(system + ": " + severity + ": " + message + ": " + data);
            } else {
                console.log(system + ": " + severity + ": " + message + ": " + data);
            }
        },
        LogCategory: {},
        Severity: {
            ERROR: 'error'
        }
    }
}

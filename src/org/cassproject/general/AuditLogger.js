if (!global.auditLogger) { // Running client-side
    global.auditLogger = {
        report: function(system, severity, message, ...data) {
            try {
                if (severity === 'error') {
                    console.trace(system + ": " + severity + ": " + message + ": " + data);
                } else {
                    console.log(system + ": " + severity + ": " + message + ": " + data);
                }
            } catch (ex) {
                console.trace("Could not log error message.");
            }
        },
        LogCategory: {},
        Severity: {
            ERROR: 'error'
        }
    }
}

(function () {
    if (!Date.now) {
        Date.now = function now () {
            return +(new Date);
        };
    }
    if (!performance) {
        performance = {};
        performance.now = function now () {
            return +(new Date);
        };
    }
    if (!console) {
        console = {};
        console.log = function log () {
        };
    }
}());

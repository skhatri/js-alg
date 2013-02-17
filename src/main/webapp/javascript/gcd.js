/*global Math*/
(function () {
    "use strict";
    function gcd(m, n) {
        if (n === 0) { return m; }
        return gcd(n, m % n);
    }

    function fibonacci(n) {
        var fibonacciN2 = 0, fibonacciN1 = 1, val = 0, i;
        if (n === 0 || n === 1) { return n; }
        for (i = 2; i <= n; i += 1) {
            val = fibonacciN1 + fibonacciN2;
            fibonacciN2 = fibonacciN1;
            fibonacciN1 = val;
        }

        return val;
    }

    function factorial(n) {
        return (n === 0) ? 1 : (n * factorial(n - 1));
    }

    function lcm(m, n) {
        return (m * n) / gcd(m, n);
    }

    function binary(n) {
        var x = n, r = 0, bstr = '';
        if (x === 0) { return '0'; }
        while (x !== 0) {
            r = x % 2;
            bstr = r + bstr;
            x = parseInt(x / 2, 10);
        }
        return bstr;
    }

    function hex(n) {
        return n.toString(16);
    }

    Math.ext = {
        gcd : gcd,
        fibonacci : fibonacci,
        factorial : factorial,
        lcm : lcm,
        binary : binary,
        hex : hex
    };
}());

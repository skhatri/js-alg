var Sort = (function () {
    "use strict";
    function Sort() {
    }

    var swap = function (a, i, j) {
        var tmp = a[j];
        a[j] = a[i];
        a[i] = tmp;
    };

    Sort.prototype.selection = function (a) {
        var i, j, min;
        for (i = 0; i < a.length; i += 1) {
            min = i;
            for (j = i + 1; j < a.length; j += 1) {
                if (a[j] < a[min]) {
                    min = j;
                }
            }
            swap(a, i, min);
        }
    };

    Sort.prototype.insertion = function (a) {
        var i, j;
        for (i = 0; i < a.length; i += 1) {
            for (j = i; j > 0; j -= 1) {
                if (a[j] < a[j - 1]) {
                    swap(a, j, j - 1);
                } else {
                    break;
                }
            }
        }
    };

    Sort.prototype.shellsort = function (a) {
        var i, j, h = 1, n = a.length;

        while (h < parseInt(n / 3, 10)) {
            h = 3 * h + 1;
        }

        while (h >= 1) {

            for (i = h; i < n; i += 1) {
                for (j = i; j >= h; j -= h) {
                    if (a[j] < a[j - h]) {
                        swap(a, j, j - h);
                    } else {
                        break;
                    }
                }
            }
            h = parseInt(h / 3, 10);
        }

    };

    return Sort;
}());

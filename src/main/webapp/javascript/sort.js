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


    return Sort;
}());
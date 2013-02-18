var sort = (function () {
    "use strict";
    var sort, swap;
    swap = function (a, i, j) {
        var tmp = a[j];
        a[j] = a[i];
        a[i] = tmp;
    };

    sort = {
        selection : function (a) {
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
        },

        insertion : function (a) {
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
        },

        shellsort : function (a) {
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

        },

        quicksort : function (a) {
            function partition (a, lo, hi) {
                var i = lo, j = hi + 1, el = a[lo];
                while (true) {
                    while (a[++i] < el) {
                        if (i == hi) {
                            break;
                        }
                    }
                    while (a[--j] > el) {
                        if (j == lo) {
                            break;
                        }
                    }
                    if (i >= j) {
                        break;
                    }
                    swap(a, i, j);
                }
                swap(a, lo, j);
                return j;
            }

            function qsort (a, lo, hi) {
                var p;
                if (hi <= lo) { return; }
                p = partition(a, lo, hi);
                qsort(a, lo, p - 1);
                qsort(a, p + 1, hi);
            }
            qsort(a, 0, a.length - 1);
        },
        
        qsort3way : function (a) {
            function sort3way (a, lo, hi) {
                if (lo >= hi) {
                    return;
                }
                var i = lo, lt = lo, gt = hi, el = a[lo];
                while (i <= gt) {
                    if (a[i] < el) {
                        swap(a, i++, lt++);
                    } else if (a[i] > el) {
                        swap(a, i, gt--);
                    } else {
                        i++;
                    }
                }
                sort3way(a, lo, lt-1);
                sort3way(a, gt+1, hi);
            }
            sort3way(a, 0, a.length - 1);
        }

    };

    return {
        shellsort : sort.shellsort,
        insertion : sort.insertion,
        selection : sort.selection,
        quicksort : sort.quicksort,
        qsort3way : sort.qsort3way
    };
}());

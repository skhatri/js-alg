describe("Given a sort dataset", function () {
    var a, sorted = [1, 2, 3, 4, 4, 4, 5, 8, 9, 13, 15, 52, 66, 66, 67, 183, 1839, 2289];
    var start, end, testname;
    beforeEach(function () {
        a = [ 9, 1839, 183, 15, 2, 67, 3, 66, 2289, 13, 5, 1, 52, 66, 4, 4, 4, 8 ];
        start = performance.now();
    });
    
    afterEach(function() {
        end = performance.now();
        console.log("test " + testname + " ran in " + (end - start) + " ms");
    });

    it("should be able to sort using insertion", function () {
        testname = "insertion";
        sort.insertion(a);
        expect(a).toEqual(sorted);
    });

    
    it("should be able to sort using selection", function () {
        testname = "selection";
        sort.selection(a);
        expect(a).toEqual(sorted);
    });
    
    
    it("should be able to sort using quicksort", function () {
        testname = "quicksort";
        sort.quicksort(a);
        expect(a).toEqual(sorted);
    });


    it("should be able to sort using shellsort", function () {
        testname = "shellsort";
        sort.shellsort(a);
        expect(a).toEqual(sorted);
    });
    
    it("should be able to sort using 3way quick sort", function () {
        testname = "3way quicksort";
        sort.qsort3way(a);
        expect(a).toEqual(sorted);
    });

});
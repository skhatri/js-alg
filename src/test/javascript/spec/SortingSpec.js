describe("Given a sort dataset", function () {
    var a, sorted = [1, 2, 3, 4, 4, 4, 5, 8, 9, 13, 15, 52, 66, 66, 67, 183, 1839, 2289];
    
    beforeEach(function () {
        a = [ 9, 1839, 183, 15, 2, 67, 3, 66, 2289, 13, 5, 1, 52, 66, 4, 4, 4, 8 ];
    });

    it("should be able to sort using insertion", function () {
        sort.insertion(a);
        console.log(a);
        expect(a).toEqual(sorted);
    });

    
    it("should be able to sort using selection", function () {
        sort.selection(a);
        console.log(a);
        expect(a).toEqual(sorted);
    });
    
    
    it("should be able to sort using quicksort", function () {
        sort.quicksort(a);
        console.log(a);
        expect(a).toEqual(sorted);
    });


    it("should be able to sort using shellsort", function () {
        sort.shellsort(a);
        console.log(a);
        expect(a).toEqual(sorted);
    });
    
    it("should be able to sort using 3way quick sort", function () {
        sort.qsort3way(a);
        console.log(a);
        expect(a).toEqual(sorted);
    });

});
describe("In a LinkedList, I can", function(){
    var list;
    beforeEach(function() {
        list = new LinkedList();
    });

    it("add items to it", function() {
        list.add("A");
        list.add("C");
        list.add("D");
        list.add("E");
        list.add("B");
        list.add("W");
        expect(list.list()).toEqual(["A", "C","D", "E", "B", "W"]);
    });

    it("remove items from it", function() {
        list.add("A");
        list.remove("A");
        list.add("A");
        list.add("C");
        list.add("D");
        list.add("E");
        list.add("B");
        list.add("W");
        list.remove("D");
        expect(list.list()).toEqual(["A", "C", "E", "B", "W"]);
        expect(list.remove("C")).toBe(true);
        expect(list.remove("D")).toBe(false);
        expect(list.list()).toEqual(["A", "E", "B", "W"]);
    });

    it("attempt to remove from empty list", function() {
        expect(list.remove("J")).toBe(false);
        list.add("A");
        expect(list.remove("A")).toBe(true);
        expect(list.remove("B")).toBe(false);
    });
    
    it("check items for existence", function() {
        expect(list.contains("A")).toBeFalsy();
        list.add("A");
        list.add("C");
        expect(list.contains("C")).toBeTruthy();
        list.add("D");
        expect(list.contains("A")).toBeTruthy();
        expect(list.contains("D")).toBeTruthy();
        list.add("E");
        expect(list.contains("F")).toBeFalsy();
        list.add("B");
        list.add("W");
        list.remove("D");
        expect(list.list()).toContain("B");
    });

    it("find items in it", function() {
        list.add("this");
        list.add("second");
        list.add("top");
        expect(list.find("this")).toBeTruthy();
        expect(list.find("that")).toBeFalsy();
    });

    it("find its size", function() {
        expect(list.size()).toEqual(0);
        list.add("A");
        expect(list.size()).toEqual(1);
        list.add("W");
        expect(list.size()).toEqual(2);
        list.add("R");
        expect(list.size()).toEqual(3);
    });

});

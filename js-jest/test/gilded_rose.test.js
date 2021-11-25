const {Shop, Item} = require("../src/gilded_rose");

describe("Gilded Rose", function() {
  it("should foo", function() {
    const gildedRose = new Shop([new Item("foo", 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("foo");
  });

  describe("Regular Items", () => {
    it("should decrease quality by one", function() {
      const gildedRose = new Shop([new Item("cool item", 10, 20)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(19);
    });
    it("should decrease sellIn by one", () => {
      const gildedRose = new Shop([new Item("cool item", 10, 20)]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toBe(9);
    });
    it("should decrease quality by two", () => {
      const gildedRose = new Shop([new Item("cool item", 0, 20)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(18);
    })
    it("should not decrease quality past zero", () => {
      const gildedRose = new Shop([new Item("cool item", 5, 0)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(0);
    })
  })  
});

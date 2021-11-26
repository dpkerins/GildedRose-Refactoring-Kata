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

  describe("Irregular Items", () => {
    describe("Aged Brie", () => {
      it("should increase quality by one", () => {
        const gildedRose = new Shop([new Item("Aged Brie", 5, 10)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toBe(11);
      })
      it("should not increase quality past 50", () => {
        const gildedRose = new Shop([new Item("Aged Brie", 5, 50)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toBe(50);
      })
      it("should increase quality by one even after sellIn passes", () => {
        const gildedRose = new Shop([new Item("Aged Brie", -1, 10)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toBe(12);
      })
    })

    describe("Sulfuras", () => {
      it("should not change quality", () => {
        const gildedRose = new Shop([new Item("Sulfuras, Hand of Ragnaros", 5, 50)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toBe(50);
      })
      it("should not change sellIn", () => {
        const gildedRose = new Shop([new Item("Sulfuras, Hand of Ragnaros", 5, 50)]);
        const items = gildedRose.updateQuality();
        expect(items[0].sellIn).toBe(5);
      })
      it("should not change quality even when above 50", () => {
        const gildedRose = new Shop([new Item("Sulfuras, Hand of Ragnaros", 5, 80)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toBe(80);
      })
    })

    describe("Backstage Passes", () => {
      it("should increase quality by 1", () => {
        const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 20, 30)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toBe(31);
      })
      it("should increase quality by 2", () => {
        const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 10, 30)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toBe(32);
      })
      it("should increase quality by 3", () => {
        const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 5, 30)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toBe(33);
      })
      it("should make quantity zero", () => {
        const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 0, 30)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toBe(0);
      })
    })
    
    describe("Conjured", () => {
      it("should decrease quality by 2", () => {
        const gildedRose = new Shop([new Item("Conjured Mana Cake", 5, 50)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toBe(48);
      })
      it("should decrease quality by 4", () => {
        const gildedRose = new Shop([new Item("Conjured Mana Cake", 0, 50)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toBe(46);
      })
    })
    
  })
});

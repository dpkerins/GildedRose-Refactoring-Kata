class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items=[]){
    this.items = items;
  }
  updateQuality() {
    this.items.forEach(item => {
      const isSulfuras = item.name == "Sulfuras, Hand of Ragnaros";
      const isAgedBrie = item.name == "Aged Brie";
      const isBackstagePass = item.name == 'Backstage passes to a TAFKAL80ETC concert';
      const isPastSellIn = item.sellIn < 1;
      const isConjured = item.name == "Conjured Mana Cake";
      if (isAgedBrie) {
        item.quality ++;
      }
      if (isAgedBrie && isPastSellIn) {
        item.quality ++;
      }
      if (isBackstagePass) { item.quality = this.calcBackstageQuality(item) };
      if (!isAgedBrie && !isBackstagePass && !isSulfuras) {
        item.quality --;
      }
      if (isConjured) {
        item.quality --;
      }
      if (!isAgedBrie && !isBackstagePass && !isSulfuras && isPastSellIn) {
        item.quality --;
      }
      if (isConjured && isPastSellIn) {
        item.quality --;
      }
      if (item.quality > 50) {
        item.quality = 50;
      }
      if (item.quality < 0) {
        item.quality = 0;
      }
      if (!isSulfuras) { item.sellIn-- };
    })
    return this.items;
  }

  calcBackstageQuality(item) {
    const isPastSellIn = item.sellIn < 1;
    const isFiveDaysFromSellin = item.sellIn < 6;
    const isTenDaysFromSellin = item.sellIn < 11;

    if (isPastSellIn) { return 0 };
    if (isFiveDaysFromSellin) { return item.quality += 3 };
    if (isTenDaysFromSellin) { return item.quality += 2 };
    return item.quality += 1;
  }
}

module.exports = {
  Item,
  Shop
}

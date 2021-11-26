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
      const isConjured = item.name == "Conjured Mana Cake";
      if (isAgedBrie) { item.quality = this.calcAgedBrieQuality(item) };
      if (isBackstagePass) { item.quality = this.calcBackstageQuality(item) };
      if (!isAgedBrie && !isBackstagePass && !isSulfuras && !isConjured) { item.quality = this.calcRegularItemQuality(item) };
      if (isConjured) { item.quality = this.calcConjuredQuality(item) };
      

      const isQualityOver50 = item.quality > 50;
      const isQualityUnder0 = item.quality < 0;
      if (isQualityOver50) { item.quality = 50 };
      if (isQualityUnder0) { item.quality = 0 };
      if (!isSulfuras) { item.sellIn-- };
    })
    return this.items;
  }

  calcRegularItemQuality(item) {
    const isPastSellIn = item.sellIn < 1;

    if (isPastSellIn) { return item.quality -= 2 };
    return item.quality -= 1;
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

  calcAgedBrieQuality(item) {
    const isPastSellIn = item.sellIn < 1;

    if (isPastSellIn) { return item.quality += 2 };
    return item.quality += 1;
  }

  calcConjuredQuality(item) {
    const isPastSellIn = item.sellIn < 1;

    if (isPastSellIn) { return item.quality -= 4 };
    return item.quality -= 2;
  }
}

module.exports = {
  Item,
  Shop
}

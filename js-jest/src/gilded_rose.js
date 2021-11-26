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
      if (!isSulfuras) {
        if (isAgedBrie || isBackstagePass) {
          item.quality ++;
        }
        if (isAgedBrie && isPastSellIn) {
          item.quality ++;
        }
        if (isBackstagePass && item.sellIn < 11) {
          item.quality++;
        }
        if (isBackstagePass && item.sellIn < 6) {
          item.quality++;
        }
        if (isBackstagePass && isPastSellIn) {
          item.quality = 0;
        }
        if (!isAgedBrie && !isBackstagePass) {
          item.quality --;
        }
        if (isConjured) {
          item.quality --;
        }
        if (!isAgedBrie && !isBackstagePass && isPastSellIn) {
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
        item.sellIn --;
      }
    })
    return this.items;
  }
}

module.exports = {
  Item,
  Shop
}

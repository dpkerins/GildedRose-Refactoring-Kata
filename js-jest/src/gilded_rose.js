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
      if (item.name != 'Sulfuras, Hand of Ragnaros') {
        if (item.name == 'Aged Brie') {
          item.quality ++;
        }
        if (item.name == 'Aged Brie' && item.sellIn < 1) {
          item.quality ++;
        }
        if (item.name == 'Backstage passes to a TAFKAL80ETC concert') {
          item.quality++;
        }
        if (item.name == 'Backstage passes to a TAFKAL80ETC concert' && item.sellIn < 11) {
          item.quality++;
        }
        if (item.name == 'Backstage passes to a TAFKAL80ETC concert' && item.sellIn < 6) {
          item.quality++;
        }
        if (item.name == 'Backstage passes to a TAFKAL80ETC concert' && item.sellIn < 1) {
          item.quality = 0;
        }
        if (item.name != 'Aged Brie' && item.name != 'Backstage passes to a TAFKAL80ETC concert') {
          item.quality --;
        }
        if (item.name == 'Conjured Mana Cake') {
          item.quality --;
        }
        if (item.name != 'Aged Brie' && item.name != 'Backstage passes to a TAFKAL80ETC concert' && item.sellIn < 1) {
          item.quality --;
        }
        if (item.name == 'Conjured Mana Cake' && item.sellIn < 1) {
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

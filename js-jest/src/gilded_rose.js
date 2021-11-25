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
        if (item.name != 'Aged Brie' && item.name != 'Backstage passes to a TAFKAL80ETC concert') {
          if (item.quality > 0) {
            item.quality --;
          }
        } else {
          if (item.quality < 50) {
            item.quality = item.quality + 1;
            if (item.name == 'Backstage passes to a TAFKAL80ETC concert') {
              if (item.sellIn < 11) {
                item.quality ++;
              }
              if (item.sellIn < 6) {
                item.quality ++;
              }
            }
          }
        }
        item.sellIn --;
        if (item.sellIn < 0) {
          if (item.name != 'Aged Brie') {
            if (item.name != 'Backstage passes to a TAFKAL80ETC concert') {
              if (item.quality > 0) {
                if (item.name != 'Sulfuras, Hand of Ragnaros') {
                  item.quality --;
                }
              }
            } else {
              item.quality = 0;
            }
          } else {
            if (item.quality < 50) {
              item.quality ++;
            }
          }
        }
      }
    })

    return this.items;
  }
}

module.exports = {
  Item,
  Shop
}

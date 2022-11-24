type Size = "" | "M" | "L" | "S" | "XL";

class Product {
  constructor(
    public name: string = "",
    public price: number = 0,
    public size: Size = ""
  ) {}

  isProductReady(): boolean {
    for (const key in this) {
      switch (typeof this[key]) {
        case 'string':
          if ((<string>(<unknown>this[key])).length <= 0)
            throw Error(`${key} is empty`);
          break;
        case 'number':
          if ((<number><unknown>this[key]) <= 0) throw Error(`${key} is zero`);
          break;
        default:
          throw Error(`${typeof this[key]} is not valid`);
      }
    }
    return true;
  }

  toString() {
    // No DRY
    // if(this.name.length <= 0) throw Error('name is empty')
    // if(this.price <= 0) throw Error('price is cero')
    // if(this.size.length <= 0) throw Error('size is empty')
    
    if (!this.isProductReady()) return;
    
    return `Name: ${this.name} Price: (${this.price}), Size: ${this.size}`;
  }
}
(() => {
  const bluePants2 = new Product('Product1', 123, 'M');
  console.log(bluePants2.toString());

  const bluePants = new Product();
  console.log(bluePants.toString());
})();

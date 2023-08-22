class Car {
  constructor(doors, engine, color) {
    this.doors = doors;
    this.engine = engine;
    this.color = color;
  }

  carStats() {
    return `This car has ${this.doors} doors, ${this.engine} engine and a beutiful ${this.color} color, `;
  }

  static totalDoors(car1, car2) {
    const doors1 = car1.doors;
    const doors2 = car2.doors;
    return doors1 + doors2;
  }
}

const cx5 = new Car(4, 'V8', 'Grey');
console.log(cx5);
console.log(cx5.carStats());

const civic = new Car(3, 'V4', 'Blue');
console.log(civic);
console.log(civic.carStats());

//
console.log(Car.totalDoors(cx5, civic));
// extends
class SUV extends Car {
  constructor(doors, engine, color, carStats) {
    super(doors, engine, color, carStats);
    // private property
    this._brand = '';
    // default properties, no need to pass in
    this.wheels = 4;
    this.ac = true;
  }
  get getBrand() {
    return this._brand;
  }
  set setBrand(brand) {
    this._brand = brand;
  }
  myBrand() {
    return console.log(`This SUV is a ${this.brand}`);
  }
}
const suv = new SUV(4, 'V8', 'Grey');
console.log(suv);
console.log(suv.carStats());
suv.setBrand = 'mazda';
console.log(suv.getBrand);

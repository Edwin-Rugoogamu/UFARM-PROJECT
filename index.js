class Car{
    constructor(){
        let name;
        let price;
    }
    getName(){
        return this.name
    }
    setName(name){
        this.name=name
    }
    getPrice(){
        return this.price
    }
    setPrice(price){
        this.price=price;
    }
}
let car1=new Car();
car1.setName("toyota")
car1.setPrice(30)

console.log(car1.getName())
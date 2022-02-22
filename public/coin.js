class Coin {

  constructor(name, apr, rateMin, rateMax) {
    this.name = name;
    this.rateMin = rateMin;
    this.rateMax = rateMax;
    this.apr = apr;
    this.balance = 0;
    this.numCoins = 0.0;
    this.price = 1000;
  }

  updatePrice() {
    //price should be updated every second in the player class
    let rate = (Math.random() * 2.5) - 0.5;
    this.price += ((this.targetPrice - this.price) / 15) * rate;
    this.balance = this.price * this.numCoins;
  }

  updateAPR() {
    //there should be a loop in the player class that runs this ever second
    this.balance += (this.balance*(this.apr/21900));
    this.updateNumCoins();
  }

  newTargetPrice() {
    //new target price should be set every 15 seconds
    let rate = Math.random() * (this.rateMax - this.rateMin) + this.rateMin;
    this.targetPrice = this.price * rate;
  }

  updateNumCoins() {
    this.numCoins = this.balance / this.price;
  }

}

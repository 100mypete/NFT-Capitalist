class Coin {
  constructor(name, apr, rateMin, rateMax) {
    this.name = name;
    this.rateMin = rateMin;
    this.rateMax = rateMax;
    this.apr = apr;
    this.balance = 0;
    this.numCoins = 0.0;
    this.price = 1000;
    this.rewards = 0;
  }

  updatePrice() {
    //update every second in player class
    let rate = Math.random() * 2.5 - 0.5;
    this.price += ((this.targetPrice - this.price) / 15) * rate;
    this.balance = this.price * this.numCoins;
    console.log("update price: " + this.price);
    console.log("update numcoins: " + this.numCoins);
    console.log("update balance: " + this.balance);
  }

  updateAPR() {
    //update every second
    this.rewards += this.balance * (this.apr / 21900);
  }

  harvestAPR() {
    this.balance += this.rewards;
    this.rewards = 0;
    this.updateNumCoins();
  }

  newTargetPrice() {
    //update every 15 seconds
    let rate = Math.random() * (this.rateMax - this.rateMin) + this.rateMin;
    this.targetPrice = this.price * rate;
  }

  updateNumCoins() {
    console.log(this.balance);
    console.log(this.price);
    this.numCoins = this.balance / this.price;
  }
}

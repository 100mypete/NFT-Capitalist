export default class Coin {

  let name;
  let balance = 0;
  let numCoins = 0;
  let price = 1000;
  let rateMin;
  let rateMax;
  let apr;
  let targetPrice;


  constructor(name, apr, rateMin, rateMax) {
    this.name = name;
    this.rateMin = rateMin;
    this.rateMax = rateMax;
    this.apr = apr;
  }

  function updatePrice() {
    //price should be updated every second in the player class
    let rate = (Math.random() * 2.5) - 0.5;
    price += ((targetPrice - price) / 15) * rate;
    balance = price * numCoins;
  }

  function updateAPR() {
    //there should be a loop in the player class that runs this ever second
    balance += (balance*(apr/21900));
  }

  function newTargetPrice() {
    //new target price should be set every 15 seconds
    let rate = Math.random() * (rateMax - rateMin) + rateMin;
    targetPrice = price * rate;
  }

}

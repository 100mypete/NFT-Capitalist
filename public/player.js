class Player {
  constructor() {
    if (window.localStorage.getItem("playerNFTs") == null) {
      window.localStorage.setItem("playerNFTs", JSON.stringify([]));
    }
    this.playerNFTs = JSON.parse(window.localStorage.getItem("playerNFTs"));
    if (window.localStorage.getItem("walletBalance") == null) {
      window.localStorage.setItem("walletBalance", 1000);
    }
    this.walletBalance = window.localStorage.getItem("walletBalance");
    this.perkTotal = 0;
    this.perkTotal = this.checkPerks();
    if (window.localStorage.getItem("coins") == null) {
      window.localStorage.setItem("coins", JSON.stringify([new Coin("alpha", 0, 0.5, 2), new Coin("beta", 10, 0.1, 3), new Coin("sigma", 10000, 0.02, 4)]));
    }
    this.coins = JSON.parse(window.localStorage.getItem("coins"));
    if (window.localStorage.getItem("marketplace") == null) {
      window.localStorage.setItem("marketplace", JSON.stringify(new Marketplace()));
    }
    this.marketplace = JSON.parse(window.localStorage.getItem("marketplace"));
  }

  getTotalBalance() {
    return (
      this.walletBalance +
      this.coins[0].balance +
      this.coins[1].balance +
      this.coins[2].balance
    );
  }

  getAlphaBalance() {
    return this.coins[0].balance;
  }

  getBetaBalance() {
    return this.coins[1].balance;
  }
  
  getSigmaBalance() {
    return this.coins[2].balance;
  }

  buyNFT(index) {
      let nft = this.marketplace.removeNFT(index);

      this.playerNFTs.push(nft);
      window.localStorage.setItem("playerNFTs", JSON.stringify(this.playerNFTs));
      this.perkTotal += nft.APRPerk;
      this.walletBalance -= nft.price;
      window.localStorage.setItem("walletBalance", this.walletBalance);
  }

  checkOwnedNFTs() {
    return this.playerNFTs;
  }

  invest(usd, coinType) {
    if (usd <= this.walletBalance) {
      let coin = this.coins[coinType];
      coin.balance += usd;
      this.walletBalance -= usd;
      window.localStorage.setItem("walletBalance", this.walletBalance);
      coin.updateNumCoins();
      window.localStorage.setItem("coins", this.coins);
    } else {
      console.log("Insufficient wallet balance");
    }
  }

  withdraw(usd, coinType) {
    let coin = this.coins[coinType];
    if (usd <= coin.balance) {
      coin.balance -= usd;
            this.walletBalance += usd;
            window.localStorage.setItem("walletBalance", this.walletBalance);
            coin.updateNumCoins();
            window.localStorage.setItem("coins", this.coins);
      coin.harvestAPR();
    } else {
      console.log("Insufficient coin balance");
    }
  }

  checkPerks() {
    let perk = 0.0;
    for (let i = 0; i < this.playerNFTs.length; i++) {
      perk += this.playerNFTs[i].APRPerk;
    }
    this.perkTotal = perk;
    return perk;
  }
}

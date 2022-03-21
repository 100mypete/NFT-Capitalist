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
    this.perkTotal = this.checkPerks();

    //coin stuff
    this.coins = [new Coin("alpha", 0, 0.5, 2), new Coin("beta", 10, 0.1, 3), new Coin("sigma", 10000, 0.02, 4)];

    //alpha
    if (window.localStorage.getItem("alphaBalance") == null) {
      window.localStorage.setItem("alphaBalance", 0.0);
    }
    this.coins[0].balance = window.localStorage.getItem("alphaBalance");

    if (window.localStorage.getItem("alphaNumCoins") == null) {
      window.localStorage.setItem("alphaNumCoins", 0.0);
    }
    this.coins[0].numCoins = window.localStorage.getItem("alphaNumCoins");

    if (window.localStorage.getItem("alphaPrice") == null) {
      window.localStorage.setItem("alphaPrice", 1000.0);
    }
    this.coins[0].price = window.localStorage.getItem("alphaPrice");

    if (window.localStorage.getItem("alphaRewards") == null) {
      window.localStorage.setItem("alphaRewards", 0.0);
    }
    this.coins[0].rewards = window.localStorage.getItem("alphaRewards");

    //beta
    if (window.localStorage.getItem("betaBalance") == null) {
      window.localStorage.setItem("betaBalance", 0.0);
    }
    this.coins[1].balance = window.localStorage.getItem("betaBalance");

    if (window.localStorage.getItem("betaNumCoins") == null) {
      window.localStorage.setItem("betaNumCoins", 0.0);
    }
    this.coins[1].numCoins = window.localStorage.getItem("betaNumCoins");

    if (window.localStorage.getItem("betaPrice") == null) {
      window.localStorage.setItem("betaPrice", 1000.0);
    }
    this.coins[1].price = window.localStorage.getItem("betaPrice");

    if (window.localStorage.getItem("betaRewards") == null) {
      window.localStorage.setItem("betaRewards", 0.0);
    }
    this.coins[1].rewards = window.localStorage.getItem("betaRewards");

    //sigma
    if (window.localStorage.getItem("sigmaBalance") == null) {
      window.localStorage.setItem("sigmaBalance", 0.0);
    }
    this.coins[2].balance = window.localStorage.getItem("sigmaBalance");

    if (window.localStorage.getItem("sigmaNumCoins") == null) {
      window.localStorage.setItem("sigmaNumCoins", 0.0);
    }
    this.coins[2].numCoins = window.localStorage.getItem("sigmaNumCoins");

    if (window.localStorage.getItem("sigmaPrice") == null) {
      window.localStorage.setItem("sigmaPrice", 1000.0);
    }
    this.coins[2].price = window.localStorage.getItem("sigmaPrice");

    if (window.localStorage.getItem("sigmaRewards") == null) {
      window.localStorage.setItem("sigmaRewards", 0.0);
    }
    this.coins[2].rewards = window.localStorage.getItem("sigmaRewards");

    
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
    this.perkTotal += nft.APRPerk;
    this.walletBalance -= nft.price;
  }

  checkOwnedNFTs() {
    return this.playerNFTs;
  }

  invest(usd, coinType) {
    if (usd <= this.walletBalance) {
      let coin = this.coins[coinType];
      coin.balance += usd;
      switch (coinType) {
        case 0:
          window.localStorage.setItem("alphaBalance", this.coins[0].balance);
          break;
        case 1:
          window.localStorage.setItem("betaBalance", this.coins[1].balance);
          break;
        case 2:
          window.localStorage.setItem("sigmaBalance", this.coins[2].balance);
          break;
      }

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
    if (usd < coin.balance) {
      coin.balance -= usd;
      switch (coinType) {
        case 0:
          window.localStorage.setItem("alphaBalance", this.coins[0].balance);
          break;
        case 1:
          window.localStorage.setItem("betaBalance", this.coins[1].balance);
          break;
        case 2:
          window.localStorage.setItem("sigmaBalance", this.coins[2].balance);
          break;
      }

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

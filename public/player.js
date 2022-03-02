class Player {
    
    constructor() {
        this.playerNFTs = [];
        this.walletBalance = 1000.0;
        this.perkTotal = 0;
        this.coins = [new Coin("alpha", 0, 0.5, 2), new Coin("beta", 10, 0.1, 3), new Coin("sigma", 10000, 0.02, 4)];
    }

    getTotalBalance() {
        return this.walletBalance + coin[1].balance + coins[2].balance + coins[3].balance;
    }

    buyNFT(index) {
        this.playerNFTs.push()
    }

    checkOwnedNFTs() {

    }

    invest(usd, coinType) {
        coin = coins[coinType];
        coin.balance += usd;
        coin.updateNumCoins();
    }

    withdraw(usd, coinType) {
        coin = coins[coinType];
        if (usd < coin.balance) {
            coin.balance -= usd;
            coin.updateNumCoins();
        }
    }

    checkPerks() {
        
    }
}
class Player {
    
    constructor() {

        if (window.localStorage.getItem("playerNFTs") == null) {
            window.localStorage.setItem("playerNFTs", JSON.stringify([]));
        }
        this.playerNFTs = JSON.parse(window.localStorage.getItem("playerNFTs"));
        this.walletBalance = 1000.0;
        this.perkTotal = 0;
        this.coins = [new Coin("alpha", 0, 0.5, 2), new Coin("beta", 10, 0.1, 3), new Coin("sigma", 10000, 0.02, 4)];
        this.marketplace = new Marketplace();
    }

    getTotalBalance() {
        return this.walletBalance + this.coins[0].balance + this.coins[1].balance + this.coins[2].balance;
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
    }

    checkOwnedNFTs() {
        return this.playerNFTs;
    }

    invest(usd, coinType) {
        let coin = this.coins[coinType];
        coin.balance += usd;
        this.walletBalance -= usd;
        coin.updateNumCoins();
    }

    withdraw(usd, coinType) {
        let coin = this.coins[coinType];
        if (usd < coin.balance) {
            coin.balance -= usd;
            this.walletBalance += usd;
            coin.updateNumCoins();
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
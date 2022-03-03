class Marketplace {
  constructor() {
    // Example preset marketplace
    this.NFTs = [
      new NFT("./images/1.jpg", 2, 0.01),
      new NFT("./images/2.webp", 69, 0.1),
      new NFT("./images/3.jpg", 420, 0.3),
    ];
  }

  removeNFT(index) {
    if (index >= 0 && index < this.NFTs.length) {
      let removed = this.NFTs[index];
      this.NFTs.splice(index, 1);
      return removed;
    } else {
      console.log("index out of range");
    }
  }
}

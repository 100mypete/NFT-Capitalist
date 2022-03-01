class Marketplace {

  constructor() {
    // Example preset marketplace
    this.NFTs = [
      new NFT("cat", 2, 0.01),
      new NFT("monkey", 69, 0.1),
      new NFT("horse", 420, 0.3),
    ];
  }

  removeNFT(index) {
    this.NFTs.splice(index, 1);
  }
}
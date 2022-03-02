class NFT {
  constructor(imageSrc, price, APRPerk) {
    this.image = new Image(400, 300);
    this.image.src = imageSrc;
    this.price = price;
    this.APRPerk = APRPerk;
  }
}

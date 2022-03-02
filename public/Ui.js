class UI{


getMousePos(canvas, evt) {
 var rect = this.canvas.getBoundingClientRect();
 return {
   x: evt.clientX - rect.left,
   y: evt.clientY - rect.top
 };
}


startEvents()
{
  let self = this;
  this.canvas.addEventListener('click', function(evt) {
   var mousePos = self.getMousePos(this.canvas, evt);
   for (let i = 0; i < self.buttons.length; i++) {
     switch (self.buttons[i].isWithin(mousePos.x, mousePos.y)) {
       case 1:
         self.drawHome();
         console.log(self.buttons[i].name + " was clicked");
         break;
       case 2:
         self.drawMarketPlace();
         console.log(self.buttons[i].name + " was clicked");
         break;
       case 3:
         console.log(self.buttons[i].name + " was clicked");
         break;
       case 4:
         console.log(self.buttons[i].name + " was clicked");
         break;
       case 5:
         console.log(self.buttons[i].name + " was clicked");
         break;
       case 6:
         console.log(self.buttons[i].name + " was clicked");
         break;
       case 7:
         console.log(self.buttons[i].name + " was clicked");
         break;
       case 8:
         console.log(self.buttons[i].name + " was clicked");
         break;
       case 9:
         console.log(self.buttons[i].name + " was clicked");
         break;
       case 10:
         console.log(self.buttons[i].name + " was clicked");
         break;
       case 11:
         console.log(self.buttons[i].name + " was clicked");
         break;
       case 12:
         console.log(self.buttons[i].name + " was clicked");
         break;
       case 13:
         console.log(self.buttons[i].name + " was clicked");
         break;
       case 14:
         console.log(self.buttons[i].name + " was clicked");
         break;
       case 15:
         console.log(self.buttons[i].name + " was clicked");
         break;
       case 16:
         console.log(self.buttons[i].name + " was clicked");
         break;
       case 17:
         console.log(self.buttons[i].name + " was clicked");
         break;
       case 18:
         console.log(self.buttons[i].name + " was clicked");
         break;
       case 19:
         console.log(self.buttons[i].name + " was clicked");
         break;
       case 20:
         console.log(self.buttons[i].name + " was clicked");
         break;
       case 21:
       {
       //nft page updater
       if(page+1<= this.testNFT.length )
       {     page +=1;
              this.displayNft()
            }
       console.log(this.buttons[i].name + " was clicked");
       break;
     }
  }
  }
})
}








 copyImageToCanvas(e, x, y, w, h) {
   var canvas = document.getElementById('gameCanvas');
   var ctx = canvas.getContext('2d');
 ctx.drawImage(e, x, y, w, h);
}


 drawCoinTab(x, y, w, h, r) {
 this.corner(x, y, w, h, r, "white")

 this.corner(x + 25, y + 540, 314, 139, 20, "#F0F6FF")

//top row this.buttons
 this.corner(x + 25, y + 406, 93.33, 40, 20, "#6AA5FF")
 this.corner(x + 134, y + 406, 93.33, 40, 20, "#6AA5FF")
 this.corner(x + 241, y + 406, 93.33, 40, 20, "#6AA5FF")

//bottom row this.buttons
 this.corner(x + 25, y + 470, 93.33, 40, 20, "#6AA5FF")
 this.corner(x + 134, y + 470, 93.33, 40, 20, "#6AA5FF")
 this.corner(x + 241, y + 470, 93.33, 40, 20, "#6AA5FF")
}

displayNft()
{
 var ctx = this.canvas.getContext("2d");
 ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

 //nft 1
 if(this.testNFT.length > 1)
 {
   this.copyImageToCanvas(this.testNFT[this.page].image, 300, 370, 142,142);
   this.corner(280,350,333,182,20, "#F0F6FF");
   ctx.font = "normal 18px Arial";
   ctx.fillStyle = "lightgray";
   ctx.fillText("Price", 482, 393);
   ctx.fillText("Perks", 482, 451);
   ctx.fillStyle = "black";
   ctx.fillText("$ " + this.testNFT[this.page].price, 482, 418);
   ctx.fillStyle = "lightgray";
 }

 //nft 2
 if(this.testNFT.length > 2)
 {
   this.copyImageToCanvas(this.testNFT[this.page+1].image, 673, 370, 142,142);
   this.corner(653,350,333,182,20, "#F0F6FF");
   ctx.fillText("Price", 855, 393);
   ctx.fillText("perks", 855, 451);
   ctx.fillStyle = "black";
   ctx.fillText("$ " + this.testNFT[this.page+1].price, 855, 418);
   ctx.fillStyle = "lightgray";
 }

 //nft 3
 if(this.testNFT.length > 3)
 {
   this.copyImageToCanvas(this.testNFT[this.page+2].image, 1046, 370, 142,142);
   this.corner(1026,350,333,182,20, "#F0F6FF");
   ctx.fillText("Price", 1228, 393);
   ctx.fillText("perks", 1228, 451);
   ctx.fillStyle = "black";
   ctx.fillText("$ " + this.testNFT[this.page+2].price, 1228, 418);

 }

   //nft 1
   if(this.testNFT.length > 1)
   {

     setTimeout(()=>{
          this.copyImageToCanvas(this.testNFT[this.page].image, 300, 370, 142,142);
     }, 200)
   }


   }




 drawHome() {
 var canvas = document.getElementById('gameCanvas');
 var ctx = canvas.getContext('2d');
 ctx.clearRect(0, 0, canvas.width, canvas.height);
 if (canvas.getContext) {
   ctx.fillStyle = '#F5F6F8';
   ctx.fillRect(0, 0, canvas.width, canvas.height);
   this.corner(40, 80, 160, 864, 20, "white");
   this.corner(240, 80, 560, 120, 20, "white");
   this.corner(840, 80, 560, 120, 20, "white");
  this.corner(80, 120, 80, 392, 20, "#6AA5FF");
   this.drawCoinTab(240, 240, 360, 704, 20);
   this.drawCoinTab(640, 240, 360, 704, 20);
   this.drawCoinTab(1040, 240, 360, 704, 20);

   ctx.font = "30px Arial";
   ctx.fillText("Wallet", 691, 150);
   ctx.fillText("Total Balance", 1190, 150);
   setTimeout(() => {
     this.copyImageToCanvas(this.alpha, 240, 220, 400, 300);
     this.copyImageToCanvas(this.beta, 740, 270, 160, 160);
     this.copyImageToCanvas(this.sigma, 1040, 220, 400, 300);
   }, 200)


 }
}

//draws rectangles with rounded corners
 corner(x, y, w, h, r, color) {
 var ctx = this.canvas.getContext('2d');
 ctx.strokeStyle = "white";
 ctx.shadowColor = "grey";
 ctx.shadowBlur = 0;
 ctx.shadowOffsetX = 0;
 ctx.shadowOffsetY = 0;
 ctx.beginPath();
 ctx.lineWidth = 2;
 ctx.moveTo(x + r, y);
 ctx.lineTo(x + w - r, y);
 ctx.arc(x + w - r, y + r, r, 1.5 * Math.PI, 0 * Math.PI);
 ctx.lineTo(x + w, y + h - r);
 ctx.arc(x + w - r, y + h - r, r, 0 * Math.PI, .5 * Math.PI);
 ctx.lineTo(x + r, y + h);
 ctx.arc(x + r, y + h - r, r, .5 * Math.PI, 1 * Math.PI);
 ctx.lineTo(x, y + r);
 ctx.arc(x + r, y + r, r, 1 * Math.PI, 1.5 * Math.PI);
 ctx.stroke();
 ctx.fillStyle = color;
 ctx.fill()
}

//draws marketplace
 drawMarketPlace() {
 var ctx = this.canvas.getContext('2d');
 ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
 if (this.canvas.getContext) {

   ctx.fillStyle = "#F5F6F8";
   ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
   this.corner(40, 80, 160, 864, 20, "white");
   this.corner(240, 80, 560, 120, 20, "white");
   this.corner(840, 80, 560, 120, 20, "white");
   this.corner(80, 512, 80, 392, 20, "#6AA5FF");
   this.corner(242, 240, 1160, 330, 20, "white");
   this.corner(242, 614, 1160, 330, 20, "white");
   ctx.fillStyle = "#6AA5FF";
   ctx.font = "30px Arial";
   ctx.fillText("Wallet", 691, 150);
   ctx.fillText("Total Balance", 1190, 150);
   ctx.font = "25px Arial";
   ctx.fillText("My NFTs", 280, 290);
   ctx.fillText("NFT Marketplace", 280, 654);
   setTimeout(() => {
     this.copyImageToCanvas(this.arrow, 1300, 300, 40, 40);
   }, 200)
  // this.displayNft();
 }
}
constructor()
{
  this.canvas = document.getElementById('gameCanvas');
  //markketplace nfts
  this.testNFT = [ new NFT("./images/1.jpg", 100, 3),new NFT("./images/2.webp", 10670, 3),new NFT("./images/3.jpg", 10342230, 3)];
  //button hitboxes for home and marketplace
  this.buttons = [
   new HitBoxes(80, 120, 80, 392, 1, "home"),
   new HitBoxes(80, 512, 80, 392, 2, "market"),
   new HitBoxes(265, 646, 93.33, 40, 3, "investAlpha1000"),
   new HitBoxes(374, 646, 93.33, 40, 4, "investAlpha10_000"),
   new HitBoxes(481, 646, 93.33, 40, 5, "investAlpha100_000"),
   new HitBoxes(665, 646, 93.33, 40, 6, "investBeta1000"),
   new HitBoxes(774, 646, 93.33, 40, 7, "investBeta10_000"),
   new HitBoxes(881, 646, 93.33, 40, 8, "investBeta100_000"),
   new HitBoxes(1065, 646, 93.33, 40, 9, "investSigma1000"),
   new HitBoxes(1174, 646, 93.33, 40, 10, "investSigma10_000"),
   new HitBoxes(1281, 646, 93.33, 40, 11, "investSigma100_000"),
   new HitBoxes(265, 710, 93.33, 40, 12, "withdrawAlpha1000"),
   new HitBoxes(374, 710, 93.33, 40, 13, "withdrawAlpha10_000"),
   new HitBoxes(481, 710, 93.33, 40, 14, "withdrawAlpha100_000"),
   new HitBoxes(665, 710, 93.33, 40, 15, "withdrawBeta1000"),
   new HitBoxes(774, 710, 93.33, 40, 16, "withdrawBeta10_000"),
   new HitBoxes(881, 710, 93.33, 40, 17, "withdrawBeta100_000"),
   new HitBoxes(1065, 710, 93.33, 40, 18, "withdrawSigma1000"),
   new HitBoxes(1174, 710, 93.33, 40, 19, "withdrawSigma10_000"),
   new HitBoxes(1281, 710, 93.33, 40, 20, "withdrawSigma100_000"),
   new HitBoxes(1300, 300, 40, 40,21, "scroolThroughMyNFTs")
  ];
  //coin images instantiation
  this.alpha = new Image(400, 300);
  this.alpha.src = './images/alpha.png';
  this.arrow = new Image(400, 300);
  this.arrow.src = './images/arrow.png';
  this.beta = new Image(400, 300);
  this.beta.src = './images/beta.png';
  this.sigma = new Image(400, 300);
  this.sigma.src = '././images/sigma.png';
  this.page = 0;
    this.drawHome();
  this.startEvents();
}
}

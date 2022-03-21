class UI {
  getMousePos(canvas, evt) {
    var rect = this.canvas.getBoundingClientRect();
    return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top,
    };
  }

  startEvents() {
    let self = this;
    let pages = 6;
    this.canvas.addEventListener("click", function (evt) {
      var mousePos = self.getMousePos(this.canvas, evt);
      for (let i = 0; i < self.buttons.length; i++) {
        switch (self.buttons[i].isWithin(mousePos.x, mousePos.y)) {
          case 1:
            self.drawHome();
            self.coin = true;
            console.log(
              self.buttons[i].id + ": " + self.buttons[i].name + " was clicked"
            );
            break;
          case 2:
            self.drawMarketPlace();
            self.coin = false;
            console.log(
              self.buttons[i].id + ": " + self.buttons[i].name + " was clicked"
            );
            break;
          case 3:
            self.player.invest(1000, 0);
            console.log(
              self.buttons[i].id + ": " + self.buttons[i].name + " was clicked"
            );
            break;
          case 4:
            self.player.invest(10000, 0);
            console.log(
              self.buttons[i].id + ": " + self.buttons[i].name + " was clicked"
            );
            break;
          case 5:
            self.player.invest(100000, 0);
            console.log(
              self.buttons[i].id + ": " + self.buttons[i].name + " was clicked"
            );
            break;
          case 6:
            self.player.invest(1000, 1);
            console.log(
              self.buttons[i].id + ": " + self.buttons[i].name + " was clicked"
            );
            break;
          case 7:
            self.player.invest(10000, 1);
            console.log(
              self.buttons[i].id + ": " + self.buttons[i].name + " was clicked"
            );
            break;
          case 8:
            self.player.invest(100000, 1);
            console.log(
              self.buttons[i].id + ": " + self.buttons[i].name + " was clicked"
            );
            break;
          case 9:
            self.player.invest(1000, 2);
            console.log(
              self.buttons[i].id + ": " + self.buttons[i].name + " was clicked"
            );
            break;
          case 10:
            self.player.invest(10000, 2);
            console.log(
              self.buttons[i].id + ": " + self.buttons[i].name + " was clicked"
            );
            break;
          case 11:
            self.player.invest(100000, 2);
            console.log(
              self.buttons[i].id + ": " + self.buttons[i].name + " was clicked"
            );
            break;
          case 12:
            self.player.withdraw(1000, 0);
            console.log(
              self.buttons[i].id + ": " + self.buttons[i].name + " was clicked"
            );
            break;
          case 13:
            self.player.withdraw(10000, 0);
            console.log(
              self.buttons[i].id + ": " + self.buttons[i].name + " was clicked"
            );
            break;
          case 14:
            self.player.withdraw(100000, 0);
            console.log(
              self.buttons[i].id + ": " + self.buttons[i].name + " was clicked"
            );
            break;
          case 15:
            self.player.withdraw(1000, 1);
            console.log(
              self.buttons[i].id + ": " + self.buttons[i].name + " was clicked"
            );
            break;
          case 16:
            self.player.withdraw(10000, 1);
            console.log(
              self.buttons[i].id + ": " + self.buttons[i].name + " was clicked"
            );
            break;
          case 17:
            self.player.withdraw(100000, 1);
            console.log(
              self.buttons[i].id + ": " + self.buttons[i].name + " was clicked"
            );
            break;
          case 18:
            self.player.withdraw(1000, 2);
            console.log(
              self.buttons[i].id + ": " + self.buttons[i].name + " was clicked"
            );
            break;
          case 19:
            self.player.withdraw(10000, 2);
            console.log(
              self.buttons[i].id + ": " + self.buttons[i].name + " was clicked"
            );
            break;
          case 20:
            self.player.withdraw(100000, 2);
            console.log(
              self.buttons[i].id + ": " + self.buttons[i].name + " was clicked"
            );
            break;
          case 21:
            if (self.myNFTPage + 1 >= self.playerNFT.length - 3) {
              console.log(self.buttons[i].name + " was clicked");
              break;
            }
            self.myNFTPage += 1;
            self.displayNft(0, self.playerNFT, "playerNFT");
            console.log(self.myNFTPage);
            break;
          case 22:
            if (self.myNFTPage == 0) {
              console.log(self.buttons[i].name + " was clicked");
              break;
            }
            self.myNFTPage -= 1;
            self.displayNft(0, self.playerNFT, "playerNFT");
            console.log(self.myNFTPage);
            break;
          case 23:
            if (self.marketplacePage == 0) {
              console.log(self.buttons[i].name + " was clicked");
              break;
            }
            self.marketplacePage -= 1;
            self.displayNft(374, self.marketNFT, "marketNFT");
            console.log(self.marketplacePage);
            break;
          case 24: // scroll right through nfts
            if (self.marketplacePage >= self.marketNFT.length - 3) {
              console.log(self.buttons[i].name + " was clicked");
              break;
            }
            self.marketplacePage += 1;
            self.displayNft(374, self.marketNFT, "marketNFT");
            console.log(self.marketplacePage);
            break;
          case 28:
            console.log(
              "NFT Buy Button " + (self.marketplacePage + 1) + " clicked!"
            );
            if (self.marketNFT[0].price > player.walletBalance) break;
            player.walletBalance -= self.marketNFT[0].price;
            self.updateBalances();
            self.playerNFT.push(self.marketNFT.splice(0, 1)[0]);
            self.drawMarketPlace();
            break;
          case 29:
            console.log(
              "NFT Buy Button " + (self.marketplacePage + 2) + " clicked!"
            );
            if (self.marketNFT[1].price > player.walletBalance) break;
            player.walletBalance -= self.marketNFT[1].price;
            self.updateBalances();
            self.playerNFT.push(self.marketNFT.splice(1, 1)[0]);
            self.drawMarketPlace();
            break;
          case 30:
            console.log(
              "NFT Buy Button " + (self.marketplacePage + 3) + " clicked!"
            );
            if (self.marketNFT[2].price > player.walletBalance) break;
            player.walletBalance -= self.marketNFT[2].price;
            self.updateBalances();
            self.playerNFT.push(self.marketNFT.splice(2, 1)[0]);
            self.drawMarketPlace();
            break;
          case 25: {
            player.coins[0].harvestAPR();
            console.log(
              self.buttons[i].id + ": " + self.buttons[i].name + " was clicked"
            );
            break;
          }
          case 26: {
            player.coins[1].harvestAPR();
            console.log(
              self.buttons[i].id + ": " + self.buttons[i].name + " was clicked"
            );
            break;
          }
          case 27: {
            player.coins[2].harvestAPR();
            console.log(
              self.buttons[i].id + ": " + self.buttons[i].name + " was clicked"
            );
          }
        }
      }
    });
    this.coin = self.coin;
    this.marketplacePage = self.marketplacePage;
  }

  copyImageToCanvas(e, x, y, w, h) {
    var canvas = document.getElementById("gameCanvas");
    var ctx = canvas.getContext("2d");
    ctx.drawImage(e, x, y, w, h);
  }

  drawCoinTab(x, y, w, h, r) {
    this.corner(x, y, w, h, r, "white");

    this.corner(x + 25, y + 540, 314, 139, 20, "#F0F6FF");

    //top row this.buttons
    this.corner(x + 25, y + 406, 93.33, 40, 20, "#6AA5FF");
    this.corner(x + 134, y + 406, 93.33, 40, 20, "#6AA5FF");
    this.corner(x + 241, y + 406, 93.33, 40, 20, "#6AA5FF");

    //bottom row this.buttons
    this.corner(x + 25, y + 470, 93.33, 40, 20, "#6AA5FF");
    this.corner(x + 134, y + 470, 93.33, 40, 20, "#6AA5FF");
    this.corner(x + 241, y + 470, 93.33, 40, 20, "#6AA5FF");
  }

  updateBalances() {
    var ctx = this.canvas.getContext("2d");
    ctx.font = "30px Roboto";
    ctx.fillStyle = "black";
    ctx.fillText(this.round(player.walletBalance), 280, 150);
    ctx.fillText(this.round(player.getTotalBalance()), 880, 150);
  }

  displayNft(y, array, name) {
    var ctx = this.canvas.getContext("2d");
    //nft 1

    if (name == "marketNFT") {
      if (name.length - this.marketplacePage >= 1) {
        this.corner(280, 350 + y, 333, 182, 20, "#F0F6FF");

        this.copyImageToCanvas(
          array[this.marketplacePage].image,
          300,
          370 + y,
          142,
          142
        );
        ctx.font = "normal 18px Arial";
        ctx.fillStyle = "lightgray";
        ctx.fillText("Price", 482, 393 + y);
        ctx.fillText("Perks", 482, 451 + y);
        ctx.fillStyle = "black";
        ctx.fillText("$ " + array[this.marketplacePage].price, 482, 418 + y);
        ctx.fillText("$ " + array[this.marketplacePage].perks, 482, 477 + y);
        this.corner(325, 500 + y, 100, 40, 20, "#87CEFA"); //EDITING HERE!!
        ctx.fillStyle = "white";
        ctx.fillText("BUY", 355, 525 + y);
        ctx.fillStyle = "lightgray";
      }

      if (name.length - this.marketplacePage >= 2) {
        this.corner(653, 350 + y, 333, 182, 20, "#F0F6FF");
        this.copyImageToCanvas(
          array[this.marketplacePage + 1].image,
          673,
          370 + y,
          142,
          142
        );
        ctx.font = "normal 18px Arial";
        ctx.fillStyle = "lightgray";
        ctx.fillText("Price", 855, 393 + y);
        ctx.fillText("Perks", 855, 451 + y);
        ctx.fillStyle = "black";
        ctx.fillText(
          "$ " + array[this.marketplacePage + 1].price,
          855,
          418 + y
        );
        ctx.fillText(
          "$ " + array[this.marketplacePage + 1].perks,
          855,
          477 + y
        );
        this.corner(698, 500 + y, 100, 40, 20, "#87CEFA"); //EDITING HERE!!
        ctx.fillStyle = "white";
        ctx.fillText("BUY", 730, 526 + y);
        ctx.fillStyle = "lightgray";
      }

      if (name.length - this.marketplacePage >= 3) {
        //nft 3
        this.corner(1026, 350 + y, 333, 182, 20, "#F0F6FF");
        this.copyImageToCanvas(
          array[this.marketplacePage + 2].image,
          1046,
          370 + y,
          142,
          142
        );
        ctx.font = "normal 18px Arial";
        ctx.fillStyle = "lightgray";
        ctx.fillText("Price", 1228, 393 + y);
        ctx.fillText("Perks", 1228, 451 + y);
        ctx.fillStyle = "black";
        ctx.fillText(
          "$ " + array[this.marketplacePage + 2].price,
          1228,
          418 + y
        );
        ctx.fillText(
          "$ " + array[this.marketplacePage + 2].perks,
          1228,
          477 + y
        );
        this.corner(1071, 500 + y, 100, 40, 20, "#87CEFA"); //EDITING HERE!!
        ctx.fillStyle = "white";
        ctx.fillText("BUY", 1102, 526 + y);
        ctx.fillStyle = "black";
      }
    }

    if (name == "playerNFT") {
      if (name.length - this.myNFTPage >= 1) {
        this.corner(280, 350 + y, 333, 182, 20, "#F0F6FF");
        this.copyImageToCanvas(
          array[this.myNFTPage].image,
          300,
          370 + y,
          142,
          142
        );
        ctx.font = "normal 18px Arial";
        ctx.fillStyle = "lightgray";
        ctx.fillText("Price", 482, 393 + y);
        ctx.fillText("Perks", 482, 451 + y);
        ctx.fillStyle = "black";
        ctx.fillText("$ " + array[this.myNFTPage].price, 482, 418 + y);
        ctx.fillText("$ " + array[this.myNFTPage].perks, 482, 477 + y);
        ctx.fillStyle = "lightgray";
      }

      if (name.length - this.myNFTPage >= 2) {
        this.corner(653, 350 + y, 333, 182, 20, "#F0F6FF");
        this.copyImageToCanvas(
          array[this.myNFTPage + 1].image,
          673,
          370 + y,
          142,
          142
        );
        ctx.font = "normal 18px Arial";
        ctx.fillStyle = "lightgray";
        ctx.fillText("Price", 855, 393 + y);
        ctx.fillText("Perks", 855, 451 + y);
        ctx.fillStyle = "black";
        ctx.fillText("$ " + array[this.myNFTPage + 1].price, 855, 418 + y);
        ctx.fillText("$ " + array[this.myNFTPage + 1].perks, 855, 477 + y);
        ctx.fillStyle = "lightgray";
      }

      if (name.length - this.myNFTPage >= 3) {
        //nft 3
        this.corner(1026, 350 + y, 333, 182, 20, "#F0F6FF");
        this.copyImageToCanvas(
          array[this.myNFTPage + 2].image,
          1046,
          370 + y,
          142,
          142
        );
        ctx.font = "normal 18px Arial";
        ctx.fillStyle = "lightgray";
        ctx.fillText("Price", 1228, 393 + y);
        ctx.fillText("Perks", 1228, 451 + y);
        ctx.fillStyle = "black";
        ctx.fillText("$ " + array[this.myNFTPage + 2].price, 1228, 418 + y);
        ctx.fillText("$ " + array[this.myNFTPage + 2].perks, 1228, 477 + y);
      }
    }
  }

  drawHome() {
    var canvas = document.getElementById("gameCanvas");
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (canvas.getContext) {
      ctx.fillStyle = "#F5F6F8";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      this.corner(40, 80, 160, 864, 20, "white");
      this.corner(240, 80, 560, 120, 20, "white");
      this.corner(840, 80, 560, 120, 20, "white");
      this.corner(80, 120, 80, 392, 20, "#6AA5FF");
      this.drawCoinTab(240, 240, 360, 704, 20);
      this.drawCoinTab(640, 240, 360, 704, 20);
      this.drawCoinTab(1040, 240, 360, 704, 20);
      this.copyImageToCanvas(this.alpha, 240, 220, 400, 300);
      this.copyImageToCanvas(this.beta, 740, 270, 160, 160);
      this.copyImageToCanvas(this.sigma, 1040, 220, 400, 300);

      //balance
      ctx.font = "30px Roboto";
      ctx.fillText("Wallet", 691, 150);
      ctx.fillText("Total Balance", 1190, 150);

      //coin name
      ctx.font = "42px Roboto";
      ctx.fillStyle = "#000000";
      ctx.fillText(this.player.coins[0].name, 366, 500);
      ctx.fillText(this.player.coins[1].name, 773, 500);
      ctx.fillText(this.player.coins[2].name, 1160, 500);

      //coin price
      ctx.font = "16px Roboto";
      ctx.fillText("$" + this.round(this.player.coins[0].price), 395, 550);
      ctx.fillText("$" + this.round(this.player.coins[1].price), 795, 550);
      ctx.fillText("$" + this.round(this.player.coins[2].price), 1195, 550);

      //coin apr
      ctx.fillText(
        "APR: " + this.round(this.player.coins[0].apr * 100) + "%",
        387,
        570
      );
      ctx.fillText(
        "APR: " + this.round(this.player.coins[1].apr * 100) + "%",
        775,
        570
      );
      ctx.fillText("APR: " + this.player.coins[2].apr * 100 + "%", 1162, 570);

      //coin owned
      ctx.fillStyle = "#6AA5FF";
      ctx.fillText(
        "Owned: $" + this.round(this.player.coins[0].balance),
        370,
        590
      );
      ctx.fillText(
        "Owned: $" + this.round(this.player.coins[1].balance),
        770,
        590
      );
      ctx.fillText(
        "Owned: $" + this.round(this.player.coins[2].balance),
        1170,
        590
      );

      //invest
      ctx.fillText("Invest", 266, 640);
      ctx.fillText("Invest", 667, 640);
      ctx.fillText("Invest", 1067, 640);

      //withdraw
      ctx.fillText("Withdraw", 266, 705);
      ctx.fillText("Withdraw", 667, 705);
      ctx.fillText("Withdraw", 1067, 705);

      //invest alpha
      ctx.fillStyle = "#FFFFFF";
      ctx.font = "16px Roboto";
      ctx.fillText("$1,000", 287, 671);
      ctx.fillText("$10,000", 391, 671);
      ctx.fillText("$100,000", 495, 671);

      //withdraw alpha
      ctx.fillText("$1,000", 287, 735);
      ctx.fillText("$10,000", 391, 735);
      ctx.fillText("$100,000", 495, 735);

      //invest beta
      ctx.fillText("$1,000", 687, 671);
      ctx.fillText("$10,000", 791, 671);
      ctx.fillText("$100,000", 895, 671);

      //withdraw beta
      ctx.fillText("$1,000", 687, 735);
      ctx.fillText("$10,000", 791, 735);
      ctx.fillText("$100,000", 895, 735);

      //invest sigma
      ctx.fillText("$1,000", 1087, 671);
      ctx.fillText("$10,000", 1191, 671);
      ctx.fillText("$100,000", 1295, 671);

      //withdraw sigma
      ctx.fillText("$1,000", 1087, 735);
      ctx.fillText("$10,000", 1191, 735);
      ctx.fillText("$100,000", 1295, 735);

      //alpha rewards
      if (this.player.coins[0].rewards == 0) {
        ctx.fillStyle = "#C4C4C4";
        ctx.font = "16px Roboto";
        ctx.fillText("No rewards", 381, 855);
      } else {
        ctx.fillStyle = "#C4C4C4";
        ctx.font = "16px Roboto";
        ctx.fillText("Claim", 400, 890);
        ctx.fillStyle = "#000000";
        ctx.font = "300 36px Roboto";
        ctx.fillText("$" + this.round(this.player.coins[0].rewards), 378, 850);
      }

      //beta rewards
      if (this.player.coins[1].rewards == 0) {
        ctx.fillStyle = "#C4C4C4";
        ctx.font = "16px Roboto";
        ctx.fillText("No rewards", 781, 855);
      } else {
        ctx.fillStyle = "#C4C4C4";
        ctx.font = "16px Roboto";
        ctx.fillText("Claim", 800, 890);
        ctx.fillStyle = "#000000";
        ctx.font = "300 36px Roboto";
        ctx.fillText("$" + this.round(this.player.coins[1].rewards), 778, 850);
      }

      //sigma rewards
      if (this.player.coins[2].rewards == 0) {
        ctx.fillStyle = "#C4C4C4";
        ctx.font = "16px Roboto";
        ctx.fillText("No rewards", 1181, 855);
      } else {
        ctx.fillStyle = "#C4C4C4";
        ctx.font = "16px Roboto";
        ctx.fillText("Claim", 1200, 890);
        ctx.fillStyle = "#000000";
        ctx.font = "300 36px Roboto";
        ctx.fillText("$" + this.round(this.player.coins[2].rewards), 1178, 850);
      }
    }
    this.updateBalances();
  }

  //draws rectangles with rounded corners
  corner(x, y, w, h, r, color) {
    var ctx = this.canvas.getContext("2d");
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
    ctx.arc(x + w - r, y + h - r, r, 0 * Math.PI, 0.5 * Math.PI);
    ctx.lineTo(x + r, y + h);
    ctx.arc(x + r, y + h - r, r, 0.5 * Math.PI, 1 * Math.PI);
    ctx.lineTo(x, y + r);
    ctx.arc(x + r, y + r, r, 1 * Math.PI, 1.5 * Math.PI);
    ctx.stroke();
    ctx.fillStyle = color;
    ctx.fill();
  }

  //draws marketplace
  drawMarketPlace() {
    var ctx = this.canvas.getContext("2d");
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
      ctx.font = "30px Roboto";
      ctx.fillText("Wallet", 691, 150);
      ctx.fillText("Total Balance", 1190, 150);
      ctx.font = "25px Roboto";
      ctx.fillText("My NFTs", 280, 290);
      ctx.fillText("NFT Marketplace", 280, 654);

      this.updateBalances();

      setTimeout(() => {
        this.copyImageToCanvas(this.rightArrow, 1300, 300, 30, 30);
        this.copyImageToCanvas(this.leftArrow, 1250, 300, 30, 30);
        this.copyImageToCanvas(this.rightArrow, 1300, 674, 30, 30);
        this.copyImageToCanvas(this.leftArrow, 1250, 674, 30, 30);
      }, 200);
      this.displayNft(0, this.playerNFT, "playerNFT");
      this.displayNft(374, this.marketNFT, "marketNFT");
    }
  }

  round(num) {
    return Number(Math.round(num + "e2") + "e-2");
  }

  constructor(player) {
    this.player = player;
    this.canvas = document.getElementById("gameCanvas");
    this.coin = true;

    //marketplace nfts
    this.marketNFT = [
      new NFT("./images/NFT/1.jpg", 100, 3),
      new NFT("./images/NFT/2.jpg", 10670, 3),
      new NFT("./images/NFT/3.jpg", 10342230, 3),
      new NFT("./images/NFT/2.jpg", 10670, 3),
    ];

    this.playerNFT = [
      new NFT("./images/NFT/1.jpg", 100, 3),
      new NFT("./images/NFT/2.jpg", 10670, 3),
      new NFT("./images/NFT/3.jpg", 10342230, 3),
      new NFT("./images/NFT/4.jpg", 100, 3),
      new NFT("./images/NFT/5.png", 10670, 3),
      new NFT("./images/NFT/3.jpg", 10342230, 3),
      new NFT("./images/NFT/5.png", 10670, 3),
    ];
    //button hitboxes for home and marketplace
    this.buttons = [
      new HitBoxes(80, 120, 80, 392, 1, "home"),
      new HitBoxes(80, 512, 80, 392, 2, "market"),
      new HitBoxes(265, 646, 93.33, 40, 3, "investAlpha1000"),
      //new HitBoxes(300, 646, 93.33, 40, 3.5, "testBuy");
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
      new HitBoxes(265, 780, 314, 139, 25, "claimAlpha"),
      new HitBoxes(665, 780, 314, 139, 26, "claimaBeta"),
      new HitBoxes(1065, 780, 314, 139, 27, "claimSigma"),
      new HitBoxes(1300, 300, 30, 30, 21, "scrollRThroughMyNFTs"),
      new HitBoxes(1250, 300, 30, 30, 22, "scrollLThroughMyNFTs"),
      new HitBoxes(1300, 674, 30, 30, 24, "scrollRThroughNFTMarketplace"),
      new HitBoxes(1250, 674, 30, 30, 23, "scrollLThroughNFTMarketplace"),
      //this.corner(325, 500 + y, 100, 40, 20, "#87CEFA"); //EDITING HERE!!
      new HitBoxes(325, 880, 100, 40, 28, "buy1"),
      new HitBoxes(700, 880, 100, 40, 29, "buy2"),
      new HitBoxes(1070, 880, 100, 40, 30, "buy3"),
    ];
    //coin images instantiation
    this.alpha = new Image(400, 300);
    this.alpha.src = "./images/alpha.png";
    this.rightArrow = new Image(400, 300);
    this.rightArrow.src = "./images/right-arrow.png";
    this.leftArrow = new Image(400, 300);
    this.leftArrow.src = "./images/left-arrow.png";
    this.beta = new Image(400, 300);
    this.beta.src = "./images/beta.png";
    this.sigma = new Image(400, 300);
    this.sigma.src = "./images/sigma.png";
    this.marketplacePage = 0;
    this.myNFTPage = 0;
    this.drawHome();
    this.startEvents();
  }
}

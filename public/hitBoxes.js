class HitBoxes {
  constructor(x, y, w, h, id, name) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.id = id;
    this.name = name;
  }
  isWithin(mouseX, mouseY) {
    if (mouseX > this.x && this.x + this.w > mouseX && mouseY > this.y &&
      mouseY < this.y + this.h) {
      return this.id
    } else {
      return 0
    }
  }
}

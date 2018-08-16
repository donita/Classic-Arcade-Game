const player = new Hero(); //store this new object



// Enemies our player must avoid
//enemy object constructor
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png'; //string to the png link in image folder


//method handles the enemy movement and multiplies something called dt to nromalize game speed
// Update the enemy's position, required method for game
//method that handles enemy objects
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
};

//renders the result of the previous method and uses html canvas
// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
class Hero {
  constructor() {
<<<<<<< HEAD
    this.sprite = 'images/char-boy.png'; //inside the image folder
    this.step = 101;
    this.jump = 83;
    this.startX = this.step * 2;
    this.startY = (this.jump * 5) - 20;
    this.x = this.startX;  //""""
    this.y = this.startY; // top left corner of our canvas

}

render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
}
/**
    * Update hero's x and y property according to input
    *
    * @param  {string} input - Direction to travel
    */
    handleInput(input) {
      switch(input) {
        case 'left':
                  if (this.x > 0) {
                      this.x -= this.step;
                  }
                  break;
              case 'up':
                  if (this.y > this.jump) {
                      this.y -= this.jump;
                  }
                  break;
              case 'right':
                  if (this.x < this.step * 4) {
                      this.x += this.step;
                  }
                  break;
              case 'down':
                  if (this.y < this.jump * 4) {
                      this.y += this.jump;
                  }
                  break;
          }
      }
=======
    this.x = 0;  //""""
    this.y = 0; // top left corner of our canvas
    this.sprite = 'images/char-boy.png'; //inside the image folder
}

render() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }
}


>>>>>>> dcd6dfbff2e7888b222c24cf36fe8fac5d09e856
//instantiate our enemies
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {  //object with keypair number and strings
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]); // a call to a player method
});

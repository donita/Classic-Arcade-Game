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
    this.x = 0;  //""""
    this.y = 0; // top left corner of our canvas
    this.sprite = 'images/char-boy.png'; //inside the image folder
}

render() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }
}


//instantiate our enemies
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

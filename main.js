// Size of the game area (in px)
const GAME_AREA_WIDTH = 700;
const GAME_AREA_HEIGHT = 500;

// Size of the paddles (in px)
const PADDLE_HEIGHT = 100;
const PADDLE_WIDTH = 20;

// Size of the ball (in px)
const BALL_SIZE = 20;

// Get the computer paddle element
const computerPaddle = document.querySelector(".computer-paddle");

//Get the ball element
const ball = document.querySelector(".ball");

// The y-velocity of the computer paddle
let computerPaddleYPosition = 0;
let computerPaddleYVelocity = 1;

// ball movement
let ballpositionY = 10;
let ballVelocityY = 10;

let ballpositionX = 10;
let ballVelocityX = 10;

// Update the pong world

function update() {
  // Update the computer paddle's position
  computerPaddleYPosition = computerPaddleYPosition + computerPaddleYVelocity;

  // Apply the y-position
  computerPaddle.style.top = `${computerPaddleYPosition}px`;

  //ball position Y
  ballpositionY = ballpositionY + ballVelocityY;
  ball.style.top = ballpositionY + "px";

  //ball position X
  ballpositionX = ballpositionX + ballVelocityX;
  ball.style.left = ballpositionX + "px";

  if (ballpositionY <= 10 || ballpositionY >= 480) {
    ballVelocityY *= -1;
  }
  if (ballpositionX <= 10 || ballpositionX >= 680) {
    ballVelocityX *= -1;
  }
}

// Call the update() function every 35ms
setInterval(update, 35);

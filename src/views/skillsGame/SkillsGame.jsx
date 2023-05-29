import React, { useRef, useEffect } from "react";
import "./SkillsGame.css";
import suelo from "../../assets/suelo.png";
import cielo from "../../assets/cielo.jpg";
import brick1 from "../../assets/brickMario1.gif";
import spriteRunLeft from "../../assets/spriteRunLeft.png";
import spriteRunright from "../../assets/spriteRunRight.png";
import spriteStandLeft from "../../assets/spriteStandLeft.png";
import spriteStandRight from "../../assets/spriteStandRight.png";

const SkillsGame = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    canvas.width = 1024;
    canvas.height = 576;

    const gravity = 1.5;

    class Player {
      constructor() {
        this.speed = 10;
        this.position = {
          x: 100,
          y: 100,
        };
        this.velocity = {
          x: 0,
          y: 0,
        };
        this.width = 66;
        this.height = 150;
        this.image = createImage(spriteStandRight);
        this.frames = 0;
        this.sprites = {
          stand: {
            right: createImage(spriteStandRight),
            left: createImage(spriteStandLeft),
            cropWidth: 177,
            width: 66,
          },
          run: {
            right: createImage(spriteRunright),
            left: createImage(spriteRunLeft),
            cropWidth: 341,
            width: 127.875,
          },
        };
        this.currentSprite = this.sprites.stand.right;
        this.currentCropWidth = 177;
      }
      draw() {
        context.drawImage(
          this.currentSprite,
          this.currentCropWidth * this.frames,
          0,
          this.currentCropWidth,
          this.currentSprite.height,
          this.position.x,
          this.position.y,
          this.width,
          this.height
        );
      }
      update() {
        this.frames++;
        if (
          this.frames > 59 &&
          (this.currentSprite === this.sprites.stand.right ||
            this.currentSprite === this.sprites.stand.left)
        ) {
          this.frames = 0;
        } else if (
          this.frames > 29 &&
          (this,
          this.currentSprite === this.sprites.run.right ||
            this.currentSprite === this.sprites.run.left)
        ) {
          this.frames = 0;
        }
        this.draw();
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
        if (this.position.y + this.height + this.velocity.y <= canvas.height) {
          this.velocity.y += gravity;
        }
      }
    }

    class Platform {
      constructor({ x, y, image }) {
        this.position = {
          x,
          y,
        };

        this.image = image;
        this.width = image.width;
        this.height = image.height;
      }
      draw() {
        context.drawImage(this.image, this.position.x, this.position.y);
      }
    }

    class GenericObject {
      constructor({ x, y, image }) {
        this.position = {
          x,
          y,
        };

        this.image = image;
        this.width = image.width;
        this.height = image.height;
      }
      draw() {
        context.drawImage(this.image, this.position.x, this.position.y);
      }
    }

    const createImage = (imageSrc) => {
      const image = new Image();
      image.src = imageSrc;
      return image;
    };

    let sueloImage = createImage(suelo);
    let brick1Image = createImage(brick1);

    let player = new Player();
    let platforms = [];
    let genericObjects = [];

    const keys = {
      right: {
        pressed: false,
      },
      left: {
        pressed: false,
      },
    };

    let scrollOfSet = 0;

    const init = () => {
      sueloImage = createImage(suelo);
      brick1Image = createImage(brick1);

      player = new Player();
      platforms = [
        new Platform({
          x:
            sueloImage.width * 4 +
            700 -
            2 +
            sueloImage.width -
            brick1Image.width,
          y: 206,
          image: createImage(brick1),
        }),
        new Platform({ x: 0, y: 426, image: sueloImage }),
        new Platform({ x: sueloImage.width, y: 426, image: sueloImage }),
        new Platform({
          x: sueloImage.width * 2 + 100,
          y: 426,
          image: sueloImage,
        }),
        new Platform({
          x: sueloImage.width * 3 + 300,
          y: 426,
          image: sueloImage,
        }),
        new Platform({
          x: sueloImage.width * 4 + 300 - 2,
          y: 426,
          image: sueloImage,
        }),
        new Platform({
          x: sueloImage.width * 4 + 300 - 2,
          y: 216,
          image: createImage(brick1),
        }),
        new Platform({
          x: sueloImage.width * 5 + 700 - 2,
          y: 226,
          image: createImage(brick1),
        }),
      ];

      genericObjects = [
        new GenericObject({
          x: -1,
          y: -1,
          image: createImage(cielo),
        }),
      ];
      scrollOfSet = 0;
    };

    const animate = () => {
      requestAnimationFrame(animate);
      context.fillStyle = "white";
      context.fillRect(0, 0, canvas.width, canvas.height);

      genericObjects.forEach((genericObject) => {
        genericObject.draw();
      });

      platforms.forEach((platform) => {
        platform.draw();
      });
      player.update();

      if (keys.right.pressed && player.position.x < 400) {
        player.velocity.x = player.speed;
      } else if (
        (keys.left.pressed && player.position.x > 100) ||
        (keys.left.pressed && scrollOfSet === 0 && player.position.x > 0)
      ) {
        player.velocity.x = -player.speed;
      } else {
        player.velocity.x = 0;

        if (keys.right.pressed) {
          scrollOfSet += player.speed;
          platforms.forEach((platform) => {
            platform.position.x -= player.speed;
          });
          genericObjects.forEach((genericObject) => {
            genericObject.position.x -= player.speed * 0.66;
          });
        } else if (keys.left.pressed && scrollOfSet > 0) {
          scrollOfSet -= player.speed;
          platforms.forEach((platform) => {
            platform.position.x += player.speed;
          });
          genericObjects.forEach((genericObject) => {
            genericObject.position.x += player.speed * 0.66;
          });
        }
      }

      platforms.forEach((platform) => {
        if (
          player.position.y + player.height >= platform.position.y &&
          player.position.y + player.velocity.y <
            platform.position.y + platform.height &&
          player.position.x + player.width > platform.position.x &&
          player.position.x < platform.position.x + platform.width
        ) {
          player.position.y = platform.position.y - player.height;
          player.velocity.y = 0;
        }
      });

      //win condition
      if (scrollOfSet > sueloImage.width * 4 + 700 - 2) {
        console.log("you win");
      }
      //lose condition
      if (player.position.y > canvas.height) {
        init();
      }
    };
    init();
    animate();

    const handleKeyDown = ({ keyCode }) => {
      console.log(keyCode);
      switch (keyCode) {
        case 65:
          console.log("left");
          keys.left.pressed = true;
          player.currentSprite = player.sprites.run.left;
          player.currentCropWidth = player.sprites.run.cropWidth;
          player.width = player.sprites.run.width;
          break;
        case 83:
          console.log("down");
          break;
        case 68:
          console.log("right");
          keys.right.pressed = true;
          player.currentSprite = player.sprites.run.right;
          player.currentCropWidth = player.sprites.run.cropWidth;
          player.width = player.sprites.run.width;
          break;
        case 87:
          console.log("up");
          player.velocity.y -= 25;
          break;
      }
    };

    const handleKeyUp = ({ keyCode }) => {
      console.log(keyCode);
      switch (keyCode) {
        case 65:
          console.log("left");
          keys.left.pressed = false;
          break;
        case 83:
          console.log("down");
          break;
        case 68:
          console.log("right");
          keys.right.pressed = false;
          player.currentSprite = player.sprites.stand.right;
          player.currentCropWidth = player.sprites.stand.cropWidth;
          player.width = player.sprites.stand.width;
          break;
        case 87:
          console.log("up");
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  return (
    <div className="lienzo">
      <h1>Prueba de juego de habilidades</h1>
      <canvas className="juego" ref={canvasRef}></canvas>
    </div>
  );
};

export default SkillsGame;

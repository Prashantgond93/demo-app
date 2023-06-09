import React from "react";
import "./AnimatedCard.css";

const AnimatedCard = () => {
  const featuresArr = [
    {
      id: 0,
      title: "ADAPTIVE WP CUSTOMIZE",
      img: "https://rumble.ancorathemes.com/splash/assets/img/features/Vector1.png",
    },
    {
      id: 1,
      title: "EASY AUTOMATIC UPDATES",
      img: "https://rumble.ancorathemes.com/splash/assets/img/features/Vector2.png",
    },
    {
      id: 2,
      title: "HUNDREDS OF SHORTCODES",
      img: "https://rumble.ancorathemes.com/splash/assets/img/features/Vector3.png",
    },
    {
      id: 3,
      title: "POWERFUL ADMIN INTERFACE",
      img: "https://rumble.ancorathemes.com/splash/assets/img/features/Vector4.png",
    },
    {
      id: 4,
      title: "STICKY MENUS AND STICKY SIDEBARS",
      img: "https://rumble.ancorathemes.com/splash/assets/img/features/Vector5.png",
    },
    {
      id: 5,
      title: "CUSTOMIZABLE GOOGLE MAP",
      img: "https://rumble.ancorathemes.com/splash/assets/img/features/Vector6.png",
    },
    {
      id: 6,
      title: "AWESOME FONTELLO ICONS",
      img: "https://rumble.ancorathemes.com/splash/assets/img/features/Vector7.png",
    },
    {
      id: 7,
      title: "GOOGLE FONTS AND FONTSQUIRREL",
      img: "https://rumble.ancorathemes.com/splash/assets/img/features/Vector8.png",
    },
    {
      id: 7,
      title: "TRANSLATION READY",
      img: "https://rumble.ancorathemes.com/splash/assets/img/features/Vector9.png",
    },
    {
      id: 7,
      title: "CARING 24/7 SUPPORT",
      img: "https://rumble.ancorathemes.com/splash/assets/img/features/Vector10.png",
    },
    {
      id: 7,
      title: "CROSS-BROWSER COMPATIBILITY",
      img: "https://rumble.ancorathemes.com/splash/assets/img/features/Vector11.png",
    },
    {
      id: 7,
      title: "PARALLAX EFFECT BACKGROUNDS",
      img: "https://rumble.ancorathemes.com/splash/assets/img/features/Vector12.png",
    },
  ];

  return (
    <div class="bg-warning p-2 mt-5 bg-opacity-10">
      <h4 class="fst-italic text-center">Easy Website Creation</h4>
      <h2 class="text-center fw-bold">FEATURES NEVER STOP</h2>
      <div class="row">
        {featuresArr &&
          featuresArr.map((item, index) => {
            return (
              <div class="card text-center mt-5 ">
                <a href="#">
                  <img src={item?.img} />
                </a>
                <h1 class="card-title fw-bold mt-5">{item?.title}</h1>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default AnimatedCard;

import React from "react";

const FeatureComponent = () => {
  const featureArr = [
    {
      id: 0,
      title: "PRE-BUILT PAGES",
      des: "Install demo data in a few seconds! Just change the texts and the images and your website is ready to go!",
      img: "https://rumble.ancorathemes.com/splash/assets/img/demo/section1.png",
    },
    {
      id: 1,
      title: "ONE-CLICK DEMO INSTALLATION",
      des: "We create several unique, ready to use and highly customizable page layouts that are best suited for each specific topic.",
      img: "	https://rumble.ancorathemes.com/splash/assets/img/demo/section2.left.png",
    },
    {
      id: 2,
      title: "POWERFUL THEMEREX ADD-ONS PLUGIN",
      des: "We've created our own unique all-in-one set of plugins. You don’t need to overpay for each and every plugin separately. Simply use ThemeREX Addons for managing your custom post types, API keys, social media profiles, etc.",
      img: "https://rumble.ancorathemes.com/splash/assets/img/demo/section3.png",
    },
    {
      id: 3,
      title: "HEADER & FOOTER BUILDER",
      des: "Absolutely all the scrolled selections support swipe effect. The theme uses mobile friendly sliders: Revolution & Swiper Fully responsive layout & Retina Ready.",
      img: "https://rumble.ancorathemes.com/splash/assets/img/demo/section4.png",
    },
    {
      id: 4,
      title: "ELEMENTOR PAGE BUILDER & SLIDER REVOLUTION INCLUDED",
      des: "You don’t have to worry about getting the most popular plugins of our time, they come along with our theme.",
      img: "https://rumble.ancorathemes.com/splash/assets/img/demo/section5.png",
    },
  ];

  return (
    <div class="bg-white p-2 mt-5">
      <h4 class="fst-italic text-center">More</h4>
      <h2 class="text-center fw-bold">POWERFUL FEATURES</h2>

      {featureArr &&
        featureArr.map((item, index) => {
          return (
            <div class="row align-items-center pt-xl-2 pb-5 mb-lg-2 mb-xl-3 mb-xxl-4">
              <div class="col-md-5 col-xl-4 offset-lg-1 aos-init">
                <h3 class="h2 fw-bold px-xl-5">{item?.title}</h3>
                <p class="lead px-xl-5">{item?.des}</p>
              </div>

              <div class="col-md-7 col-lg-6">
                <img src={item?.img} />
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default FeatureComponent;

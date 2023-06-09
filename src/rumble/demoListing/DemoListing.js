import React from "react";
// import "./DemoListing.css";

const DemoListing = () => {
  const Arr = [
    {
      id: 0,
      title: "SINGLE BOXER HOME PAGE 1",
      img: "https://rumble.ancorathemes.com/splash/assets/img/isotope2/home1.jpg",
    },
    {
      id: 1,
      title: "WRESTLING",
      img: "https://rumble.ancorathemes.com/splash/assets/img/isotope2/mma.jpg",
    },
    {
      id: 2,
      title: "HOME MMA",
      img: "https://rumble.ancorathemes.com/splash/assets/img/isotope2/crossfit.jpg",
    },
    {
      id: 3,
      title: "HOME CROSSFIT",
      img: "https://rumble.ancorathemes.com/splash/assets/img/isotope2/karate.jpg",
    },
    {
      id: 4,
      title: "KARATE & KATANA",
      img: "https://rumble.ancorathemes.com/splash/assets/img/isotope2/thai.jpg",
    },
    {
      id: 5,
      title: "MUAY THAI",
      img: "https://rumble.ancorathemes.com/splash/assets/img/isotope2/home2.jpg",
    },
    {
      id: 6,
      title: "SINGLE BOXER HOME PAGE 2",
      img: "https://rumble.ancorathemes.com/splash/assets/img/isotope2/home3.jpg",
    },
    {
      id: 7,
      title: "SINGLE BOXER (BOXED)",
      img: "https://rumble.ancorathemes.com/splash/assets/img/isotope2/home4.jpg ",
    },
    {
      id: 8,
      title: "BOXING GYM",
      img: "https://rumble.ancorathemes.com/splash/assets/img/isotope2/home4.jpg ",
    },
    {
      id: 9,
      title: "BOXING & MMA STORE",
      img: "https://rumble.ancorathemes.com/splash/assets/img/isotope2/home5.jpg ",
    },
    {
      id: 10,
      title: "BOXING NEWS",
      img: "https://rumble.ancorathemes.com/splash/assets/img/isotope2/home6.jpg ",
    },
    {
      id: 11,
      title: "BOXING NEWS 2",
      img: "https://rumble.ancorathemes.com/splash/assets/img/isotope2/home7.jpg ",
    },
  ];

  //  https://rumble.ancorathemes.com/splash/assets/img/isotope2/cs.png

  return (
    <div>
      <div class="text-center bg-warning bg-opacity-10">
        <p class="fst-italic fs-2 text-danger">Predesigned &amp; Ready</p>

        <h2 class="mt-sm-3">
          <span class="fs-1 text-dark fw-bold">CHECK OUT ALL OUR</span>
        </h2>
        <h2 class="mt-sm-3">
          <span class="fs-1 text-dark fw-bold">DEMOS</span>
        </h2>

        <div class="row">
          {Arr &&
            Arr.map((item, index) => {
              return (
                <div class="col-6 mt-5 gx-5">
                  <div>
                    <a href="#">
                      <img src={item?.img} alt="Gloss Blog" />
                      {/* <div class="btn btn-default">View Demo</div> */}
                    </a>
                    <h1 class="card-title fw-bold mt-5">{item?.title}</h1>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default DemoListing;

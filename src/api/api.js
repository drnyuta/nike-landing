const navBarItems = [
  {
    title: "W00C0MMERCE",
  },
  {
    title: "PRODUCT",
  },
  {
    title: "SLIDER",
  },
];

const images = [
  {
    logo: "./assets/logo.svg",
  },
  {
    twitter: "./assets/twitter.svg",
  },
  {
    insta: "./assets/instagram.svg",
  },
  {
    facebook: "./assets/facebook.svg",
  },
  {
    shoes: "./assets/shoes-img.svg",
  },
  {
    star: "./assets/star.svg",
  },
  {
    emptyStar: "./assets/empty-star.svg",
  },
  {
    arrow: "./assets/arrow.svg",
  },
];

const description = {
  description:
    "A Woocommerce product gallery Slider for Slider Revolution with mind-blowing visuals.",
};

const price = {
  price: "$749",
};

const button = {
  CTA: "BUY NOW",
};

const heading = {
  title: "NIKE CRYPTOKICK",
};

export function getNavBarItems() {
  return [...navBarItems];
}

export function getImages() {
  return [...images];
}

export function getDescription() {
  return { ...description };
}

export function getButton() {
  return { ...CTA };
}

export function getPrice() {
  return { ...price };
}

export function getHeading() {
  return { ...title };
}

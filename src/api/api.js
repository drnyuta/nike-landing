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
    shoes: "./assets/shoes-image.png",
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
  title:
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

const cart = {
  items: "0",
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
  return { ...button };
}

export function getPrice() {
  return { ...price };
}

export function getHeading() {
  return { ...heading };
}

export function getCart() {
  return { ...cart };
}
console.log(cart.items)
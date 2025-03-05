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
    logo: "./logo.svg",
  },
  {
    twitter: "./twitter.svg",
  },
  {
    insta: "./instagram.svg",
  },
  {
    facebook: "./facebook.svg",
  },
  {
    shoes: "./shoes-image.png",
  },
  {
    star: "./star.svg",
  },
  {
    emptyStar: "./empty-star.svg",
  },
  {
    arrow: "./arrow.svg",
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
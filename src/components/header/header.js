import "./header.css";

export function setupHeader(parent, data) {
  const header = createHeader(data);
  parent.append(header);
}

export function createHeader(data) {
  const header = document.createElement("header");
  header.className = "header";

  const logo = createLogo(data.images);
  header.append(logo);

  const nav = createNav(data.navBarItems);
  header.append(nav);

  const headerIconsWrapper = createHeaderIconsWrapper(data);
  header.append(headerIconsWrapper);

  const cart = createCart();
  header.append(cart);

  return header;
}

export function createLogo(images) {
  const logo = document.createElement("img");
  logo.src = images[0].logo;
  logo.className = "header__logo";
  return logo;
}

export function createNav(items) {
  const nav = document.createElement("nav");
  const ul = document.createElement("ul");

  nav.className = "header__nav";
  ul.className = "header__menu";

  items.forEach((item) => {
    const li = document.createElement("li");
    li.innerHTML = item.title;
    li.className = "header__menu__item";
    ul.append(li);
  });

  nav.append(ul);
  return nav;
}

export function createHeaderIconsWrapper(data) {
  const headerIconsWrapper = document.createElement("div");
  headerIconsWrapper.className = "header__icons-wrapper";

  const twitter = createTwitterIcon(data.images);
  headerIconsWrapper.append(twitter);

  const insta = createInstaIcon(data.images);
  headerIconsWrapper.append(insta);

  const facebook = createFacebookIcon(data.images);
  headerIconsWrapper.append(facebook);

  return headerIconsWrapper;
}

export function createTwitterIcon(images) {
  const twitter = document.createElement("img");
  twitter.src = images[1].twitter;
  twitter.className = "header__icon";
  return twitter;
}

export function createInstaIcon(images) {
  const insta = document.createElement("img");
  insta.src = images[2].insta;
  insta.className = "header__icon";
  return insta;
}

export function createFacebookIcon(images) {
  const facebook = document.createElement("img");
  facebook.src = images[3].facebook;
  facebook.className = "header__icon";
  return facebook;
}

export function createCart() {
  const cart = document.createElement("p");
  cart.innerHTML = "CART(0)";
  cart.className = "cart";
  return cart;
}
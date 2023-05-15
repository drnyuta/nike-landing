import "./footer.css";

export function setupFooter(parent, data) {
  const footer = createFooter(data);
  parent.append(footer);
}

export function createFooter(data) {
  const footer = document.createElement("footer");
  footer.className = "footer";

  const footerTextWrapper = createFooterWrapper(data);

  const ctaButton = createCtaButton(data.button);

  footer.append(footerTextWrapper, ctaButton);

  return footer;
}

export function createFooterWrapper(data) {
  const footerTextWrapper = document.createElement("div");
  footerTextWrapper.className = "footer__text-wrapper";

  const price = createPrice(data.price);
  footerTextWrapper.append(price);

  for(let i = 0; i < 4; i++) {
    const starIcon = createStarIcon(data.images);
    footerTextWrapper.append(starIcon);
  }

  const emptyStar = createEmptyStarIcon(data.images);
  footerTextWrapper.append(emptyStar);
  
  const description = createDescription(data.description);

  footerTextWrapper.append(description);

  return footerTextWrapper;
}

export function createPrice(price) {
  const num = document.createElement("p");
  num.className = "footer__price";
  num.innerHTML = price.price;

  return num;
}

export function createStarIcon(images) {
  const starIcon = document.createElement("img");
  starIcon.className = "footer__star-icon";
  starIcon.setAttribute('src', images[5].star);

  return starIcon;
}

export function createEmptyStarIcon(images) {
  const starIcon = document.createElement("img");
  starIcon.className = "footer__star-icon";
  starIcon.setAttribute('src', images[6].emptyStar);

  return starIcon;
}

export function createDescription(description) {
  const desc = document.createElement("p");
  desc.className = "footer__description";
  desc.innerHTML = description.title;

  return desc;
}

export function createCtaButton(button) {
  const cta = document.createElement("button");
  cta.className = "footer__CTA-button";
  cta.innerHTML = button.CTA;

  return cta;
}
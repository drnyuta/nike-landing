import "./main-section.css";

export function setupMain(parent, data) {
  const main = createMain(data);
  parent.append(main);
}

export function createMain(data) {
  const main = document.createElement("main");
  main.className = "main";

  const mainContainer = createMainContainer(data);
  main.append(mainContainer);

  return main;
}

export function createMainContainer(data) {
  const mainContainer = document.createElement("div");
  mainContainer.className = "main-container";

  const leftCircle = createLeftCircle(data);
  
  const textContainer = createTextContainer(data);

  const rightCircle = createRightCircle(data);

  mainContainer.append(leftCircle, textContainer, rightCircle);

  return mainContainer;
}

export function createLeftCircle(data) {
  const circle = document.createElement("div");
  circle.className = "left-circle";

  const arrow = createArrowLeft(data.images);
  circle.append(arrow);

  return circle;
}

export function createRightCircle(data) {
  const circle = document.createElement("div");
  circle.className = "right-circle";

  const arrow = createArrow2(data.images);
  circle.append(arrow);

  return circle;
}

export function createHeading(heading) {
  const title = document.createElement("h1");
  title.innerHTML = heading.title;
  title.className = "main-heading";
  return title;
}

export function createTextContainer(data) {
  const textContainer = document.createElement("div");
  textContainer.className = "main-section__text-container";

  const photo = createPhoto(data.images);

  const title = createHeading(data.heading);

  textContainer.append(photo, title);

  return textContainer;
}

export function createPhoto(images) {
  const photo = document.createElement("img");
  photo.setAttribute('src', images[4].shoes);
  photo.className = "shoes-image";
  return photo;
}

export function createArrow2(images) {
  const arrow = document.createElement("img");
  arrow.setAttribute('src', images[7].arrow);
  arrow.className = "main-section__arrow-right";
  return arrow;
}

export function createArrowLeft(images) {
  const arrow = document.createElement("img");
  arrow.setAttribute('src', images[7].arrow);
  arrow.className = "main-section__arrow-left";
  return arrow;
}
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

  const firstCircle = create1Circle(data);
  mainContainer.append(firstCircle);

  const textContainer = createTextContainer(data);
  mainContainer.append(textContainer);

  const secondCircle = create2Circle(data);
  mainContainer.append(secondCircle);

  return mainContainer;
}

export function create1Circle(data) {
  const circle = document.createElement("div");
  circle.className = "circle1";

  const arrow = createArrow1(data.images);
  circle.append(arrow);

  return circle;
}

export function create2Circle(data) {
  const circle = document.createElement("div");
  circle.className = "circle2";

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
  textContainer.append(photo);

  const title = createHeading(data.heading);
  textContainer.append(title);

  return textContainer;
}

export function createPhoto(images) {
  const photo = document.createElement("img");
  photo.src = images[4].shoes;
  photo.className = "shoes-image";
  return photo;
}

export function createArrow2(images) {
  const arrow = document.createElement("img");
  arrow.src = images[7].arrow;
  arrow.className = "main-section__arrow2";
  return arrow;
}

export function createArrow1(images) {
  const arrow = document.createElement("img");
  arrow.src = images[7].arrow;
  arrow.className = "main-section__arrow1";
  return arrow;
}
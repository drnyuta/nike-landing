export function setupMain(parent, data) {
  const main = createMain(data);
  parent.append(main);
}

export function createMain(data) {
  const main = document.createElement("main");
  main.className = "main";
  return main;
}



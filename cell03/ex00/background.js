const changeBg = () => {
  let randomInt = Math.floor(Math.random() * 16777215);
  let hexColor = randomInt.toString(16);
  let newColor = "#" + hexColor.padStart(6, '0');
  document.body.style.backgroundColor = newColor;
  console.log("New background color: " + newColor);
};
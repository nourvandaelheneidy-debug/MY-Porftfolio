const symbols = [
  {text:"JS", color:"#d4a900"},
  {text:"HTML", color:"#f0642f"},
  {text:"CSS", color:"#3777d6"},
  {text:"</>", color:"#ed5c7b"},
  {text:"{ }", color:"#8d6cdb"},
  {text:"C++", color:"#4776b8"},
  {text:"SQL", color:"#399f86"},
  {text:"Node.js", color:"#398b54"},
  {text:"// create", color:"#b06b83"},
  {text:"=>", color:"#e58a48"},
  {text:"git commit", color:"#df6480"},
  {text:"npm", color:"#c84d58"}
];
const layer = document.querySelector("#floating-code");
for (let i = 0; i < 24; i++) {
  const symbol = symbols[Math.floor(Math.random() * symbols.length)];
  const item = document.createElement("span");
  item.className = "float-code";
  item.textContent = symbol.text;
  item.style.left = `${Math.random() * 100}%`;
  item.style.color = symbol.color;
  item.style.animationDuration = `${18 + Math.random() * 24}s`;
  item.style.animationDelay = `${-Math.random() * 35}s`;
  item.style.fontSize = `${13 + Math.random() * 12}px`;
  layer.appendChild(item);
}

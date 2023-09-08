const headingDiv = document.createElement("div");
const mainContainer = document.createElement("div");
const buttonsDiv = document.createElement("div");
const blueBtn = document.createElement("button");
const learnBtn = document.createElement("button");
///mainconrainer
mainContainer.style.display = "flex";
mainContainer.style.flexDirection = "column";
mainContainer.style.alignItems = "center";
mainContainer.style.textAlign = "center";
mainContainer.style.marginTop = "160px";
///blueBtn
blueBtn.textContent = "Get Quote Now";
blueBtn.style.backgroundColor = "#23A6F0";
blueBtn.style.borderColor = "#23A6F0";
blueBtn.style.width = "193px";
blueBtn.style.height = "52px";
blueBtn.style.padding = "15px";
blueBtn.style.borderRadius = "5px";
blueBtn.style.fontSize = "15px";
blueBtn.style.color = "white";
///learnbtn
learnBtn.textContent = "Learn More";
learnBtn.style.backgroundColor = "#252B42";
learnBtn.style.width = "193px";
learnBtn.style.height = "52px";
learnBtn.style.padding = "15px";
learnBtn.style.borderRadius = "5px";
learnBtn.style.borderColor = "#23A6F0";
learnBtn.style.fontSize = "15px";
learnBtn.style.color = "#23A6F0";
learnBtn.style.marginLeft = "20px";
/////h4
const h4 = document.createElement("h4");
h4.textContent = "Welcome";
h4.style.color = "#23A6F0";
////h1
const h1 = document.createElement("h1");
h1.textContent = "Selling on the internet like a pro";
h1.style.fontSize = "58px";
h1.style.color = "white";
h1.style.width = "542px";
h1.style.height = "160px";
////p
const p = document.createElement("p");
p.textContent =
  " We know how large objects will act, but things on a small scale just do not act that way.";
p.style.color = "white";
p.style.fontSize = "20px";
p.style.width = "536px";
p.style.height = "60px";
////boxDiv
const boxDiv = document.createElement("div");
boxDiv.style.display = "flex";
boxDiv.style.gap = "40px";
boxDiv.style.marginTop = "50px";
// box 1
const box1 = document.createElement("div");
const box1Img = document.createElement("img");
const box1H1 = document.createElement("h1");
const boxP = document.createElement("p");
box1.style.width = "328px";
box1.style.height = "292px";
box1.style.backgroundColor = "white";
box1.style.marginTop = "60px";
///box1img
box1Img.src = "./img/img1.png";
box1Img.marginTop = "10px";
box1Img.style.marginLeft = "-160px";
box1Img.style.marginTop = "35px";
box1.appendChild(box1Img);
///box1H1
box1H1.textContent = "training Courses";
box1H1.style.color = "#252B42";
box1.appendChild(box1H1);
///border1
const border1 = document.createElement("div");
border1.style.border = "1px solid red";
border1.style.width = "80px";
border1.style.marginLeft = "50px";
border1.style.borderWidth = "-10px";
box1.appendChild(border1);
///boxp
boxP.textContent =
  "The gradual accumulation of information about atomic and small-scale behaviour...";
boxP.style.width = "222px";
boxP.style.height = "60px";
boxP.style.marginLeft = "50px";
boxP.style.textAlign = "initial";
box1.appendChild(boxP);
boxDiv.appendChild(box1);
///  box2////////
const box2 = document.createElement("div");
const box2Img = document.createElement("img");
const box2H1 = document.createElement("h1");
const box2P = document.createElement("p");
box2.style.width = "328px";
box2.style.height = "292px";
box2.style.backgroundColor = "white";
box2.style.marginTop = "60px";
//box2IMg
box2Img.src = "./img/img2.png";
box2Img.marginTop = "10px";
box2Img.style.marginLeft = "-160px";
box2Img.style.marginTop = "35px";
box2.appendChild(box2Img);
///box2H1
box2H1.textContent = "training Courses";
box2H1.style.color = "#252B42";
box2.appendChild(box2H1);
///border2
const border2 = document.createElement("div");
border2.style.border = "1px solid red";
border2.style.width = "80px";
border2.style.marginLeft = "50px";
border2.style.borderWidth = "-10px";
box2.appendChild(border2);
///box2P
box2P.textContent =
  "The gradual accumulation of information about atomic and small-scale behaviour...";
box2P.style.width = "222px";
box2P.style.height = "60px";
box2P.style.marginLeft = "50px";
box2P.style.textAlign = "initial";
box2.appendChild(box2P);
boxDiv.appendChild(box2);
////box3 //////
const box3 = document.createElement("div");
const box3Img = document.createElement("img");
const box3H1 = document.createElement("h1");
const box3P = document.createElement("p");
box3.style.width = "328px";
box3.style.height = "292px";
box3.style.backgroundColor = "#23A6F0";
box3.style.marginTop = "60px";
box3.style.color = "white";
///box3Img
box3Img.src = "./img/img3.png";
box3Img.style.marginLeft = "-160px";
box3Img.style.marginTop = "35px";
box3.appendChild(box3Img);
box3H1.textContent = "training Courses";
box3.appendChild(box3H1);
//border3
const border3 = document.createElement("div");
border3.style.border = "1px solid white";
border3.style.width = "80px";
border3.style.marginLeft = "50px";
border3.style.borderWidth = "-10px";
box3.appendChild(border3);
///box3p
box3P.textContent =
  "The gradual accumulation of information about atomic and small-scale behaviour...";
box3P.style.width = "222px";
box3P.style.height = "60px";
box3P.style.marginLeft = "50px";
box3P.style.textAlign = "initial";
box3.appendChild(box3P);
boxDiv.appendChild(box3);
///section2
const section2 = document.createElement("div");
const heading2Div = document.createElement("div");
//heading2Div
heading2Div.style.display = "flex";
heading2Div.style.flexDirection = "Column";
heading2Div.style.justifyContent = "Center";
heading2Div.style.alignItems = "Center";
heading2Div.style.marginTop = "90px";
heading2Div.style.paddingTop = "140px";
///section2p1
const section2p1 = document.createElement("p");
section2p1.textContent = "Practice Advice";
section2p1.style.color = "#23A6F0";
section2p1.style.fontSize = "20px";
section2p1.style.fontWeight = "bold";
heading2Div.appendChild(section2p1);
////section2H1
const section2H1 = document.createElement("h1");
section2H1.textContent = "Featured Products";
section2H1.style.color = "#252B42";
section2H1.style.fontSize = "40px";
heading2Div.appendChild(section2H1);
////section2p2
const section2p2 = document.createElement("p");
section2p2.textContent =
  "Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics ";
section2p2.style.color = "#737373";
section2p2.style.width = "469px";
section2p2.style.height = "40px";
section2p2.style.textAlign = "center";
heading2Div.appendChild(section2p2);
///section2
section2.style.backgroundColor = "white";
section2.style.height = "620px";
section2.appendChild(heading2Div);
///section2Input
const section2Input = document.createElement("div");
section2Input.style.display = "flex";
section2Input.style.marginTop = "50px";
section2Input.style.justifyContent = "center";
//emailInput
const emailInput = document.createElement("input");
emailInput.placeholder = "Your  Email";
emailInput.style.height = "50px";
emailInput.style.fontSize = "16px";
emailInput.style.width = "550px";
emailInput.style.paddingLeft = "20px";
////subscribeBtn
const subscribeBtn = document.createElement("button");
subscribeBtn.style.backgroundColor = "#23A6F0";
subscribeBtn.style.width = "90px";
subscribeBtn.style.borderColor = "#23A6F0";
subscribeBtn.style.color = "white";
subscribeBtn.textContent = "Subscribe";
////
section2Input.appendChild(emailInput);
section2Input.appendChild(subscribeBtn);
section2.appendChild(section2Input);
///
document.body.style.margin = "0";
document.body.style.padding = "0";
///
document.body.style.backgroundColor = " #252B42";
document.body.appendChild(mainContainer);
mainContainer.appendChild(headingDiv);
headingDiv.appendChild(h4);
headingDiv.appendChild(h1);
headingDiv.appendChild(p);
mainContainer.appendChild(buttonsDiv);
buttonsDiv.appendChild(blueBtn);
buttonsDiv.appendChild(learnBtn);
mainContainer.appendChild(boxDiv);
document.body.appendChild(section2);

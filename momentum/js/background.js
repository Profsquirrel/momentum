const images = ["0.jpg", "1.jpg", "2.jpg","3.jpg","4.jpg","5.jpg","6.jpg"];
const chosenImage = images[Math.floor(Math.random()*images.length)];
const body=document.body;
// const bgImage = document.createElement("img");
const bgImage = `images/${chosenImage}`;

body.style.background=`url(${bgImage}) no-repeat rgba(0,0,0,0)`;
body.style.backgroundAttachment="fixed";
body.style.backgroundSize="cover";
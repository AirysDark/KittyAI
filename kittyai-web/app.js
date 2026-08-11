async function getPhoto(){

const response = await fetch(
"https://raw.githubusercontent.com/AirysDark/KittyAI/main/photos.json"
);

const data = await response.json();

const photo =
data.photos[
Math.floor(Math.random()*data.photos.length)
];

document.getElementById("photo").innerHTML =
`
<img src="${photo.url}" width="400">
`;

}

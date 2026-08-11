async function sendMessage(){

    const input = document.getElementById("userInput");
    const chat = document.getElementById("chat");

    const text = input.value;

    if(!text) return;


    chat.innerHTML += `
        <div class="message user">
            ${text}
        </div>
    `;

    input.value = "";


    if(
        text.toLowerCase().includes("photo") ||
        text.toLowerCase().includes("kitty") ||
        text.toLowerCase().includes("cat")
    ){

        chat.innerHTML += `
        <div class="message bot">
            🐱💕 Here you go!
        </div>
        `;


        const response = await fetch("photos.json");

        const data = await response.json();


        const photo =
        data.photos[
            Math.floor(Math.random()*data.photos.length)
        ];


        chat.innerHTML += `
        <div class="message bot">
            <img src="${photo.url}">
        </div>
        `;

    }
    else {

        chat.innerHTML += `
        <div class="message bot">
            🐱 I can send you kitty photos!
        </div>
        `;

    }


    chat.scrollTop = chat.scrollHeight;
}

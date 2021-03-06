// Browsers geo location API to get latitude and longitude



const socket = io();



socket.on("message",(message)=>{
console.log(message);
});

document.querySelector("#form-message").addEventListener('submit', (e)=>{
    e.preventDefault();

    const message = e.target.elements.message.value

    socket.emit("sendMessage",message);


});


document.querySelector("#send-location").addEventListener('click', () => {
 if(!navigator.geolocation){
     return alert("Geolocation is not supported for your browswer");
 }
 navigator.geolocation.getCurrentPosition((position)=>{
     
     socket.emit("sendLocation", {
         latitude : position.coords.latitude, 
         longitude: position.coords.longitude});
 })
});
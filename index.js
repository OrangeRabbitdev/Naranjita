const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "!";

client.on("message", msg =>{


        if(msg.content == `${prefix}test`){
            msg.reply("Estoy vivo y soy hermoso!");
       }

    

   
});

console.log(`Holi!`);

client.login('NTk4MTgzOTA1MDE4OTA0NTc4.Xic-vA.cbEh3jHOQOD8yzf1ne5X7QDM85E');





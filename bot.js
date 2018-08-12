// Load up the discord.js library
const Discord = require("discord.js");

// This is your client. Some people call it `bot`, some people call it `self`, 
// some might call it `cootchie`. Either way, when you see `client.something`, or `bot.something`,
// this is what we're refering to. Your client.
const client = new Discord.Client();

// Here we load the config.json file that contains our token and our prefix values. 
const config = require("./config.json");
// config.token contains the bot's token
// config.prefix contains the message prefix.

client.on("ready", () => {
  // This event will run if the bot starts, and logs in, successfully.
  console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`); 
  // Example of changing the bot's playing game to something useful. `client.user` is what the
  // docs refer to as the "ClientUser".
 client.user.setPresence({ game: { name: 'your ass', type: 3 } });
});



client.on("message", async message => {
  // This event will run on every single message received, from any channel or DM.
  
  // It's good practice to ignore other bots. This also makes your bot ignore itself
  // and not get into a spam loop (we call that "botception").
  if(message.author.bot) return;
  
  // Also good practice to ignore any message that does not start with our prefix, 
  // which is set in the configuration file.
  if(message.content.indexOf(config.prefix) !== 0) return;
  
  // Here we separate our "command" name, and our "arguments" for the command. 
  // e.g. if we have the message "+say Is this the real life?" , we'll get the following:
  // command = say
  // args = ["Is", "this", "the", "real", "life?"]
 
  const command = message.content;
  
  // Let's go with a few common example commands! Feel free to delete or change those.
  
  if(command === "ping") {
    // Calculates ping between sending a message and editing it, giving a nice round-trip latency.
    // The second ping is an average latency between the bot and the websocket server (one-way, not round-trip)
    const m = await message.channel.send("Ping?");
    m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
  }
  
if (command === "despacito") {
	message.channel.send("*despacito time*");
        var VC = message.member.voiceChannel;
        if (!VC)
            return message.reply("CHUJU IDZ NA GLOSOWY")
    VC.join()
        .then(connection => {
            const dispatcher = connection.playFile('./audiofile.mp3');
            dispatcher.on("end", end => {VC.leave()});
        })
        .catch(console.error);
};
if (command === "dość") {
	message.channel.send("ok ok ,już")
			   var VC = message.member.voiceChannel;
			   VC.leave();
		}
  
  if(command == "hits blunt") {
	  message.channel.send("D");
  }
   if(command == "armin"){
	  message.channel.send("taka slaba podruba frugosa");
  }
   if(command == "injects heroin"){
	  message.channel.send("gamer time");
	  message.channel.send(":sunglasses:");
  }
   if(command == "czat spam jd"){
	  message.channel.send("jd");
	   message.channel.send("jd");
	    message.channel.send("jd");
		 message.channel.send("jd");
		  message.channel.send("jd");
  }
  if(message.content.includes("mój")){
	  message.reply("nasz*");
  }
   if(message.content.includes("moją")){
	  message.reply("naszą*");
  }
   if(message.content.includes("moje")){
	  message.reply("nasze*");
  }
   if(message.content.includes("beton")){
	  message.reply("mmmmmmmmmmmmmmm");
  }
   if(command == "twoja stara"){
	  message.channel.send("pijana");
  }
   if(command == "twoj stary"){
	  message.channel.send("pijany");
  }
  
});

client.login(config.token);

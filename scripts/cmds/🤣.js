module.exports = {
    config: {
        name: "🤣",
        version: "1.0",
        author: "🌹 𝐑𝐎𝐍𝐀𝐋𝐃 🌹",
        countDown: 5,
        role: 0,
        shortDescription: "sarcasm",
        longDescription: "sarcasm",
        category: "reply",
    },
onStart: async function(){}, 
onChat: async function({
    event,
    message,
    getLang
}) {
    if (event.body && event.body.toLowerCase() == "🤣") return message.reply("💬faut pas trop rire mec une mouche pourrais rentrer dans ta bouche 🤣");
}
};

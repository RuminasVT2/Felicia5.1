let scrap = require("../lib/scraper_pinterest")
let fetch = require('node-fetch')

let handler = async (m, { conn, text, usedPrefix, command }) => {
	scrap.pinterest("jeanne aesthetic","jeanne cute","jeanne fanart", "jeanne wallpaper", "jeanne icon", "jeanne cool", "jeanne manga","jeanne loli","jeanne dark","jeanne").then(a => a[Math.floor(Math.random() * a.length)]).then(b => conn.sendFile(m.chat,b,b,"*Finish Processing, Don't Forget to Follow instagram.com/katyushaclara*",m))
   }
    
handler.help = ['jeanne']
handler.tags = ['anime']
handler.command = /^(jeanne)$/i
handler.limit = true
handler.register = true
module.exports = handler
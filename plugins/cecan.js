let scrap = require("../lib/scraper_pinterest")
let fetch = require('node-fetch')

let handler = async (m, { conn, text, usedPrefix, command }) => {
	scrap.pinterest("cecan","cecan indo", "cewe cantik", "hijab cantik", "korean girl", "remaja cantik", "cewek korea", "cewek jepang").then(a => a[Math.floor(Math.random() * a.length)]).then(b => conn.sendFile(m.chat,b,b,"*Finish Processing, Don't Forget to Follow instagram.com/katyushaclara*",m))
   }
    
handler.help = ['cecan']
handler.tags = ['internet']
handler.command = /^(cecan)$/i
handler.limit = true
handler.register = true
module.exports = handler
let fs = require('fs')
const { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn }) => {
let hallo = fs.readFileSync('./mp3/WhatsApp-Audio-2021-03-03-at-00.32.11.opus') 
conn.sendFile(m.chat, hallo, '', '', m, true)
//conn.sendMessage(m.chat, helloaine, MessageType.audio, {quoted: m, mimetype: 'audio/mp4', ptt:true})
// await conn.sendMessage(m.chat, { audio: { url: helloaine }, mimetype: 'audio/mp4'}, m)
}

handler.customPrefix = /^(bot|felicia|hi|hii|hiii|hi bot|tes|tes|hy|halo|hallo|helo|hello|hy felicia|halo felicia|hallo felicia|helo felicia|hello felicia)$/i
handler.command = new RegExp

handler.limit = false
handler.mods = false 
handler.premium = false
handler.group = false
handler.private = false

module.exports = handler

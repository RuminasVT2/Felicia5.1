// xie hua piao piao batman membuka kulkas dan mngambil semangka lalu memberikan mayo di atas semangka

let fetch = require('node-fetch')
let handler = async(m, { conn }) => {
  let res = await fetch('https://api.waifu.pics/sfw/shinobu')
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.url) throw 'Error!'
  conn.sendFile(m.chat, json.url, '', '*Shinobu*', m)
}
handler.help = ['shinobu']
handler.tags = ['anime']
handler.command = /^shinobu$/i
handler.limit = true
handler.register = true
module.exports = handler,

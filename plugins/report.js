

const { MessageType } = require('@adiwajshing/baileys')

let handler = async(m, { conn, text, usedPrefix, command}) => {
    if (!text) return conn.reply(m.chat, `Silahkan masukan laporan kamu\n\nContoh: ${usedPrefix + command} Lapor pengguna mengirim foto bokep tolong di tindak.`, m)
    if (text > 300) return conn.reply(m.chat, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', m)
    var nomor = m.sender
    const teks1 = `*[ REPORT ]*\nNomor : wa.me/${nomor.split("@s.whatsapp.net")[0]}\n✉️Pesan : ${text}`
    conn.reply('6281347927862@s.whatsapp.net', teks1, m)
    conn.reply(m.chat, '*✔️ Masalah Berhasil Dikirimkan Ke Owner*', m)
}
handler.help = ['report <fitur>']
handler.tags = ['info']
handler.command = /^(report|lpr|lapor)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.limit = false
handler.register = true
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

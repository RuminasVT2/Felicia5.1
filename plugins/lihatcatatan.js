let handler = async(m, {conn, command, usedPrefix, text}) => {
  global.db.data.users[m.sender].catatan = global.db.data.users[m.sender].catatan || []
  let i = 0
  if (global.db.data.users[m.sender].catatan.length == 0) return m.reply('*Kamu Belum Punya Catatan*')
  let txt = '*📒 DAFTAR CATATAN*\n\n'
  for (let ct in global.db.data.users[m.sender].catatan) {
    i += 1
    txt += '[' + i + ']. ' + global.db.data.users[m.sender].catatan[ct].title + '\n'
  }
  txt += `\nPenggunaan: ${usedPrefix}lihatcatatan 1\nHapus Catatan: ${usedPrefix}hapuscatatan 1`
  if (text.length == 0) return m.reply(txt)
  let catatan = global.db.data.users[m.sender].catatan
  let split = text.split('|')
  if (catatan.length == 0) return m.reply('*Kamu Belum Memiliki Catatan*')
  let n = Number(split[0]) - 1

  let isi = global.db.data.users[m.sender].catatan[n] != undefined ? global.db.data.users[m.sender].catatan[n].isi : '*Catatan Tidak Ditemukan*'
conn.reply(m.chat, `${isi}`, m, false, {
    contextInfo: {
      mentionedJid: conn.parseMention(text)
    }
  })
}

handler.help = ['lihatcatatan <title>']
handler.tags = ['catatan']
handler.command = /^lihatcatatan$/i
handler.register = true
module.exports = handler
const { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, usedPrefix, owner }) => { 
    try { 
        let __timers = (new Date - global.db.data.users[m.sender].lastadventure)
        let _timers = (3600000 - __timers) 
        let timers = clockString(_timers)
        if (global.db.data.users[m.sender].health > 79) {
            if (new Date - global.db.data.users[m.sender].lastadventure > 3600000) {
            let armor = global.db.data.users[m.sender].armor
            let rubah = global.db.data.users[m.sender].rubah
            let kuda = global.db.data.users[m.sender].kuda
            let kucing = global.db.data.users[m.sender].kucing
            let serigala = global.db.data.users[m.sender].serigala
            let _health = `${Math.floor(Math.random() * 101)}`.trim()
            let health = (_health * 1)
            let exp = `${Math.floor(Math.random() * 1000)}`.trim() 
            let uang = `${Math.floor(Math.random() * 10000)}`.trim() 
            let _potion = ['1','2','3']
            let potion = _potion[Math.floor(Math.random() * _potion.length)]
            let _sampah = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50']
            let sampah = _sampah[Math.floor(Math.random() * _sampah.length)]
            let _diamond = ['1','2','3','4','5','6','7','8','9','10']
            let diamond = _diamond[Math.floor(Math.random() * _diamond.length)]
            let _common = ['1','2','3']
            let common = _common[Math.floor(Math.random() * _common.length)]
            let _uncommon = ['1','2','1','2']
            let uncommon = _uncommon[Math.floor(Math.random() * _uncommon.length)]
            let _mythic = `${pickRandom(['1','3','1','1','2'])}`
            let mythic = (_mythic * 1)
            let _legendary = `${pickRandom(['1','3','1','1','2'])}`
            let legendary = (_legendary * 1)
            let itemrand = [`*Selamat Anda Mendapatkan Item Rare*\n🎁 ${mythic} Mythic Crate`,`*Selamat Kamu Mendapatkan Item Rare*\n🎁 ${legendary} Legendary Crate`]
            let rendem = itemrand[Math.floor(Math.random() * itemrand.length)]
            let str = `
*「 ADVENTURE 」*\n\n⚔️ Kamu Berpetualang Sampai ${pickRandom(['Kota Rimuru', 'Konoha', 'Isekai', 'Dimensi 2D', 'Bintang Earendel', 'Bintang Sirius', 'Bintang UY Scuti', 'Verse Tensura', 'Verse MGK', 'Verse OPM', 'Verse OP', 'Verse Naruto', 'Verse ', 'Menantang Leviathan', 'Menantang Lucifer', 'Rumah Mantan', '...'])}

Sisa Health ${health * 1}♥️

Adventure Results:
 • Exp ${exp} 
 • Uang ${uang}
 • Tiketcoin 1
 • Sampah ${sampah}${potion == 0 ? '' : '\n • Potion ' + potion + ''}${diamond == 0 ? '' : '\n • Diamond ' + diamond + ''}${common == 0 ? '' : '\n • Common Crate ' + common + ''}${uncommon == 0 ? '' : '\n • Uncommon Crate ' + uncommon + ''}
`.trim()
            
            setTimeout(() => {
                  conn.sendMessage(m.chat, { text: str }, { quoted: m })
                  }, 0)
            setTimeout(() => {
                   conn.reply(m.chat, rendem, m)
                  }, 1000)
					
            global.db.data.users[m.sender].health -= health * 1
            global.db.data.users[m.sender].exp += exp * 1
            global.db.data.users[m.sender].tiketcoin += 1
            global.db.data.users[m.sender].money += uang * 1
            global.db.data.users[m.sender].potion += potion * 1
            global.db.data.users[m.sender].diamond += diamond * 1
            global.db.data.users[m.sender].common += common * 1 
            global.db.data.users[m.sender].uncommon += uncommon * 1
            global.db.data.users[m.sender].sampah += sampah * 1
            global.db.data.users[m.sender].mythic += mythic * 1
            global.db.data.users[m.sender].legendary += legendary * 1
            global.db.data.users[m.sender].lastadventure = new Date * 1
            } else conn.reply(m.chat, `Anda Sudah Berpetualang Dan Kelelahan, Silahkan Tunggu Selama *${timers}*`, m)
        } else conn.reply(m.chat, 'Minimal 80 Health Untuk Bisa Berpetualang, Silahkan Beli Dan Gunakan Potion Untuk Menambah Health Dengan Cara\n\nMembeli\n • *' + usedPrefix + 'shop buy potion jumlah*\nMenggunakan\n • ' + usedPrefix + 'heal', m)
    } catch (e) {
        console.log(e)
        conn.reply(m.chat, 'Error', m)
    }
}

handler.help = ['adventure']
handler.tags = ['rpg']
handler.command = /^(adventure)$/i
handler.group = true
handler.fail = null
handler.register = true
module.exports = handler

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}

function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}

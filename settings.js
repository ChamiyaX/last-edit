const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
    alfa: 'https://chamiyapage.netlify.app/',
}

// Free apikey
global.APIKeys = {
    'https://chamiyapage.netlify.app/': 'TechnyQueen',
}

// setting 
global.autoread = false // auto read pesan / message
global.autorecording = true //status auto merekam ( auto record )
global.autoketik = false //status auto mengetik (auto typing)
global.available = true //status online (online)

// Other
global.botname = "Techny Queen"
global.ownername = "Techny Queen"
global.myweb = "https://chamiyapage.netlify.app/"
global.youtube = "එහෙම එකක් නැනෙ😁"
global.github = "https://github.com/ChamiyaX"
global.email = "rmcgimhan@gmail.com" //bebas
global.region = "Sri Lanka💨" //bebas
global.ownernomer = "94767184785" // nomor wa kalian
global.ownernomerr = "+94767184785" //nmr wa kalian
global.thumbnail = "./image/lol.jpg" // ini lol.jpg adalah nama foto di folder image. untuk foto bot
global.donasi = "./image/donasi.jpg" // foto donasi di folder image
global.background_welcome = "https://ibb.co/r2p8mcL" // maks size 30kb, agar welcome image nya tdk delay
global.owner = ["94767184785"]
global.packname = 'TechnyQueen'
global.author = 'Chamindu Gimhan'
global.sessionName = 'session'
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

global.prefa = ['', '!', '.', '🐦', '🐤', '🗿']
global.sp = '⭔'
global.mess = {
    sukses: 'Done✅',
    admin: 'This command can only be used by admins 🤨',
    botAdmin: 'This command can only be used when the bot becomes an admin😐',
    owner: 'This command can only be used by the owner (chamiya)',
    group: 'This command can only be used in groups !',
    private: 'This command can only be used in private!',
    bot: 'Bot Number User Special Features',
    errtoimg: 'Sorry Currently Not Support Gif Sticker!',
    wait: 'පොඩ්ඩක් ඉන්න 🛠',
    lockCmd: 'Feature Not Enabled By Owner! plz contrac bot owner',
    example1: 'Hi Datang @user Di Group @subject Jangan Lupa Baca Rules @desc\n\nNote :\n1. @user (Mention User Join)\n2. @bio (Get Bio User Join)\n3. @tanggal (Date Now)\n4. @desc (Get Description Group)\n5. @subject (Group Name)'
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
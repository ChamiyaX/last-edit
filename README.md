
## Heroku Buildpack
```bash
heroku/nodejs
https://github.com/jonathanong/heroku-buildpack-ffmpeg-latest
https://github.com/clhuang/heroku-buildpack-webp-binaries.git
```
## For Termux
```ts
termux-setup-storage
apt update && apt upgrade
pkg install nodejs git ffmpeg libwebp imagemagick
git clone https://github.com/zeeone-ofc/Alphabot-Md.git
cd Alphabot-Md
pkg install yarn
yarn install
npm i -g typescript
tsc -p ./node_modules/@adiwajshing/baileys-md/
rm -rf session.json
rm -rf store.json
npm start
```

## Edit file
`./settings.js`
```ts
global.autoread = false // auto read pesan / message
global.autorecording = true //status auto merekam ( auto record )
global.autoketik = false //status auto mengetik (auto typing)
global.available = false //status online (online)


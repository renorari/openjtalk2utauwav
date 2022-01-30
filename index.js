/*
    OpenJTalk to UTAU wav
    by Renorari
    (c) 2022 Renorari
*/

const fs = require("fs");
const child_process = require("child_process");
const oto_list = fs.readdirSync("C:/Program Files (x86)/UTAU/voice/uta").filter((filename) => filename.endsWith(".wav"));

oto_list.forEach((oto, index) => {
    console.log(`processing: ${Math.floor(index / oto_list.length * 100)}% ${oto}`);
    child_process.execSync(`echo ${JSON.stringify(oto.replace(/.wav/, "") + "ー")} | open_jtalk -x C:/open_jtalk/dic -m voice.htsvoice -ow wav/${oto}`);
});
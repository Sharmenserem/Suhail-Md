const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_18_23_08_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICA1MCxcbiAgICAgICAgMTExLFxuICAgICAgICAyMjMsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTI4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDMzLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMDcsXG4gICAgICAgIDM5LFxuICAgICAgICA4MCxcbiAgICAgICAgMTksXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjI0LFxuICAgICAgICA2NSxcbiAgICAgICAgMTM2LFxuICAgICAgICA0NyxcbiAgICAgICAgMjQzLFxuICAgICAgICAzNCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDcyLFxuICAgICAgICA4MixcbiAgICAgICAgMjI2LFxuICAgICAgICAxNyxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMjcsXG4gICAgICAgIDIxNixcbiAgICAgICAgODlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDM5LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgOCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTYwLFxuICAgICAgICAxNixcbiAgICAgICAgMTEzLFxuICAgICAgICAyMjgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDEwLFxuICAgICAgICAzNixcbiAgICAgICAgMTk3LFxuICAgICAgICA5NixcbiAgICAgICAgMTc3LFxuICAgICAgICAzLFxuICAgICAgICA1LFxuICAgICAgICA5MSxcbiAgICAgICAgMTgxLFxuICAgICAgICAyNixcbiAgICAgICAgNjRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NCxcbiAgICAgICAgODksXG4gICAgICAgIDIxMixcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgODgsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMzYsXG4gICAgICAgIDc0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDQyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMzksXG4gICAgICAgIDYxLFxuICAgICAgICAxMjksXG4gICAgICAgIDEzNSxcbiAgICAgICAgNzgsXG4gICAgICAgIDk0LFxuICAgICAgICA4MyxcbiAgICAgICAgMixcbiAgICAgICAgNTEsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTMwLFxuICAgICAgICA0MixcbiAgICAgICAgMTMxLFxuICAgICAgICA2OCxcbiAgICAgICAgOTMsXG4gICAgICAgIDc1LFxuICAgICAgICAxMDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICA3NixcbiAgICAgICAgMTg1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTE2LFxuICAgICAgICA5MyxcbiAgICAgICAgMTE5LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNDIsXG4gICAgICAgIDAsXG4gICAgICAgIDgzLFxuICAgICAgICAxOTgsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgODksXG4gICAgICAgIDIxMixcbiAgICAgICAgNjUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTA1LFxuICAgICAgICA4MyxcbiAgICAgICAgMjI0LFxuICAgICAgICA1NSxcbiAgICAgICAgMTk0LFxuICAgICAgICAzOSxcbiAgICAgICAgNzUsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjMxLFxuICAgICAgICAxOTMsXG4gICAgICAgIDQ1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTIsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjExLFxuICAgICAgICAxODQsXG4gICAgICAgIDk5LFxuICAgICAgICA3NSxcbiAgICAgICAgMTI4LFxuICAgICAgICA0MCxcbiAgICAgICAgMTAsXG4gICAgICAgIDYwLFxuICAgICAgICAxOSxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDcyLFxuICAgICAgICAzNixcbiAgICAgICAgOTMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNzcsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMjIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNjgsXG4gICAgICAgIDkxLFxuICAgICAgICAyNTEsXG4gICAgICAgIDEsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTE5LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMyxcbiAgICAgICAgMTExXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0LFxuICAgICAgICAxNDYsXG4gICAgICAgIDQ3LFxuICAgICAgICAzMCxcbiAgICAgICAgNCxcbiAgICAgICAgMTgzLFxuICAgICAgICA0MixcbiAgICAgICAgMjksXG4gICAgICAgIDIzMixcbiAgICAgICAgNTIsXG4gICAgICAgIDI4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMTksXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTc2LFxuICAgICAgICA4MyxcbiAgICAgICAgMTEyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDY3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDgwLFxuICAgICAgICAxMDEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgOTQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTcsXG4gICAgICAgIDQxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxMDlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTA2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjIzLFxuICAgICAgICAxNDYsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjMzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjMsXG4gICAgICAgIDM1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjEsXG4gICAgICAgIDk3LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjM5LFxuICAgICAgICA0NCxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDcyLFxuICAgICAgICA1NyxcbiAgICAgICAgMjEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNDYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNzcsXG4gICAgICAgIDM4LFxuICAgICAgICAxODksXG4gICAgICAgIDEyNixcbiAgICAgICAgMjI3LFxuICAgICAgICAyMDcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAzNyxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNjIsXG4gICAgICAgIDIyMixcbiAgICAgICAgNzAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTYzLFxuICAgICAgICAzNixcbiAgICAgICAgMTgxLFxuICAgICAgICA2MSxcbiAgICAgICAgMTM5XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNTksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiYlpnSGtSdUtkMG1tVnRhUnN4QUJLVTlBWmJCbnU4dzZ6QUxwV0xtVFlTMD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiWUZtWEJCclVUZmVGT01EWFJUVlFzZ1wiLFxuICBcInBob25lSWRcIjogXCJjZTg0MDdhNS1lZWUzLTQ3MWEtYWYxMi1mZjBmMDZkMmVjN2FcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTExLFxuICAgICAgMTg2LFxuICAgICAgMjQsXG4gICAgICAxNDksXG4gICAgICA1OSxcbiAgICAgIDExOSxcbiAgICAgIDE3OCxcbiAgICAgIDE2LFxuICAgICAgMTA3LFxuICAgICAgMTQ2LFxuICAgICAgMTI2LFxuICAgICAgMjI3LFxuICAgICAgMjQ1LFxuICAgICAgMTIzLFxuICAgICAgNTksXG4gICAgICAxMzcsXG4gICAgICA4OSxcbiAgICAgIDI1LFxuICAgICAgMjMyLFxuICAgICAgNDhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNDgsXG4gICAgICAxOSxcbiAgICAgIDQsXG4gICAgICAyMjcsXG4gICAgICAyMzIsXG4gICAgICA3MyxcbiAgICAgIDE4LFxuICAgICAgMTksXG4gICAgICA2OCxcbiAgICAgIDEyNyxcbiAgICAgIDE0MCxcbiAgICAgIDIwNSxcbiAgICAgIDExMixcbiAgICAgIDczLFxuICAgICAgODgsXG4gICAgICA3MixcbiAgICAgIDkyLFxuICAgICAgMTcsXG4gICAgICAxMTUsXG4gICAgICA3NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJDOVhHVkpFV1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU0NzA0MzIyNDM0OjI1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNzY5MTAxODk0OTg0MjY6MjVAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSXlDckpzQ0VKL1V5YlVHR0FNZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJzTVY5a2xIeWpyZnZ3Z1Vsd3NkNmRPakUzU3JidE1aeXZjQjUvS0dmL1VNPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjlLZzd1dTlwQkovVkwvRFhWU2VIVENPUmdxMW1CWTVPaGJ2cUxpM0RWTjZZei9mRk5aWUQ2bE1ZMWQxYXVYcCtFaUZkQ0dNa1FqU2V5a2NSVXVEd0FRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInBiUE5PbHc1ZzBaM0JUL1JaL0JXR0x6VmRoc1I4YVlhSnAyV3dLMGxMbWttbUY0QmpyUnowb1FsakRaL0U4bmtYdWFacndONjBSeVZteWYwcTg5WGh3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NDcwNDMyMjQzNDoyNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgNjdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjk2ODYxMyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUd0RFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBR3RELmpzb24iOiAie1wia2V5RGF0YVwiOlwia1dXVllEclhjZlV2VmgvUnJhNXA3Qlozc1hBYnl0MkROVUtTSlFlY21ORT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo1OTQyMTUxNzksXCJjdXJyZW50SW5kZXhcIjozLFwiZGV2aWNlSW5kZXhlc1wiOlswLDEsM119LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",

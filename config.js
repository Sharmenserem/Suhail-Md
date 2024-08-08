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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_38_08_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAyMzEsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjEsXG4gICAgICAgIDg1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTksXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTUwLFxuICAgICAgICA2MyxcbiAgICAgICAgMTczLFxuICAgICAgICAyNTAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNTMsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjIwLFxuICAgICAgICAzOSxcbiAgICAgICAgMjAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjQsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNTgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTQ4LFxuICAgICAgICA5MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMDQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMjksXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNzksXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjEsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTM4LFxuICAgICAgICA5MyxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMDUsXG4gICAgICAgIDc1LFxuICAgICAgICAxNDksXG4gICAgICAgIDExNyxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjEwLFxuICAgICAgICA4MyxcbiAgICAgICAgNjAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNTcsXG4gICAgICAgIDEzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDAsXG4gICAgICAgIDc0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDUzLFxuICAgICAgICA5NSxcbiAgICAgICAgMixcbiAgICAgICAgNSxcbiAgICAgICAgMjM3LFxuICAgICAgICAyNDEsXG4gICAgICAgIDYsXG4gICAgICAgIDEzNSxcbiAgICAgICAgOTQsXG4gICAgICAgIDUwLFxuICAgICAgICA3MyxcbiAgICAgICAgNSxcbiAgICAgICAgMjQxLFxuICAgICAgICA3NCxcbiAgICAgICAgNDcsXG4gICAgICAgIDExNCxcbiAgICAgICAgNDcsXG4gICAgICAgIDIxMyxcbiAgICAgICAgOTYsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTUsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjI3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTc3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgODRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAyMzMsXG4gICAgICAgIDUyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMTksXG4gICAgICAgIDYwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTQyLFxuICAgICAgICAyMTQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTE4LFxuICAgICAgICA3MyxcbiAgICAgICAgMTEwLFxuICAgICAgICA0OCxcbiAgICAgICAgNjMsXG4gICAgICAgIDIwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTUsXG4gICAgICAgIDYxLFxuICAgICAgICAxMjgsXG4gICAgICAgIDM1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTg2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMDRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDAsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTE0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNSxcbiAgICAgICAgOTcsXG4gICAgICAgIDc0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTQxLFxuICAgICAgICAxLFxuICAgICAgICAyMTksXG4gICAgICAgIDk0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTIzLFxuICAgICAgICA3NixcbiAgICAgICAgMTI2LFxuICAgICAgICAxODAsXG4gICAgICAgIDM5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTc3LFxuICAgICAgICA5NSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNCxcbiAgICAgICAgMzcsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMzgsXG4gICAgICAgIDEwMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzgsXG4gICAgICAgIDEzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDIxNixcbiAgICAgICAgNTcsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNjksXG4gICAgICAgIDg2LFxuICAgICAgICA4MSxcbiAgICAgICAgMzYsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTYsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjE0LFxuICAgICAgICAzOSxcbiAgICAgICAgMTU2LFxuICAgICAgICA3LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNzgsXG4gICAgICAgIDVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA4MVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ5LFxuICAgICAgICA1NyxcbiAgICAgICAgMTE3LFxuICAgICAgICAzMCxcbiAgICAgICAgNDUsXG4gICAgICAgIDU4LFxuICAgICAgICAxODYsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTExLFxuICAgICAgICA5NCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNDMsXG4gICAgICAgIDQ0LFxuICAgICAgICAxODksXG4gICAgICAgIDU4LFxuICAgICAgICAxOTEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTAsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjUxLFxuICAgICAgICAyNDQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgOTIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjUxLFxuICAgICAgICA1OCxcbiAgICAgICAgODYsXG4gICAgICAgIDMxLFxuICAgICAgICAyNTMsXG4gICAgICAgIDQ5LFxuICAgICAgICAxODgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMzYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjQzLFxuICAgICAgICAyNTEsXG4gICAgICAgIDMyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNTgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMSxcbiAgICAgICAgNjMsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDgxLFxuICAgICAgICAzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJoUHI5ak1YaCtTZ2NoRFNkZ3d4RzNCK0s4UFk3YVJrdTFFdC9Xd013Skl3PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCIzX19lVWd3NFFSR3BsNWFlNUVwNzdRXCIsXG4gIFwicGhvbmVJZFwiOiBcImYxN2Y0NDlkLWIzMGYtNDhkZS05Y2U3LWFiZmFhZTVlOWZhNlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNSxcbiAgICAgIDIzNyxcbiAgICAgIDEyOCxcbiAgICAgIDI0MixcbiAgICAgIDE0MCxcbiAgICAgIDUsXG4gICAgICAxOTQsXG4gICAgICAxNzIsXG4gICAgICA1MixcbiAgICAgIDE1NixcbiAgICAgIDIzNyxcbiAgICAgIDE2LFxuICAgICAgNzYsXG4gICAgICAyMzQsXG4gICAgICA5MyxcbiAgICAgIDU1LFxuICAgICAgMTg5LFxuICAgICAgNjksXG4gICAgICAxMjMsXG4gICAgICAxNTdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjI5LFxuICAgICAgMTA5LFxuICAgICAgMTgzLFxuICAgICAgNzIsXG4gICAgICAyMTMsXG4gICAgICAyMTcsXG4gICAgICAzMyxcbiAgICAgIDU3LFxuICAgICAgMTE3LFxuICAgICAgMTk3LFxuICAgICAgMTkwLFxuICAgICAgMTQ0LFxuICAgICAgMTE1LFxuICAgICAgMjEwLFxuICAgICAgMjE1LFxuICAgICAgMTYzLFxuICAgICAgMjE3LFxuICAgICAgMTMyLFxuICAgICAgMTc5LFxuICAgICAgNzJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiWTYxTEhFMTdcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NDcwNDMyMjQzNDoyOEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTc2OTEwMTg5NDk4NDI2OjI4QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0l5Q3JKc0NFUHZvMDdVR0dBWWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwic01WOWtsSHlqcmZ2d2dVbHdzZDZkT2pFM1NyYnRNWnl2Y0I1L0tHZi9VTT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJXTVJsbzM5VXpMUEYwTWQxYjFmRUJNcXBWRkprdkh5K2xCcnYrMDV2alNhUzZRL2xBdnNHL3ZsSGtUWkFLVGhqM0l0MVIxRGE0WHdDVHliajRkWURBdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCIvZEhUNUR4R0cyMVhScmpUOHN2cDZSNmNPN1pkOWpiNjFQRUJwc3dhbUFqbEZKdXphRmVSVkZNempMWDhMVkFrMHcyWFNJcGFmQzNkK2xobC9yM3hDQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTQ3MDQzMjI0MzQ6MjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDY3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjMxMzUxMDQsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFHdERcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUd0RC5qc29uIjogIntcImtleURhdGFcIjpcImtXV1ZZRHJYY2ZVdlZoL1JyYTVwN0JaM3NYQWJ5dDJETlVLU0pRZWNtTkU9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NTk0MjE1MTc5LFwiY3VycmVudEluZGV4XCI6MyxcImRldmljZUluZGV4ZXNcIjpbMCwxLDNdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


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

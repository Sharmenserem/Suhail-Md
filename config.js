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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_19_48_08_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAxOCxcbiAgICAgICAgMTg3LFxuICAgICAgICA2OCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMTMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNDgsXG4gICAgICAgIDMyLFxuICAgICAgICAxMixcbiAgICAgICAgMjE1LFxuICAgICAgICA5MyxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNDcsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTg0LFxuICAgICAgICA0OCxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMzEsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMzMsXG4gICAgICAgIDcwLFxuICAgICAgICAyMjksXG4gICAgICAgIDE1NSxcbiAgICAgICAgMyxcbiAgICAgICAgODJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjExLFxuICAgICAgICAyNTEsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDYwLFxuICAgICAgICA3MCxcbiAgICAgICAgMTczLFxuICAgICAgICAzMCxcbiAgICAgICAgODMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgODcsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMTEsXG4gICAgICAgIDU0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNzQsXG4gICAgICAgIDkxLFxuICAgICAgICAzNixcbiAgICAgICAgMjAzLFxuICAgICAgICA1NSxcbiAgICAgICAgMjYsXG4gICAgICAgIDcyLFxuICAgICAgICAxNTksXG4gICAgICAgIDE2NixcbiAgICAgICAgMjAyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjI5LFxuICAgICAgICA5N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTIzLFxuICAgICAgICAzOCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDgyLFxuICAgICAgICAxODksXG4gICAgICAgIDE3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIxOCxcbiAgICAgICAgOTQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTc5LFxuICAgICAgICA0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjUzLFxuICAgICAgICAyNDIsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNSxcbiAgICAgICAgNzQsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTE2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjU0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDkzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE2MixcbiAgICAgICAgOTYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTg1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDQzLFxuICAgICAgICAyMCxcbiAgICAgICAgMjA2LFxuICAgICAgICAzMSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMTksXG4gICAgICAgIDQ2LFxuICAgICAgICA5OSxcbiAgICAgICAgMTc5LFxuICAgICAgICA2NyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAzLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDAsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTk3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTgzLFxuICAgICAgICAyOCxcbiAgICAgICAgMTk3LFxuICAgICAgICA5LFxuICAgICAgICAyMSxcbiAgICAgICAgNTYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNjUsXG4gICAgICAgIDEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjE5LFxuICAgICAgICA5MyxcbiAgICAgICAgMTAwLFxuICAgICAgICA4LFxuICAgICAgICAxMjQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU2LFxuICAgICAgICAxOTMsXG4gICAgICAgIDcwLFxuICAgICAgICAxNjksXG4gICAgICAgIDYxLFxuICAgICAgICA1NSxcbiAgICAgICAgMTkzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgOTAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjEsXG4gICAgICAgIDQ3LFxuICAgICAgICAyOSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDMwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNTQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjAwLFxuICAgICAgICA2NyxcbiAgICAgICAgMzUsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNyxcbiAgICAgICAgMjUwLFxuICAgICAgICA0MyxcbiAgICAgICAgOSxcbiAgICAgICAgNTJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA3NFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTIwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjEzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDkxLFxuICAgICAgICAzMCxcbiAgICAgICAgNTAsXG4gICAgICAgIDQ0LFxuICAgICAgICAzMixcbiAgICAgICAgNjIsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMixcbiAgICAgICAgOTQsXG4gICAgICAgIDEyNSxcbiAgICAgICAgOTcsXG4gICAgICAgIDk5LFxuICAgICAgICA2NSxcbiAgICAgICAgNTcsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjEyLFxuICAgICAgICA3LFxuICAgICAgICA1OSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMjYsXG4gICAgICAgIDM1LFxuICAgICAgICAzOCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNzksXG4gICAgICAgIDU3LFxuICAgICAgICA1OSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNTcsXG4gICAgICAgIDQ2LFxuICAgICAgICA3MCxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE2NixcbiAgICAgICAgNzgsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjAxLFxuICAgICAgICAyMzksXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjE0LFxuICAgICAgICAyNDksXG4gICAgICAgIDEyNyxcbiAgICAgICAgMzcsXG4gICAgICAgIDgzLFxuICAgICAgICAxNDgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTY3LFxuICAgICAgICA4NCxcbiAgICAgICAgNzEsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjUxLFxuICAgICAgICAyMTMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMzFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI0NSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIrZVhPbFYrcmZrSWMyNjRYM25kMG5hNXFMa1BXdXZ5UXhIUVl6SjZLdFZZPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJiR05JdVFzelIyaTBBUUhJTEllQjhnXCIsXG4gIFwicGhvbmVJZFwiOiBcImFhN2I5ZGUzLWEzMDQtNGQwMy05ZTExLWNiZjMzZGM0YWZkMFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMDgsXG4gICAgICA5OCxcbiAgICAgIDMsXG4gICAgICAxNTEsXG4gICAgICAxMixcbiAgICAgIDMsXG4gICAgICAxNjcsXG4gICAgICAxMTMsXG4gICAgICAxNzEsXG4gICAgICAxNTYsXG4gICAgICA2OCxcbiAgICAgIDk0LFxuICAgICAgMTA0LFxuICAgICAgNDAsXG4gICAgICA1MixcbiAgICAgIDIyNyxcbiAgICAgIDkxLFxuICAgICAgOTEsXG4gICAgICAxNDksXG4gICAgICAxNzlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgOTcsXG4gICAgICAyMjIsXG4gICAgICAzNCxcbiAgICAgIDksXG4gICAgICAxMDUsXG4gICAgICAxNTgsXG4gICAgICA5MyxcbiAgICAgIDE2LFxuICAgICAgMTg1LFxuICAgICAgMjA0LFxuICAgICAgMjExLFxuICAgICAgMTM3LFxuICAgICAgMCxcbiAgICAgIDYxLFxuICAgICAgMTUxLFxuICAgICAgMTU4LFxuICAgICAgOTQsXG4gICAgICAzMyxcbiAgICAgIDY4LFxuICAgICAgMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJQS1Q0Qzg5M1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU0NzA0MzIyNDM0OjI5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNzY5MTAxODk0OTg0MjY6MjlAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSXlDckpzQ0VKTEMxTFVHR0FjZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJzTVY5a2xIeWpyZnZ3Z1Vsd3NkNmRPakUzU3JidE1aeXZjQjUvS0dmL1VNPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjcxRWV2RjF0M3p4R3M1QTV2SGxqMlZPcUVTQ3RPdmxGM1IyK1ZsbWp5emQ0bG15dTZKQjg3STRDeW5BWGZCSW5YNE1JcGJzMGh0aTJqVlBJNERENkNnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkVrRXZ3YnlzR1kvUjJqb3lIbFBzUm1JU09hYzYyV3E2cHNVWGxLSThWK1l3cHRPRFgrMmh1YUl2aGVqNm93eHFYMnpOSXVteHR1WmRYTG45cjJQL2hBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NDcwNDMyMjQzNDoyOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgNjdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMzE0NjUxOCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUd0RFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBR3RELmpzb24iOiAie1wia2V5RGF0YVwiOlwia1dXVllEclhjZlV2VmgvUnJhNXA3Qlozc1hBYnl0MkROVUtTSlFlY21ORT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo1OTQyMTUxNzksXCJjdXJyZW50SW5kZXhcIjozLFwiZGV2aWNlSW5kZXhlc1wiOlswLDEsM119LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


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

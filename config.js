//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "daloa, côte d'ivoire";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Daloa";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "";
global.website = process.env.GURL || "";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.imgur.com/2Z6rFYo.gif";
global.devs = "2250150095961";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "2250575324586";"2250150095961"
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT01QVFJzZVc1UnJJZ3pIZW5teUpIdm1zOFpPaUdyeGhCdEhMNFlEL2IyMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaWQwRExuVjJ6YkgrNlo0elhqc0d3UXFQTENpZkdDVXFkYWlvYlZvdWNtND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2R0JVQmg4NEV0VjZJM0pVQ05HWlRJRndEa29NaDFJS29MM2JxYmE0dmw4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI5SkErK2wyNTZheHNCY3ZsSVRnckl0VlBWQ3NHTEZMRy95ZkNkQjczTWhRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNKNWNMWFFjOVpIVnhvNGJpeTJVa1k4U0lMSnJ5dVM3TnJ1K3dTY2tMMlE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkliQTN6a0JCeUFlbjRCUnNxV2phWUN1a2tuU2J5MlREN25WdVdZaHdBVk09In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibUlNcDd1YThyQytnVXhDY0Y3d2tNeDZxUlpVazU5V1FjSWhmZ0g2VTFrbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiM1RjVWk4WVhHMWFOTUtoWGlmQzBxQXdQRm8vZk4zQXVQazVGbjhqdmZUbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Inp2czhkVUhLUGx6bVdsT1NFbS9JY2dVTXV4c0hIeWhxeTBZL0V2QXNOM2p0YWZwK1lKUDBaWmFpSVcwMlFnYWpnR0hDcXBiWnlzM2pGdE4vcXQ3QUJnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTk3LCJhZHZTZWNyZXRLZXkiOiJoSnNtVkZTam0xeW1BOWMzRWo1TlcwT0pXajJsdi9jTHBGdjI3UlY5ODVZPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJJenMyTmlvaVJPTzRyUVVnWGVTTExBIiwicGhvbmVJZCI6Ijk3YjFkZjhjLTE0MDgtNDg3Ny05ZjMwLTEwMTk1MzQ1NGU5OSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ6bU9aWXNLazNSdEM4aE0weFE2bVhjZGJxL0E9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRW9VZlQ5cFduWFEyRDR4STJ6VkRZeEdLVzE0PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlgxSzJCOEM2IiwibWUiOnsiaWQiOiIyMjU3MzA3NDQzMDoyQHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNKR2hoY2NERU55bzZyUUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJOV01qNXZEa2JIWW1WV2JYMlI2MWRxbWdLbnEwMnNISVhjeWI1ckQ4djBNPSIsImFjY291bnRTaWduYXR1cmUiOiJxTElCUUszVTBjVE5YL2lGc0xqb3VXT0M4WFVKcTk5TmNhWG8vcDdlaGF6VVAzNUlJaVVNNnF6TU1HK0MrK1krZ1p6Nll4QmxGMktpaDZoNFE3bHBCdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiYzloa0hQeWg1N1NoUjZLZGhmUXlHMlVJKzZmeXEyM29Hd2oxc2FLVlFvMHFZVEJVeEdpeGNzbTFrczd0dXJ5d2I2R2ZRZEZ0T0s2RjRnNFRKODRQQ1E9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMjU3MzA3NDQzMDoyQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlRWakkrYnc1R3gySmxWbTE5a2V0WGFwb0NwNnROckJ5RjNNbSthdy9MOUQifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjE0MDY1NzN9"
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || "✓",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`𝐒𝐀𝐒𝐔𝐊𝐄_𝐔𝐂𝐇𝐈𝐖𝐀-𝐕2™`",
  author: process.env.PACK_AUTHER || "𝐒𝐀𝐒𝐔𝐊𝐄_𝐔𝐂𝐇𝐈𝐖𝐀-𝐕2",
  packname: process.env.PACK_NAME || "𝐒𝐀𝐒𝐔𝐊𝐄",
  botname: process.env.BOT_NAME || "𝐒𝐀𝐒𝐔𝐊𝐄_𝐔𝐂𝐇𝐈𝐖𝐀-𝐕2",
  ownername: process.env.OWNER_NAME || "𝐂𝐈𝐃_𝐊𝐀𝐆𝐄𝐍𝐎",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-X00anFgosmRhhWP75khXT3BlbkFJlyo7xhWoWhz9Sdoap9Hv",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});

//-------------------[ BOT SETTINGS ]------------------//

// @project_name : NEGO-TECH
// @author : Nego
// @contact : (optional)

//----------------------[ BOT CONFIG ]----------------------//

const fs = require('fs')
const { color } = require('./nego/color')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })

// Set this to true to remove all built-in branding defaults
const forgetBranding = process.env.FORGET_BRANDING === 'true'


//--------------------[ SESSION ID ]----------------------//

// Enter your session id here; it may vary depending on the provider.
global.SESSION_ID = process.env.SESSION_ID || ''

//--------------------[ BOT NAME ]----------------------//

global.botname = process.env.BOT_NAME || 'NEGO-TECH'

//-----------------[ OWNER NUMBER ]------------------//

global.ownernumber = process.env.OWNER_NUMBER || '255628294159'

//--------------------[ SUDO ]--------------------------//

global.sudo = process.env.SUDO ? process.env.SUDO.split(',') : [];
// Type additional allowed users here
//NB: They'll be able to use every functions of the bot without restrictions.

//-----------------[ OWNER NAME ]------------------//

global.ownername = process.env.OWNER_NAME || 'Nego'

//------------[ STICKER PACKNAME ]-----------------//

global.packname = process.env.STICKER_PACK_NAME || (forgetBranding ? "NEGO" : "NEGO-TECH")

//--------------[ COUNTRY TIMEZONE ]------------//


global.timezones = process.env.TIMEZONE || 'Africa/Dar_es_Salaam'  // Set this to your timezone (Morogoro/Tanzania)



//--------------[ STICKER AUTHOR NAME ]------------//

global.author = process.env.STICKER_AUTHOR_NAME || (forgetBranding ? "Nego" : "NEGO")

//----------------[ GITHUB DATABASE ]-----------------//

global.dbToken = process.env.GITHUB_TOKEN || "";


//-----------------[ CONTEXT LINK ]--------------------//

global.plink = process.env.PLINK || (forgetBranding ? "https://example.com" : "https://example.com")

//------------------[ WATERMARK ]--------------------//

global.wm = process.env.GL_WM || (forgetBranding ? "> ©Nego" : "> ©NEGO-TECH")

//-----------------[ OWNER AVAILABILITY ]----------------//

// If true, the bot will treat owner actions as valid even if the owner is offline.
// This is a configuration flag only; actual enforcement depends on bot logic.
global.ownerOfflineAllowed = true

//-----------------[ WARNING CONFIG ]------------------//

// How many warnings before a user is considered punished / kicked.
// This value can be used by the warning system in bot logic.
global.warningLimit = 3

global.warnings = {} // (optional) in-memory warning count storage

//---------------------[ REPLIES ]-----------------------//

global.mess = { 
  done: '*Done*', 
  success: 'Success', 
  owner: `*You don't have permission to use this command!*`, 
  group: '*This feature becomes available when you use it in a group!*', 
  admin: '*You’ll unlock this feature with me as an admin!*', 
  notadmin: '*This feature will work once you become an admin. A way of ensuring order!*' 
}

//--------------------[ COMMANDS ]---------------------//

// List of supported commands. These are used by the bot command handler.
// Update `commands.js` to add/remove commands.

global.commands = require('./commands')

//--------------------[ WATCHER ]-----------------------//

let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(color(`Updated '${__filename}'`, 'red'))
  delete require.cache[file]
  require(file)
})

//----------------------[ BOT CONFIG ]----------------------//
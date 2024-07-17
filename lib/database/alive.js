let options = {
    temp: {
      type: Object,
      default: {}
    },
    rent: {
      type: Object,
      default: {}
    }
  };
  const mongoose = require("mongoose");
  const Alive = new mongoose.Schema({
    id: {
      type: String,
      unique: true,
      required: true,
      default: "𝐒𝐀𝐒𝐔𝐊𝐄_𝐔𝐂𝐇𝐈𝐖𝐀-𝐕2"
    },
    alive_text: {
      type: String,
      default: "*𝖩𝖤 𝖲𝖴𝖨𝖲 𝖤𝖭 𝖫𝖨𝖦𝖭𝖤 𝖬𝖠𝖨𝖳𝖱𝖤 *"
    },
    alive_get: {
      type: String,
      default: "you did'nt set alive message yet\nType [.alive info] to get alive message information"
    },
    alive_url: {
      type: String,
      default: ""
    },
    alive_image: {
      type: Boolean,
      default: false
    },
    alive_video: {
      type: Boolean,
      default: false
    },
    antiviewonce: {
      type: String,
      default: "false"
    },
    antidelete: {
      type: String,
      default: "false"
    },
    autobio: {
      type: String,
      default: "false"
    },
    levelup: {
      type: String,
      default: "true"
    },
    anticall: {
      type: String,
      default: "false"
    },
    autoreaction: {
      type: String,
      default: "true"
    },
    permit: {
      type: Boolean,
      default: false
    },
    permit_values: {
      type: String,
      default: "all"
    },
    chatbot: {
      type: String,
      default: "false"
    },
    bgm: {
      type: Boolean,
      default: false
    },
    bgmarray: {
      type: Object,
      default: {}
    },
    plugins: {
      type: Object,
      default: {}
    },
    notes: {
      type: Object,
      default: {}
    },
    mention: {
      type: Object,
      default: {}
    },
    filter: {
      type: Object,
      default: {
        asta_: "𝖮𝖴𝖨 𝖬𝖠𝖨𝖳𝖱𝖤 ?"
      }
    },
    afk: {
      type: Object,
      default: {}
    },
    ...options
  });
  const alive = mongoose.model("alive", Alive);
  module.exports = {
    alive: alive
  };

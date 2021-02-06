const Discord = require("discord.js");
const fetch = require("node-fetch");
const client = new Discord.Client();
require("dotenv").config();

const token = process.env.NODE_ENV_TOKEN;

const requestOptions = {
  method: "GET",
};

const url = "https://api.spacexdata.com/v4/launches/next";

const fetchspaceXLaunch = async () => {
  const res = await fetch(url, requestOptions);
  const json = await res.json();
  return json.name;
};

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.on("message", async (msg) => {
  if (msg.content === "-spaceX") {
    const launch = await fetchspaceXLaunch();
    msg.reply(launch);
  }
});

client.login(token);

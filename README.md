<div align="center">

<img src="https://cdn.discordapp.com/avatars/981931735400988702/cc5e6e40c52bb7de459156fd162c9d7a.webp" width="150" height="150">

## HullRS Discord Bot

This bot is a multipurpose discord bot for The Hull Robotics Society Discord server. 

<img src="https://img.shields.io/github/workflow/status/hullcss/hullcss-discord-bot/Publish%20Docker%20image?style=for-the-badge">
<img src="https://img.shields.io/badge/Discord.JS-13.10.2-blue?style=for-the-badge&logo=DISCORD" />
<img src="https://img.shields.io/badge/Node%20Version-16.16.0-brightgreen?style=for-the-badge&logo=Node.js">
<img src="https://img.shields.io/badge/License-MIT-brightgreen?style=for-the-badge">
</div align="center">

---

This bot features multiple command types from:
* Admin
* Embeds
* Fun
* General
* Slash Commands

---
## Installation 
**This is a private bot used for a specific purpose within a specific discord server however if you do want to run the bot for testing purposes or deploy it to a new location. Follow the instructions below.** 

### 🐋 Docker 
Due to the [Publish.yml](.github/workflows/publish.yml) workflow, the newest build will automatically be pushed to DockerHub.

```docker
docker run -d \
--name=hullrs \
-p 6003:6003 \
-e DISCORD_TOKEN='INSERT DISCORD TOKEN' \
-e PREFIX='$' \
--restart unless-stopped \
kieranr27/hurs:main
```
Using a tool like [Ouroboros](https://github.com/pyouroboros/ouroboros), you can automatically update containers without the need for restarts.


### 👷 Manual
- Clone the repo 
- Remove the `.template` from `.env.template`
- Replace `INSERT DISCORD TOKEN` with your Discord token.
- Run `npm i` to install packages
- Run `node .` to run the bot

---
## Contributions
While this bot is maintained by [Kieran](https://github.com/KieranRobson), contributors are welcome! 
- Contribution guidelines are coming soon.
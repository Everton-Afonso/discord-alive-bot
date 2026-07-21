# 🤖 AliveChecker

A Discord bot that automatically sends a daily message at **7:00 AM (America/Sao_Paulo timezone)**, mentions two users, and keeps track of the current day since a configured start date.

## ✨ Features

* ⏰ Sends a message automatically every day at **7:00 AM**.
* 🇧🇷 Uses the `America/Sao_Paulo` timezone.
* 👥 Mentions two Discord users.
* 📅 Automatically calculates the current day based on a configurable start date.
* ☁️ Ready to be deployed on platforms such as Railway or Render.

## Example Message

```text
Day 1 trying to get @ruanpereira and @Rangel Pereira to prove they're still alive 🫡
```

The next day:

```text
Day 2 trying to get @ruanpereira and @Rangel Pereira to prove they're still alive 🫡
```

And so on.

---

# 🚀 Tech Stack

* Node.js
* discord.js
* node-cron
* dotenv

---

# 📦 Installation

Clone the repository:

```bash
git clone https://github.com/YOUR_USERNAME/alive-checker.git
```

Navigate to the project folder:

```bash
cd alive-checker
```

Install the dependencies:

```bash
npm install
```

---

# ⚙️ Configuration

Create a `.env` file in the project root:

```env
DISCORD_TOKEN=YOUR_DISCORD_BOT_TOKEN
CHANNEL_ID=YOUR_CHANNEL_ID
```

## Getting the Bot Token

1. Open the Discord Developer Portal.
2. Create a new application.
3. Go to **Bot**.
4. Click **Reset Token** or **Copy Token**.
5. Copy the token into the `DISCORD_TOKEN` environment variable.

## Getting the Channel ID

Enable **Developer Mode** in Discord:

**Settings → Advanced → Developer Mode**

Then:

* Right-click the channel.
* Select **Copy Channel ID**.

Paste the value into:

```env
CHANNEL_ID=123456789012345678
```

---

# 👥 Changing the Mentioned Users

Update the user IDs in `index.js`:

```javascript
await channel.send(
  `Day ${day} trying to get <@572199307197939742> and <@686698602667573362> to prove they're still alive 🫡`
)
```

To get a user's ID:

1. Enable Developer Mode.
2. Right-click the user.
3. Select **Copy User ID**.

---

# ▶️ Running Locally

```bash
npm start
```

If everything is configured correctly, you should see:

```text
Bot connected as AliveChecker#1344
Daily schedule configured for 07:00 (America/Sao_Paulo)
```

---

# ☁️ Deploying to Railway

1. Push the project to a GitHub repository.
2. Create a new project on Railway.
3. Select **Deploy from GitHub Repo**.
4. Choose your repository.
5. Add the following environment variables:

| Variable        | Description                                       |
| --------------- | ------------------------------------------------- |
| `DISCORD_TOKEN` | Your Discord bot token                            |
| `CHANNEL_ID`    | The ID of the channel where messages will be sent |

Railway will automatically run:

```bash
npm install
npm start
```

---

# 📁 Project Structure

```text
.
├── index.js
├── package.json
├── package-lock.json
├── .gitignore
├── .env
└── README.md
```

---

# 🔒 Security

Your `.env` file contains sensitive information and **should never be committed** to GitHub.

Add the following to your `.gitignore`:

```gitignore
node_modules/
.env
```

---

# 📄 License

This project is licensed under the **MIT License**.

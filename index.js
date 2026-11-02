const TelegramBot = require("node-telegram-bot-api");

const token = process.env.BOT_TOKEN;

if (!token) {
  console.log("BOT_TOKEN is missing");
  process.exit(1);
}

const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(
    msg.chat.id,
    "أهلاً بيك في Qureo JS Assistant 👋\nابعتلي سؤال JavaScript أو كود فيه مشكلة، وهساعدك تفهمه وتحله."
  );
});

bot.on("message", (msg) => {
  const text = msg.text || "";

  if (text.startsWith("/")) return;

  bot.sendMessage(
    msg.chat.id,
    "وصلني سؤالك! ابعت كود JavaScript أو نص التمرين، وهساعدك تفهم المطلوب وتوصل للحل خطوة بخطوة."
  );
});

console.log("Bot is running...");

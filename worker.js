export default {
  async fetch(request, env) {
    if (request.method !== "POST") {
      return new Response("Qureo JS Assistant is running!");
    }

    const update = await request.json();
    const message = update.message;

    if (!message?.text) {
      return new Response("OK");
    }

    const chatId = message.chat.id;
    const text = message.text;

    let reply;

    if (text === "/start") {
      reply = "أهلاً بيك في Qureo JS Assistant 👋\nابعتلي سؤال JavaScript وهساعدك تفهمه وتحله خطوة بخطوة.";
    } else {
      reply = "وصلني سؤالك! 👌\nلسه بنجهز خاصية شرح وحل أسئلة JavaScript. ابعتلي السؤال هنا.";
    }

    await fetch(`https://api.telegram.org/bot${env.BOT_TOKEN}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text: reply
      })
    });

    return new Response("OK");
  }
};

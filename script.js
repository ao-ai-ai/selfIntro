const chat = document.getElementById("chat");
const userInput = document.getElementById("userInput");

function handleQuestion() {
  const question = userInput.value.trim();
  if (!question) return;

  addMessage(question, "user");
  const answer = getAnswer(question);
  addMessage(answer, "bot");
  userInput.value = "";
}

function addMessage(text, sender) {
  const message = document.createElement("div");
  message.className = "message " + sender;
  message.innerText = text;
  chat.appendChild(message);
  chat.scrollTop = chat.scrollHeight;
}

function getAnswer(question) {
  if (question.includes("名前")) {
    return "私は青木宏太朗です。";
  } else if (question.includes("好きなもの")) {
    return "うる星やつらです。";
  } else if (question.includes("出身")) {
    return "栃木県です！";
  } else if (question.includes("第二外国語")) {
    return "中国語です。";  
  } else if (question.includes("行きたい国")) {
    return "韓国です！";
  } else if (question.includes("好きな学食メニュー")) {
    return "さらさらとんちゃ";
  } else {
    return "ごめんなさい、よくわかりません。";
  }
}
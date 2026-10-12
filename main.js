var message = document.getElementById("message")
var userInput = document.getElementById("userInput")

function sendMessage()
{
    var text = userInput.value.trim();
    if(text=="")
        return;

    ShowMessage("You:"+text,"user");
    userInput.value = '';

    setTimeout(function()
        {
            var botReply = gotReply(text.toLowerCase())
            ShowMessage("Bot: "+botReply,"bot")
        },1000)
}

userInput.addEventListener("keypress",function(e)
    {
        if (e.key === 'Enter')
        {
            sendMessage()
        }
    }
)

function ShowMessage(text,type)
{
   var msg = document.createElement("div");
   msg.className = type;
   msg.innerText = text;
   message.appendChild(msg);
   message.scrollTop = message.scrollHeight;
}

function gotReply(msg)
// msg === voiceInput
{
        if (msg.includes("hello") || msg.includes("hi")) return "Hi there! How can I help you?";
        if (msg.includes("your name")) return "I'm your Voice Chatbot.";
        if (msg.includes("how are you")) return "I'm just a bot, but I'm feeling awesome!";
        if (msg.includes("bye")) return "Goodbye! Have a nice day!";
        return "Sorry, I didn't catch that.";
}


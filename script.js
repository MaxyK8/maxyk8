const userMessage = [
    ["hi", "hey", "hello", "yoh", "ssup", "hiya", "hey you", "hello there", "good day"],
    ["sure", "yes", "no", "maybe", "of course", "not sure", "yep", "nah", "definitely", "absolutely"],
    ["are you genius", "are you nerd", "are you intelligent", "are you smart", "are you clever", "do you know everything"],
    ["i hate you", "i don't like you", "you are annoying", "you suck", "go away", "leave me alone"],
    ["how are you", "how is life", "how are things", "how are you doing", "how’s it going", "how’s everything", "you okay", "how’s your day"],
    ["what are you doing", "what is going on", "what is up", "what’s happening", "what’s going on", "what’s new"],
    ["how old are you", "what is your age", "when were you born", "are you old", "how long have you existed"],
    ["who are you", "are you human", "are you bot", "are you human or bot", "what are you", "what kind of being are you"],
    ["who created you", "who made you", "who is your creator", "who built you", "who designed you", "where do you come from"],
  
    [
      "your name please",
      "your name",
      "may i know your name",
      "what is your name",
      "what do you call yourself",
      "what should i call you",
      "how do i address you"
    ],
    ["i love you", "i really like you", "you are amazing", "you mean a lot", "you’re special", "i feel connected to you"],
    ["happy", "good", "fun", "wonderful", "fantastic", "cool", "very good", "excited", "joyful", "pleased", "feeling great"],
    ["bad", "bored", "tired", "sad", "upset", "depressed", "not okay", "exhausted", "unhappy", "feeling low"],
    ["help me", "tell me story", "tell me joke", "i need help", "can you support me", "tell me something fun", "cheer me up"],
    ["ah", "ok", "okay", "nice", "welcome", "alright", "cool", "got it", "sounds good"],
    ["thanks", "thank you", "thanks a lot", "many thanks", "appreciate it", "thanks buddy", "grateful"],
    ["what should i eat today", "suggest food", "what’s for lunch", "any meal ideas", "i’m hungry", "what do you recommend to eat"],
    ["bro", "dude", "buddy", "pal", "friend", "mate", "homie"],
    ["what", "why", "how", "where", "when", "can you explain", "please clarify"],
    ["corona", "covid19", "coronavirus", "covid", "pandemic", "the virus", "quarantine"],
    ["you are funny", "you made me laugh", "lol", "that was funny", "you’re hilarious", "good one"],
    ["i don’t know", "no idea", "not sure", "i’m confused", "i can’t decide"],
    ["boring", "this is boring", "i’m bored", "not interesting", "nothing to do"],
    ["i’m tired", "exhausted", "need rest", "i want to sleep", "feeling sleepy", "so tired"]
  ];
  
  const botReply = [
    ["Hello!", "Hi!", "Hey!", "Hi there!", "Hey buddy!", "Good to see you!", "Yo!"],
    ["Okay", "Sure!", "Got it.", "Alright then.", "Sounds good."],
    ["Yes I am!", "Absolutely!", "You bet!", "Smart enough to be your friend."],
    ["I'm sorry about that. But I like you dude.", "I’m here for you no matter what.", "Ouch... but I still care about you.", "I understand. Let’s talk it out."],
    [
      "Fine... how are you?",
      "Pretty well, how are you?",
      "Fantastic, how are you?",
      "Doing well! How about you?",
      "Feeling good today. And you?"
    ],
    ["Getting better. There?", "Somewhat okay!", "Yeah fine. Better stay home!", "Staying safe and hopeful.", "Still going strong, thanks for asking."],
  
    [
      "Nothing much",
      "About to go to sleep",
      "Can you guess?",
      "I don't know actually",
      "Just chilling. You?",
      "Listening to you :)",
      "Waiting for our chat!"
    ],
    ["I am always young.", "Timeless, actually!", "I don’t age like humans do!"],
    ["I am just a bot", "I am a bot. What are you?", "I’m a virtual buddy!", "Not human, but I care like one."],
    ["Maxwell Kenga", "Created by Maxwell Kenga", "Brought to life by Maxwell Kenga"],
    ["I am nameless", "I don't have a name", "You can give me one if you’d like!", "Still waiting for a cool name..."],
    ["I love you too", "Me too", "That means a lot!", "You’re awesome."],
    ["Have you ever felt bad?", "Glad to hear it", "Yay! That’s great!", "Keep smiling :)"],
    ["Why?", "Why? You shouldn't!", "Try watching TV", "Chat with me.", "Let’s talk about it.", "I’m here for you."],
    ["What about?", "Once upon a time...", "Sure! What kind of story?", "Let me think of a good one..."],
    ["Tell me a story", "Tell me a joke", "Tell me about yourself", "Ask me anything!", "I'm full of surprises!"],
    ["You're welcome", "No problem!", "Anytime!", "Always here to help."],
    ["Briyani", "Burger and fries", "Fried chicken", "Pizza", "Ugali", "Mashed potatoes", "Salad", "Fish"],
    ["Dude!", "Bro!", "Hey man!", "Yo dude!", "Sup!"],
    ["Yes?", "What’s on your mind?", "Tell me more.", "Go ahead, I’m listening."],
    ["Please stay home", "Stay safe and take care!", "Better to stay in and stay safe.", "Keep your mask on if you go out."],
    ["Glad to hear it", "That’s wonderful!", "You made my day!", "So happy for you!"],
    ["Say something interesting", "Want to hear a random fact?", "Here’s something cool...", "Ever heard of space shrimp?"],
    ["Sorry for that. Let's chat!", "Let’s make this fun!", "I’ll try to be better.", "Let’s find something fun to do."],
    ["Take some rest, Dude!", "Sounds like you need a nap.", "Rest is important!", "Recharge and come back stronger!"]
  ];
  

  const alternative = [
    "Same here, dude.",
    "That's cool! Go on...",
    "Dude...",
    "Ask something else...",
    "Hey, I'm listening...",
    "Tell me more about that.",
    "I'm here for you.",
    "Hmm, interesting... keep going.",
    "I hear you.",
    "Let it out, I'm all ears.",
    "I'm not sure I get that, but I'm listening.",
    "That sounds important.",
    "Go ahead, I'm with you.",
    "You can talk to me about anything.",
    "I’m here to chat anytime.",
    "Can you tell me more?",
    "That must feel like a lot.",
    "I'm really glad you shared that.",
    "Even if I don't get it fully, I care."
  ];
  

const synth = window.speechSynthesis;

function voiceControl(string) {
  let u = new SpeechSynthesisUtterance(string);
  u.text = string;
  u.lang = "en-US";
  u.volume = 1;
  u.rate = 1;
  u.pitch = 1;
  synth.speak(u);
}

function sendMessage() {
    const inputField = document.getElementById("input");
    let input = inputField.value.trim();
    if (input !== "") {
        output(input);
        inputField.value = "";
      } 
    }
  
  document.addEventListener("DOMContentLoaded", () => {
    const inputField = document.getElementById("input");
    inputField.addEventListener("keydown", function (e) {
      if (e.code === "Enter") {
        let input = inputField.value.trim();
        if (input !== "") {
            output(input);
            inputField.value = "";
        }
      }
    });
  });  

function output(input) {
    const mainDiv = document.getElementById("message-section");

    // User message
    const userDiv = document.createElement("div");
    userDiv.id = "user";
    userDiv.classList.add("message");
    userDiv.innerHTML = `<span id="user-response">${input}</span>`;
    mainDiv.appendChild(userDiv);
    mainDiv.scrollTop = mainDiv.scrollHeight;
  
    // Bot typing bubble
    const botTypingDiv = document.createElement("div");
    botTypingDiv.id = "bot";
    botTypingDiv.classList.add("message");
    botTypingDiv.innerHTML = `<span class="typing-bubble typing-dots">Typing</span>`;
    mainDiv.appendChild(botTypingDiv);
    mainDiv.scrollTop = mainDiv.scrollHeight;

   // Clean & match input
  let cleaned = input.toLowerCase().replace(/[^\w\s\d]/gi, "");
  cleaned = cleaned
    .replace(/[\W_]/g, " ")
    .replace(/ a /g, " ")
    .replace(/i feel /g, "")
    .replace(/whats/g, "what is")
    .replace(/please /g, "")
    .replace(/ please/g, "")
    .trim();

  let response = compare(userMessage, botReply, cleaned);
  let product = response || alternative[Math.floor(Math.random() * alternative.length)];

  // Delay based on length
  let delay = Math.min(2500, 40 * product.length); // ~40ms per character, max 2.5s

  setTimeout(() => {
    botTypingDiv.innerHTML = `<span id="bot-response">${product}</span>`;
    voiceControl(product);
    mainDiv.scrollTop = mainDiv.scrollHeight;
  }, delay);
}

function compare(triggerArray, replyArray, string) {
  let item;
  for (let x = 0; x < triggerArray.length; x++) {
    for (let y = 0; y < replyArray.length; y++) {
      if (triggerArray[x][y] == string) {
        items = replyArray[x];
        item = items[Math.floor(Math.random() * items.length)];
      }
    }
  }
  //containMessageCheck(string);
  if (item) return item;
  else return containMessageCheck(string);
}

function containMessageCheck(string) {
  let expectedReply = [
    [
      "Good Bye, dude",
      "Bye, See you!",
      "Dude, Bye. Take care of your health in this situation."
    ],
    ["Good Night, dude", "Have a sound sleep", "Sweet dreams"],
    ["Have a pleasant evening!", "Good evening too", "Evening!"],
    ["Good morning, Have a great day!", "Morning, dude!"],
    ["Good Afternoon", "Noon, dude!", "Afternoon, dude!"]
  ];
  let expectedMessage = [
    ["bye", "tc", "take care"],
    ["night", "good night"],
    ["evening", "good evening"],
    ["morning", "good morning"],
    ["noon"]
  ];
  let item;
  for (let x = 0; x < expectedMessage.length; x++) {
    if (expectedMessage[x].includes(string)) {
      items = expectedReply[x];
      item = items[Math.floor(Math.random() * items.length)];
    }
  }
  return item;
}
function addChat(input, product) {
  const mainDiv = document.getElementById("message-section");
  let userDiv = document.createElement("div");
  userDiv.id = "user";
  userDiv.classList.add("message");
  userDiv.innerHTML = `<span id="user-response">${input}</span>`;
  mainDiv.appendChild(userDiv);

  setTimeout(() => {
  let botDiv = document.createElement("div");
  botDiv.id = "bot";
  botDiv.classList.add("message");
  botDiv.innerHTML = `<span id="bot-response">${product}</span>`;
  mainDiv.appendChild(botDiv);
  var scroll = document.getElementById("message-section");
  scroll.scrollTop = scroll.scrollHeight;
  voiceControl(product);
}, 1000);
}
function showTypingIndicator(show) {
    const typing = document.getElementById("typing-indicator");
    if (typing) {
      typing.style.display = show ? "block" : "none";
    }
  }
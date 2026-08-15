
const responses = {
  happy: {
    title: "😄 That's wonderful!",
    text: "Enjoy this positive moment and celebrate the little things.",
    tip: "✨ Keep spreading your positive energy!"
  },
  good: {
    title: "🙂 Glad you're doing good!",
    text: "Keep going at your own pace. Small positive moments matter.",
    tip: "🌷 Take a moment to appreciate yourself today."
  },
  okay: {
    title: "😐 It's okay to feel just okay.",
    text: "You don't have to be happy all the time. Be gentle with yourself.",
    tip: "💜 Do one small thing today that makes you comfortable."
  },
  sad: {
    title: "😔 It's okay to feel sad.",
    text: "Your feelings are valid. You don't have to handle everything alone.",
    tip: "💬 Talk to someone you trust and give yourself time."
  },
  stressed: {
    title: "😰 Take a breath. You've got this.",
    text: "Pause and focus on one small task at a time.",
    tip: "🫁 Try 5 slow breaths, then take a short break."
  },
  angry: {
    title: "😡 It's okay to feel angry.",
    text: "Give yourself a moment before reacting. Step away and breathe.",
    tip: "🌿 Take a short walk or some quiet time."
  }
};

document.querySelectorAll(".mood").forEach(function(button) {
  button.addEventListener("click", function() {
    const mood = this.dataset.mood;
    const data = responses[mood];

    document.getElementById("responseTitle").textContent = data.title;
    document.getElementById("responseText").textContent = data.text;
    document.getElementById("responseTip").textContent = data.tip;

    document.getElementById("response").style.display = "block";
  });
});

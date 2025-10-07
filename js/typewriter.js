document.addEventListener("DOMContentLoaded", () => {
  const textElement = document.getElementById("typewriter-text");
  const container = document.querySelector(".typewriter-container");
  const message = "Hello world!\nWelcome to my website. Click around to learn more about me!";
  const typingDelay = 70; 
  let index = 0;
  let typingTimeout;

  function typeCharacter() {
    if (index <= message.length) {
      textElement.innerHTML = message.substring(0, index) + '<span class="cursor">|</span>';
      index++;
      typingTimeout = setTimeout(typeCharacter, typingDelay);
    }
  }

  function startTyping() {
    clearTimeout(typingTimeout);
    index = 0;
    textElement.innerHTML = "";
    typeCharacter();
  }

  setTimeout(startTyping, 500);

  container.addEventListener("click", startTyping);
});

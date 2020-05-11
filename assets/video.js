window.addEventListener("load", () => {
  const login = document.getElementById("login");
  const loginForm = document.getElementById("login-form");
  const identityField = document.getElementById("identity");
  const chat = document.getElementById("chat");
  const participants = document.getElementById("participants");
  const usernameSpan = document.getElementById("username");
  const roomSpan = document.getElementById("room");

  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const identity = identityField.value;
    login.setAttribute("hidden", "true");
    // Fetch the access token
  });

  function startVideoChat(room, token) {
    // Start video chat and listen to participant connected events
  }

  function participantConnected(participant) {
    // Create new <div> for participant
    const el = document.createElement("div");
    el.setAttribute("id", participant.identity);
    participants.appendChild(el);
    // Find all participant's tracks then listen for further tracks to be published
  }

  function trackPublished(trackPublication, participant) {
    // Get the participant's <div> we created earlier
    const el = document.getElementById(participant.identity);
    // Find out if the track has been subscribed to and add it to the page or
    // listen for the subscription, then add it to the page.
  }

  function participantDisconnected(participant) {
    participant.removeAllListeners();
    const el = document.getElementById(participant.identity);
    el.remove();
  }

  function trackUnpublished(trackPublication) {
    trackPublication.track.detach().forEach(function (mediaElement) {
      mediaElement.remove();
    });
  }

  function tidyUp(room) {
    return function (event) {
      if (event.persisted) {
        return;
      }
      if (room) {
        room.disconnect();
        room = null;
      }
    };
  }
});

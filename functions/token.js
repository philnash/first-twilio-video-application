const AccessToken = Twilio.jwt.AccessToken;
const VideoGrant = AccessToken.VideoGrant;

function normalize(string) {
  return `${string.trim().toLowerCase().replace(/\s+/g, "-")}-${Math.floor(
    Math.random() * 10000
  )}`;
}

exports.handler = async function (context, event, callback) {
  const identity = normalize(event.identity);
  const ROOM = "hello";

  // Fetch or create a room

  // Create an access token

  callback(null, { identity, room: ROOM });
};

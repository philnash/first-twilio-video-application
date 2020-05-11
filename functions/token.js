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
  // Start by creating an API client. In Twilio Functions you can get an
  // authorised client from the context.
  const client = context.getTwilioClient();
  let room;
  try {
    // Fetch the room by name from the API.
    room = await client.video.rooms(ROOM).fetch();
  } catch (error) {
    // If the room can't be found, create a new room.
    try {
      room = await client.video.rooms.create({
        uniqueName: ROOM,
        type: "group",
      });
    } catch (error) {
      // If this fails, I'm not sure what went wrong!
      console.error(error);
      callback(error);
    }
  }

  // Create an access token
  // Start with a grant that gives access to just the named room.
  const grant = new VideoGrant({ room: ROOM });
  // Create an access token using your API credentials. Your Account SID is
  // available on the Twilio console https://www.twilio.com/console
  // You can create an API key and secret here: https://www.twilio.com/console/video/project/api-keys
  // Set the identity for the access token here as well.
  const accessToken = new AccessToken(
    context.ACCOUNT_SID,
    context.API_KEY,
    context.API_SECRET,
    { identity }
  );
  // Add the grant to the access token.
  accessToken.addGrant(grant);

  // Return the access token as part of the response.
  callback(null, {
    identity,
    room: ROOM,
    token: accessToken.toJwt(),
  });
};

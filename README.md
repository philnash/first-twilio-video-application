# Build your first Twilio Video application

A demo of [Twilio Video](https://www.twilio.com/video) for the [Build your first Twilio Video application webinar](https://ahoy.twilio.com/build-video-collaboration-app-apac-webinar).

This application shows a multiparty group chat that does the following:

- Creates a Twilio Video group room using [the REST API](https://www.twilio.com/docs/video/api/rooms-resource)
- Creates an [Access Token](https://www.twilio.com/docs/iam/access-tokens) that can access the room
- Has an interface that asks for a username and uses it to request the token from the server
- Joins the Video room and adds all participants' video streams to the page

## Running the demo

You will need [Node.js installed](https://nodejs.org/en/) to run this demo.

### Download the code

Start by cloning or downloading the repo:

```bash
git clone https://github.com/philnash/first-twilio-video-application.git
```

### Install the dependencies

Change into the directory and install the dependencies:

```bash
cd first-twilio-video-application
npm install
```

### Set up environment variables

Copy the `.env.example` file into `.env`.

```bash
cp .env.example .env
```

Fill in your Twilio Account SID and Auth Token which you can find in the [Twilio console](https://www.twilio.com/console).

[Create an API Key and Secret in the Twilio console](https://www.twilio.com/console/video/project/api-keys) and add them to the `.env` file.

### Run the application

To start the application, run:

```bash
npm start
```

Then visit [http://localhost:3000/index.html](http://localhost:3000/index.html).

Enter your name in the box and join the video chat room.

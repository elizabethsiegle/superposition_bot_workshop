## Superposition AI/ML Chatbot Building Workshop 
On 6/6/2020, we made a bot that tells you what programming language you are. This README has instructions on getting started with your bot and where to put the JSON and JS code in this repo, as well as some [Resources](#Resources) at the bottom.

You'll need 
- a Twilio account--[sign up for a free one here and receive an extra $10 if you upgrade through this link](http://www.twilio.com/referral/iHsJ5D) 
- A Twilio phone number with SMS capabilities - [configure one here](https://www.twilio.com/console/phone-numbers/search)

### Make an Autopilot bot and configure a phone number

Go to your [Autopilot console](https://www.twilio.com/console/autopilot/list) and under `Create a Bot` select `Start from Scratch`.
![start from scratch](https://twilio-cms-prod.s3.amazonaws.com/images/Q-U5ecxm7JM0ZVqX0ECoW3Rn-yR5fUsxlSUPg6jauFXnR.width-1000.png)

Give your bot a title like <em>what-programming-language-are-you</em> and click `Create bot`.

Select `Channels` from the left-hand menu and then click `Programmable Messaging`.
![prog messaging](https://twilio-cms-prod.s3.amazonaws.com/images/mHqojErF89eo1Zzzf3oBKB6IMl38QZ1yUYrEK1gO_Ca2H.width-1000.png)

Copy that Messaging URL and in a new tab configure your Twilio number in your [phone number console](https://www.twilio.com/console/phone-numbers/incoming).
![prog messaging url](https://twilio-cms-prod.s3.amazonaws.com/images/F7dkqSAPQOEJzejsekA-K0dnsIK5XaD7toS3xPHhBEYVy.width-1000.png)

You can also do the same for programmable voice so your bot is a phone call bot.

If you don't have a Twilio number yet, go to the [Phone Numbers section](https://www.twilio.com/console/phone-numbers) of your [Twilio Console](https://www.twilio.com/console) and search for a phone number in your country and region, making sure the SMS checkbox is ticked.
![phone #s](https://twilio-cms-prod.s3.amazonaws.com/images/iS9725REApy8cAUJQa0Uu-9own1dHExPDO2U7a0L24cHk.width-1000.png)

In the `Messaging` section of your purchased number, in the `A Message Comes In` section, set the Webhook to be your Messaging URL and hit Save.
![messaging configuration](https://twilio-cms-prod.s3.amazonaws.com/images/6EmMo4III8guzWR8GaiH3IFgT94GX2RKhgGIyMsOGeLZv.width-1000.png)

### Make a bot to ask questions
Make a task called `main_questions`. Add the code from `bot.json` into it. It asks a series of questions in a [`Collect` Action](https://www.twilio.com/docs/autopilot/actions/collect) and takes in those questions. Each question has a name and a [`Validate` instruction](https://www.twilio.com/docs/autopilot/actions/collect#validate) to limit what the user can answer with. We use the Validate attribute allowed_values to provide an array of possible answers. If this was a quiz where there is only one right answer, it might only have one allowed value.

After the last question, the bot redirects (with a [`Redirect` Action](https://www.twilio.com/docs/autopilot/actions/redirect)) to a Twilio Function (a serverless environment for Node.js apps) to tally up all the answers and calculate the all-important answer to "What Twilio Product are you?"

### Calculate the Results with JavaScript in a Twilio Function
Make a new Function by clicking the red plus button in your [Functions Console](https://www.twilio.com/console/functions/manage). Select a `Blank` template and click `Create`.
![make a blank function](https://twilio-cms-prod.s3.amazonaws.com/images/0bZCylppW6dGW89YbsGwjYHSKS5FXY-5woRXH-uymVeQB.width-1000.png)

Append `/superpos` to the path of your Function, then copy the path and paste it in your Autopilot bot JSON bin's on_complete: redirect: uri. Then add the JavaScript code in `bot.js` to get the memory of each of the fifteen answered questions and create an empty response object that will soon be filled.

### What's next for your bot
You can add more questions, more answer choices, more emojis, or a more complex system of tallying up the answers. With people sheltering at home, now is a great time to create entertaining quizzes for personal or professional use. Twilio Autopilot makes it easy for you to get creative with chatbots and quizzes to engage with customers, fans, friends, and family, or just have fun. Let me know online or in the comments what you're building.

#### Resources
- [Twilio Autopilot Actions](https://www.twilio.com/docs/autopilot/actions)
- [Twilio Autopilot Request](https://www.twilio.com/docs/autopilot/actions/autopilot-request)
- [Slides from workshop](https://www.slideshare.net/ElizabethLizzieSiegl/build-an-aiml-chatbot-workshop)
- [Quizbot blog post](https://www.twilio.com/blog/build-a-quiz-bot-eight-minutes)
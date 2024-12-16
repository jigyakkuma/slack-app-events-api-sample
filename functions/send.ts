import { DefineFunction, Schema, SlackFunction } from "deno-slack-sdk/mod.ts";
import { SlackAPI } from "deno-slack-api/mod.ts";

export const SendFunction = DefineFunction({
  callback_id: "send",
  title: "Send",
  description: "Send message",
  source_file: "functions/send.ts",
  input_parameters: {
    properties: {
        message: {
          type: Schema.types.string,
        },
        postChannelId: {
          type: Schema.slack.types.channel_id,
        },
    },
    required: ["message", "postChannelId"],
  },
});

export default SlackFunction(SendFunction, ({ inputs, token}) => {
  const client = SlackAPI(token, {});
  client.chat.postMessage({
    channel: inputs.postChannelId,
    text: inputs.message,
  });
  return {
    outputs: {},
  };
});

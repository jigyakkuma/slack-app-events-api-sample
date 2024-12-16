import { DefineFunction, Schema, SlackFunction } from "deno-slack-sdk/mod.ts";

export const ChannelCreatedMessageFunction = DefineFunction({
  callback_id: "channel_created_message",
  title: "Create message",
  description: "Create message",
  source_file: "functions/channel_created_message.ts",
  input_parameters: {
    properties: {
      creatorId: {
        type: Schema.slack.types.user_id,
      },
      channelType: {
        type: Schema.types.string,
      },
      channelId: {
        type: Schema.slack.types.channel_id,
      },
    },
    required: ["creatorId", "channelType", "channelId"],
  },
  output_parameters: {
    properties: {
      message: {
        type: Schema.types.string,
      },
    },
    required: ["message"],
  },
});

export default SlackFunction(ChannelCreatedMessageFunction, ({ inputs }) => {
    const message = `<@${inputs.creatorId}> is ${inputs.channelType} channel <#${inputs.channelId}> created.`;
  return {
    outputs: {
      message: message,
    },
  };
});
import { DefineWorkflow, Schema } from "deno-slack-sdk/mod.ts";
import { ChannelCreatedMessageFunction } from "../functions/channel_created_message.ts";
import { SendFunction } from "../functions/send.ts";

export const ChannelCreatedWorkflow = DefineWorkflow({
  callback_id: "createChannel",
  title: "Create channel Workflow",
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
      postChannelId: {
        type: Schema.slack.types.channel_id,
      },
    },
    required: ["creatorId", "channelType", "channelId", "postChannelId"],
  },
});

const messageStep = ChannelCreatedWorkflow.addStep(ChannelCreatedMessageFunction, {
  creatorId: ChannelCreatedWorkflow.inputs.creatorId,
  channelType: ChannelCreatedWorkflow.inputs.channelType,
  channelId: ChannelCreatedWorkflow.inputs.channelId,
});

ChannelCreatedWorkflow.addStep(SendFunction, {
  postChannelId: ChannelCreatedWorkflow.inputs.postChannelId,
  message: messageStep.outputs.message,
});

export default ChannelCreatedWorkflow;
import { Trigger } from "deno-slack-sdk/types.ts";
import { TriggerContextData, TriggerEventTypes, TriggerTypes } from "deno-slack-api/mod.ts";
import { ChannelCreatedWorkflow } from "../workflows/channel_created.ts";

const channelCreatedTrigger: Trigger<typeof ChannelCreatedWorkflow.definition> = {
  name: "create channel trigger",
  type: TriggerTypes.Event,
  workflow: `#/workflows/${ChannelCreatedWorkflow.definition.callback_id}`,
  event: {
    event_type: TriggerEventTypes.ChannelCreated,
  },
  inputs: {
    creatorId: {
      value: TriggerContextData.Event.ChannelCreated.creator_id,
    },
    channelType: {
      value: TriggerContextData.Event.ChannelCreated.channel_type,
    },
    channelId: {
      value: TriggerContextData.Event.ChannelCreated.channel_id,
    },
    postChannelId: {
      value: "", 
    },
  },
};

export default channelCreatedTrigger;

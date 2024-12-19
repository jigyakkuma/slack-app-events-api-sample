import { Manifest } from "deno-slack-sdk/mod.ts";
import { ChannelCreatedWorkflow } from "./workflows/channel_created.ts";

export default Manifest({
  name: "Notify bot",
  description: "",
  icon: "assets/icon.jpg",
  workflows: [
    ChannelCreatedWorkflow,
  ],
  outgoingDomains: [],
  botScopes: [
    "channels:read",
    "chat:write",
    "chat:write.public"
  ],
});

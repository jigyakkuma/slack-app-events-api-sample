import { Manifest } from "deno-slack-sdk/mod.ts";
import { ChannelCreatedWorkflow } from "./workflows/channel_created.ts";

export default Manifest({
  name: "CorporateIT Kumano",
  description: "",
  icon: "assets/bear_IT_engineer.jpg",
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

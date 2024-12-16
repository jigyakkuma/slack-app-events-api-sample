import { SlackFunctionTester } from "deno-slack-sdk/mod.ts";
import { assertEquals } from "https://deno.land/std@0.153.0/testing/asserts.ts";
import ChannelCreatedMessageFunction from "./channel_created_message.ts";

const { createContext } = SlackFunctionTester("message");

Deno.test("Channel Created Message function test", async () => {
  const inputs = { creatorId: "Hoge", channelType: "public", channelId: "fuga", channelName: "" };
  const { outputs } = await ChannelCreatedMessageFunction(createContext({ inputs }));
  assertEquals(outputs?.message, "<@Hoge> is public channel <#fuga> created.");
});

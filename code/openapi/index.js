import OpenAI from "openai";
import { HttpsProxyAgent } from "https-proxy-agent";

// 使用 HTTP 或 SOCKS5 代理（根据你的实际代理类型调整）
const proxyAgent = new HttpsProxyAgent("socks5://127.0.0.1:10808"); // 或 socks5://127.0.0.1:10808

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  httpAgent: proxyAgent, // 强制让 OpenAI 请求走代理
});

async function main() {
  try {
    const response = await client.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: "Hello, world!" }],
    });
    console.log(response.choices[0].message.content);
  } catch (error) {
    console.error("Error:", error);
  }
}

main();

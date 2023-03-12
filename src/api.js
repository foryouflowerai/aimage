/* global reactPress */

import WPAPI from "wpapi";
import { Configuration, OpenAIApi } from "openai";

const openapi = "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";
const configuration = new Configuration({
  apiKey: openapi,
});

console.log("open api", process.env.OPENAI_API_KEY);

const wp = new WPAPI(
  process.env.NODE_ENV === "development"
    ? {
        endpoint: "http://aimage.local/wp-json",
        username: "collinsruto48",
        password: "@11339134Word",
      }
    : { endpoint: reactPress.api.rest_url, nonce: reactPress.api.nonce }
);

export async function getContacts(q = "") {
  try {
    const users = await wp.users().search(q);
    console.log("wp", wp);
    return users.filter((user) => user.id !== 1); // we don't want the admin user
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function getImages() {
  const images = await fetch(
    process.env.NODE_ENV === "development"
      ? "http://aimage.local/wp-json/wp/v2/images"
      : reactPress.api.rest_url
  );
  return images;
}

export async function generateImage(prompt) {
  console.log("api prompt", prompt)
  const openai = new OpenAIApi(configuration);
  try {
    const response = await openai.createImage({
      prompt: `${prompt.style} ${prompt.text}`,
      n: prompt.num || 1,
      size: prompt.size || "512x512",
    });

    console.log("api res",response.data);
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
}

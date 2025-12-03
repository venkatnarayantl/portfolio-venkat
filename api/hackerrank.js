import fetch from "node-fetch";
import cheerio from "cheerio";

export default async function handler(req, res) {
  try {
    const profileURL = "https://www.hackerrank.com/venkatnarayantl";
    const response = await fetch(profileURL);
    const html = await response.text();

    const $ = cheerio.load(html);
    // Extract solved challenges count
    const challengesText = $('div[data-analytics="user-statistics"]').text(); // adjust selector if needed
    const solved = parseInt(challengesText.match(/\d+/)?.[0] || 0);

    res.status(200).json({ solved });
  } catch (err) {
    console.error(err);
    res.status(500).json({ solved: 0 });
  }
}

export const configuration = {
  BRAND_NAME: "Amos Bastian",
  TWITTER_USERNAME: "@amosbastian",
  TWITTER_URL: "https://twitter.com/amosbastian",
  INSTAGRAM_URL: "https://www.instagram.com/amosbastian",
  LINKED_IN_URL: "https://linkedin.com/in/amosbastian",
  GITHUB_URL: "https://github.com/amosbastian",
  BASE_URL_SITE:
    process.env.NODE_ENV === "production" ? process.env.NEXT_PUBLIC_BASE_URL_SITE : "http://localhost:3000",
};

export const DefaultQuery = `
  query {
    default {
      Slogan
      Description
      Apple_Store_Link
      Play_Market_link
      Instagram
      Youtube
      Twitter
      Facebook
      Help_And_Support
      Privacy
      Title
      Keywords
      SEO_Description
    }
  }
`;

export const FeaturesQuery = `
  query {
    features {
      Title
      Description
      Video{
        url
      }
      Emoji
      {
        url
      }
    }
  }
`;

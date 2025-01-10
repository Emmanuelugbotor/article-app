import { Article } from "../../models/ApiResponse";

export const mockArticle: Article = {
  id: 1,
  eta_id: 1012,
  uri: "test-uri",
  url: "https://example.com/test-article",
  asset_id: 12345,
  source: "Test Source",
  published_date: "2025-01-05",
  updated: "2025-01-05",
  section: "Test Section",
  subsection: "Test Subsection",
  nytdsection: "test-section",
  adx_keywords: "test,article",
  column: null,
  byline: "By Test Author",
  type: "Article",
  title: "Test Article",
  abstract: "Test Abstract",
  des_facet: ["Test", "Mock"],
  org_facet: ["MockOrg"],
  per_facet: ["MockPerson"],
  geo_facet: ["MockLocation"],
  media: [
    {
      type: "image",
      subtype: "photo",
      caption:
        "The advisory called for updating labels on all alcoholic beverages with a warning that drinking heightens the risk for at least seven cancers, including common ones like breast and colon cancers.",
      copyright: "Ruth Fremson/The New York Times",
      approved_for_syndication: 1,
      "media-metadata": [
        {
          url: "https://static01.nyt.com/images/2025/01/03/multimedia/03cancer-jwkv/03cancer-jwkv-thumbStandard.jpg",
          format: "Standard Thumbnail",
          height: 75,
          width: 75,
        },
        {
          url: "https://static01.nyt.com/images/2025/01/03/multimedia/03cancer-jwkv/03cancer-jwkv-mediumThreeByTwo210.jpg",
          format: "mediumThreeByTwo210",
          height: 140,
          width: 210,
        },
        {
          url: "https://static01.nyt.com/images/2025/01/03/multimedia/03cancer-jwkv/03cancer-jwkv-mediumThreeByTwo440.jpg",
          format: "mediumThreeByTwo440",
          height: 293,
          width: 440,
        },
      ],
    },
  ],
};

export const mockArticles = [
  {
    id: 1,
    title: "Article 1",
    abstract: "abstract testing 1",
    url: "",
    media: [
      {
        type: "image",
        subtype: "photo",
        caption:
          "The advisory called for updating labels on all alcoholic beverages with a warning that drinking heightens the risk for at least seven cancers, including common ones like breast and colon cancers.",
        copyright: "Ruth Fremson/The New York Times",
        approved_for_syndication: 1,
        "media-metadata": [
          {
            url: "https://static01.nyt.com/images/2025/01/03/multimedia/03cancer-jwkv/03cancer-jwkv-thumbStandard.jpg",
            format: "Standard Thumbnail",
            height: 75,
            width: 75,
          },
          {
            url: "https://static01.nyt.com/images/2025/01/03/multimedia/03cancer-jwkv/03cancer-jwkv-mediumThreeByTwo210.jpg",
            format: "mediumThreeByTwo210",
            height: 140,
            width: 210,
          },
          {
            url: "https://static01.nyt.com/images/2025/01/03/multimedia/03cancer-jwkv/03cancer-jwkv-mediumThreeByTwo440.jpg",
            format: "mediumThreeByTwo440",
            height: 293,
            width: 440,
          },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Article 2",
    abstract: "abstract testing 2",
    url: "",
    media: [
      {
        type: "image",
        subtype: "photo",
        caption:
          "The advisory called for updating labels on all alcoholic beverages with a warning that drinking heightens the risk for at least seven cancers, including common ones like breast and colon cancers.",
        copyright: "Ruth Fremson/The New York Times",
        approved_for_syndication: 1,
        "media-metadata": [
          {
            url: "https://static01.nyt.com/images/2025/01/03/multimedia/03cancer-jwkv/03cancer-jwkv-thumbStandard.jpg",
            format: "Standard Thumbnail",
            height: 75,
            width: 75,
          },
          {
            url: "https://static01.nyt.com/images/2025/01/03/multimedia/03cancer-jwkv/03cancer-jwkv-mediumThreeByTwo210.jpg",
            format: "mediumThreeByTwo210",
            height: 140,
            width: 210,
          },
          {
            url: "https://static01.nyt.com/images/2025/01/03/multimedia/03cancer-jwkv/03cancer-jwkv-mediumThreeByTwo440.jpg",
            format: "mediumThreeByTwo440",
            height: 293,
            width: 440,
          },
        ],
      },
    ],
  },
] as Article[];

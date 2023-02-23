import CoverImage from "/public/assets/cover_image.svg";

const ARCANA_APP_ID = process.env.NEXT_PUBLIC_ARCANA_APP_ID as string;
const WEB3_STORAGE_API_KEY = process.env.NEXT_PUBLIC_WEB3_STORAGE_API_KEY as string;
const NFT_STORAGE_API_KEY = process.env.NEXT_PUBLIC_NFT_STORAGE_API_KEY as string;

const MENU_LIST = [
  { name: "Campaigns", href: "/campaigns" },
  { name: "About", href: "/about" },
  { name: "Team", href: "/team" },
];

const CAMPAIGNS = [
  {
    title: "Potatoes for everybody",
    description: "This is brief description of the running campaign. Don’t know what to tell more ab...",
    image: CoverImage,
    time: "3 days",
    participants: 23,
  },
  {
    title: "Potatoes for everybody",
    description: "This is brief description of the running campaign. Don’t know what to tell more ab...",
    image: CoverImage,
    time: "3 days",
    participants: 23,
  },
  {
    title: "Potatoes for everybody",
    description: "This is brief description of the running campaign. Don’t know what to tell more ab...",
    image: CoverImage,
    time: "3 days",
    participants: 23,
  },
  {
    title: "Potatoes for everybody",
    description: "This is brief description of the running campaign. Don’t know what to tell more ab...",
    image: CoverImage,
    time: "3 days",
    participants: 23,
  },
  {
    title: "Potatoes for everybody",
    description: "This is brief description of the running campaign. Don’t know what to tell more ab...",
    image: CoverImage,
    time: "3 days",
    participants: 23,
  },
  {
    title: "Potatoes for everybody",
    description: "This is brief description of the running campaign. Don’t know what to tell more ab...",
    image: CoverImage,
    time: "3 days",
    participants: 23,
  },
];

export { MENU_LIST, CAMPAIGNS, ARCANA_APP_ID, WEB3_STORAGE_API_KEY, NFT_STORAGE_API_KEY };

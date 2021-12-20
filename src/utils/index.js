import { sentences } from "./data";
import ppGirl1 from "assets/images/women.jpeg";
import ppGirl2 from "assets/images/women.jpeg";
import ppGirl3 from "assets/images/women.jpeg";
import ppGirl4 from "assets/images/women.jpeg";
import ppBoy1 from "assets/images/women.jpeg";
import ppBoy2 from "assets/images/women.jpeg";
import ppBoy3 from "assets/images/women.jpeg";

export const formatTime = (timeString) => {
  let splitTimeString = timeString.split(":");
  return `${splitTimeString[0]}:${splitTimeString[1]}`;
};

export const getRandomSentence = () => {
  const randomIndex = Math.floor(Math.random() * sentences.length);
  const sentence = sentences[randomIndex];
  return sentence;
};

export const contacts = [
  {
    id: 1,
    profile_picture: ppGirl3,
    name: "Hope Uniben",
    phone_number: "+2348123456789",
    whatsapp_name: "Hope",
    unread: 3,
    messages: {
      "04/06/2021": [
        {
          content: getRandomSentence(),
          sender: 1,
          time: "08:11:26",
          status: null,
        },
        {
          content: getRandomSentence(),
          sender: null,
          time: "08:15:45",
          status: "read",
        },
        {
          content: getRandomSentence(),
          sender: 1,
          time: "09:11:26",
          status: null,
        },
        {
          content: getRandomSentence(),
          sender: null,
          time: "09:15:45",
          status: "read",
        },
      ],

      YESTERDAY: [
        {
          content: getRandomSentence(),
          sender: 1,
          time: "08:11:26",
          status: null,
        },
        {
          content: getRandomSentence(),
          sender: null,
          time: "08:15:45",
          status: "read",
        },
        {
          content: getRandomSentence(),
          sender: 1,
          time: "09:11:26",
          status: null,
        },
        {
          content: getRandomSentence(),
          sender: null,
          time: "09:15:45",
          status: "read",
        },
      ],

      TODAY: [
        {
          content: getRandomSentence(),
          sender: null,
          time: "08:10:26",
          status: null,
        },
        {
          content: getRandomSentence(),
          sender: 1,
          time: "08:11:26",
          status: null,
        },
        {
          image: true,
          sender: 1,
          time: "09:12:26",
          status: null,
        },
        {
          content: getRandomSentence(),
          sender: null,
          time: "08:12:45",
          status: "read",
        },
        {
          image: true,
          sender: null,
          time: "09:13:26",
          status: null,
        },
        {
          content: getRandomSentence(),
          sender: 1,
          time: "09:20:26",
          status: null,
        },
        {
          content: getRandomSentence(),
          sender: 1,
          time: "09:21:26",
          status: null,
        },
      ],
    },
    group: false,
    pinned: false,
    typing: false,
  },
  {
    id: 2,
    profile_picture: ppGirl2,
    name: "Naomi",
    phone_number: "+2348123456789",
    whatsapp_name: "Naomi.",
    unread: 0,
    messages: {
      "04/06/2021": [
        {
          content: getRandomSentence(),
          sender: 2,
          time: "08:11:26",
          status: null,
        },
        {
          content: getRandomSentence(),
          sender: null,
          time: "08:15:45",
          status: "read",
        },
        {
          content: getRandomSentence(),
          sender: 2,
          time: "09:11:26",
          status: null,
        },
        {
          content: getRandomSentence(),
          sender: null,
          time: "09:15:45",
          status: "read",
        },
      ],

      YESTERDAY: [
        {
          content: getRandomSentence(),
          sender: 2,
          time: "08:11:26",
          status: null,
        },
        {
          content: getRandomSentence(),
          sender: null,
          time: "08:15:45",
          status: "read",
        },
        {
          content: getRandomSentence(),
          sender: 2,
          time: "09:11:26",
          status: null,
        },
        {
          content: getRandomSentence(),
          sender: null,
          time: "09:15:45",
          status: "read",
        },
      ],

      TODAY: [
        {
          content: getRandomSentence(),
          sender: 2,
          time: "08:11:26",
          status: null,
        },
        {
          content: getRandomSentence(),
          sender: null,
          time: "08:15:45",
          status: "read",
        },
        {
          content: getRandomSentence(),
          sender: 2,
          time: "09:11:26",
          status: null,
        },
      ],
    },
    group: false,
    pinned: false,
    typing: false,
  },
  {
    id: 3,
    profile_picture: ppGirl1,
    name: "Faith",
    phone_number: "+2348123456789",
    whatsapp_name: "Faith",
    unread: 0,
    messages: {
      "04/06/2021": [
        {
          content: getRandomSentence(),
          sender: 3,
          time: "08:11:26",
          status: null,
        },
        {
          content: getRandomSentence(),
          sender: null,
          time: "08:15:45",
          status: "read",
        },
        {
          content: getRandomSentence(),
          sender: 3,
          time: "09:11:26",
          status: null,
        },
        {
          content: getRandomSentence(),
          sender: null,
          time: "09:15:45",
          status: "sent",
        },
      ],

      YESTERDAY: [
        {
          content: getRandomSentence(),
          sender: 3,
          time: "08:11:26",
          status: null,
        },
        {
          content: getRandomSentence(),
          sender: null,
          time: "08:15:45",
          status: "read",
        },
        {
          content: getRandomSentence(),
          sender: 3,
          time: "09:11:26",
          status: null,
        },
        {
          content: getRandomSentence(),
          sender: null,
          time: "09:15:45",
          status: "read",
        },
      ],

      TODAY: [
        {
          content: getRandomSentence(),
          sender: 3,
          time: "08:11:26",
          status: null,
        },
        {
          content: getRandomSentence(),
          sender: null,
          time: "08:15:45",
          status: "read",
        },
        {
          content: getRandomSentence(),
          sender: 3,
          time: "09:11:26",
          status: null,
        },
        {
          image: true,
          sender: 3,
          time: "09:12:26",
          status: null,
        },
        {
          image: true,
          sender: null,
          time: "09:13:26",
          status: null,
        },
        {
          content: getRandomSentence(),
          sender: null,
          time: "09:15:45",
          status: "sent",
        },
      ],
    },
    group: false,
    pinned: false,
    typing: false,
  },
  {
    id: 4,
    profile_picture: ppBoy2,
    name: "Brodrick Uniben",
    phone_number: "+2348123456789",
    whatsapp_name: "Brodrick",
    unread: 1,
    messages: {
      "04/06/2021": [
        {
          content: getRandomSentence(),
          sender: 4,
          time: "08:11:26",
          status: null,
        },
        {
          content: getRandomSentence(),
          sender: null,
          time: "08:15:45",
          status: "read",
        },
        {
          content: getRandomSentence(),
          sender: 4,
          time: "09:11:26",
          status: null,
        },
        {
          content: getRandomSentence(),
          sender: null,
          time: "09:15:45",
          status: "read",
        },
      ],

      YESTERDAY: [
        {
          content: getRandomSentence(),
          sender: 4,
          time: "08:11:26",
          status: null,
        },
        {
          content: getRandomSentence(),
          sender: null,
          time: "08:15:45",
          status: "read",
        },
        {
          content: getRandomSentence(),
          sender: 4,
          time: "09:11:26",
          status: null,
        },
        {
          content: getRandomSentence(),
          sender: null,
          time: "09:15:45",
          status: "read",
        },
      ],

      TODAY: [
        {
          content: getRandomSentence(),
          sender: 4,
          time: "08:11:26",
          status: null,
        },
        {
          content: getRandomSentence(),
          sender: null,
          time: "08:15:45",
          status: "read",
        },
        {
          content: getRandomSentence(),
          sender: 4,
          time: "09:11:26",
          status: null,
        },
        {
          content: getRandomSentence(),
          sender: null,
          time: "09:15:45",
          status: "read",
        },
        {
          content: getRandomSentence(),
          sender: 4,
          time: "09:11:26",
          status: null,
        },
        {
          content: getRandomSentence(),
          sender: 4,
          time: "09:11:26",
          status: null,
        },
      ],
    },
    group: false,
    pinned: false,
    typing: false,
  },

  {
    id: 5,
    profile_picture: ppBoy1,
    name: "Oghosa",
    phone_number: "+2348123456789",
    whatsapp_name: "Beyonce",
    unread: 0,
    messages: {
      "04/06/2021": [
        {
          content: getRandomSentence(),
          sender: 5,
          time: "08:11:26",
          status: null,
        },
        {
          content: getRandomSentence(),
          sender: null,
          time: "08:15:45",
          status: "read",
        },
        {
          content: getRandomSentence(),
          sender: 5,
          time: "09:11:26",
          status: null,
        },
        {
          content: getRandomSentence(),
          sender: null,
          time: "09:15:45",
          status: "read",
        },
      ],

      YESTERDAY: [
        {
          content: getRandomSentence(),
          sender: 5,
          time: "08:11:26",
          status: null,
        },
        {
          content: getRandomSentence(),
          sender: null,
          time: "08:15:45",
          status: "read",
        },
        {
          content: getRandomSentence(),
          sender: 5,
          time: "09:11:26",
          status: null,
        },
        {
          content: getRandomSentence(),
          sender: null,
          time: "09:15:45",
          status: "read",
        },
      ],

      TODAY: [
        {
          content: getRandomSentence(),
          sender: 5,
          time: "08:11:26",
          status: null,
        },
        {
          content: getRandomSentence(),
          sender: null,
          time: "08:15:45",
          status: "read",
        },
        {
          content: getRandomSentence(),
          sender: 5,
          time: "09:11:26",
          status: null,
        },
        {
          content: getRandomSentence(),
          sender: null,
          time: "09:15:45",
          status: "read",
        },
      ],
    },
    group: false,
    pinned: false,
    typing: false,
  },
  {
    id: 6,
    profile_picture: ppBoy3,
    name: "Tutorial",
    phone_number: "+2348123456789",
    whatsapp_name: "Tutorial",
    unread: 3,
    messages: {
      "04/06/2021": [
        {
          content: getRandomSentence(),
          sender: 6,
          time: "08:11:26",
          status: null,
        },
        {
          content: getRandomSentence(),
          sender: null,
          time: "08:15:45",
          status: "read",
        },
        {
          content: getRandomSentence(),
          sender: 6,
          time: "09:11:26",
          status: null,
        },
        {
          content: getRandomSentence(),
          sender: null,
          time: "09:15:45",
          status: "read",
        },
      ],

      YESTERDAY: [
        {
          content: getRandomSentence(),
          sender: 6,
          time: "08:11:26",
          status: null,
        },
        {
          content: getRandomSentence(),
          sender: null,
          time: "08:15:45",
          status: "read",
        },
        {
          content: getRandomSentence(),
          sender: 6,
          time: "09:11:26",
          status: null,
        },
        {
          content: getRandomSentence(),
          sender: null,
          time: "09:15:45",
          status: "read",
        },
      ],

      TODAY: [
        {
          content: getRandomSentence(),
          sender: 6,
          time: "08:11:26",
          status: null,
        },
        {
          content: getRandomSentence(),
          sender: null,
          time: "08:15:45",
          status: "read",
        },
        {
          content: getRandomSentence(),
          sender: 6,
          time: "09:11:26",
          status: null,
        },
        {
          content: getRandomSentence(),
          sender: null,
          time: "09:15:45",
          status: "read",
        },
        {
          content: getRandomSentence(),
          sender: 6,
          time: "09:11:26",
          status: null,
        },
        {
          content: getRandomSentence(),
          sender: 6,
          time: "09:11:26",
          status: null,
        },
      ],
    },
    group: true,
    pinned: true,
    typing: false,
  },

  {
    id: 7,
    profile_picture: ppGirl3,
    name: "Simon House",
    phone_number: "+2348123456789",
    whatsapp_name: "simon",
    unread: 0,
    messages: {
      "04/06/2021": [
        {
          content: getRandomSentence(),
          sender: 8,
          time: "08:11:26",
          status: null,
        },
        {
          content: getRandomSentence(),
          sender: null,
          time: "08:15:45",
          status: "read",
        },
        {
          content: getRandomSentence(),
          sender: 7,
          time: "09:11:26",
          status: null,
        },
        {
          content: getRandomSentence(),
          sender: null,
          time: "09:15:45",
          status: "read",
        },
      ],

      YESTERDAY: [
        {
          content: getRandomSentence(),
          sender: 7,
          time: "08:11:26",
          status: null,
        },
        {
          content: getRandomSentence(),
          sender: null,
          time: "08:15:45",
          status: "read",
        },
        {
          content: getRandomSentence(),
          sender: 7,
          time: "09:11:26",
          status: null,
        },
        {
          content: getRandomSentence(),
          sender: null,
          time: "09:15:45",
          status: "read",
        },
      ],

      TODAY: [
        {
          content: getRandomSentence(),
          sender: 7,
          time: "08:11:26",
          status: null,
        },
        {
          content: getRandomSentence(),
          sender: null,
          time: "08:15:45",
          status: "read",
        },
        {
          content: getRandomSentence(),
          sender: 7,
          time: "09:11:26",
          status: null,
        },
        {
          content: getRandomSentence(),
          sender: null,
          time: "09:15:45",
          status: "read",
        },
      ],
    },
    group: false,
    pinned: false,
    typing: false,
  },

  {
    id: 8,
    profile_picture: ppGirl4,
    name: "CSC400 LV",
    phone_number: "+2348123456789",
    whatsapp_name: "csc",
    unread: 0,
    messages: {
      "04/06/2021": [
        {
          content: getRandomSentence(),
          sender: 8,
          time: "08:11:26",
          status: null,
        },
        {
          content: getRandomSentence(),
          sender: null,
          time: "08:15:45",
          status: "read",
        },
        {
          content: getRandomSentence(),
          sender: 8,
          time: "09:11:26",
          status: null,
        },
        {
          content: getRandomSentence(),
          sender: null,
          time: "09:15:45",
          status: "read",
        },
      ],

      YESTERDAY: [
        {
          content: getRandomSentence(),
          sender: 8,
          time: "08:11:26",
          status: null,
        },
        {
          content: getRandomSentence(),
          sender: null,
          time: "08:15:45",
          status: "read",
        },
        {
          content: getRandomSentence(),
          sender: 8,
          time: "09:11:26",
          status: null,
        },
        {
          content: getRandomSentence(),
          sender: null,
          time: "09:15:45",
          status: "read",
        },
      ],

      TODAY: [
        {
          content: getRandomSentence(),
          sender: 8,
          time: "08:11:26",
          status: null,
        },
        {
          content: getRandomSentence(),
          sender: null,
          time: "08:15:45",
          status: "read",
        },
        {
          content: getRandomSentence(),
          sender: 8,
          time: "09:11:26",
          status: null,
        },
        {
          content: getRandomSentence(),
          sender: null,
          time: "09:15:45",
          status: "read",
        },
      ],
    },
    group: false,
    pinned: false,
    typing: false,
  },
];

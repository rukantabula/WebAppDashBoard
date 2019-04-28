"use strict";
 
const userData = () => {
  const data = {
    details: {
      firstName: "Benson",
      lastName: "Rukantabula",
      img: "profile-img"
    },
    notifications: [
      "You have 6 unread messages",
      "You have 3 new followers",
      "Your password expires in 7 days"
    ]
  };
  return data;
};

const menuIcons = () => {
  const data = [
    {
      menuItem: "dashboard",
      path:
        '<path d="M25 18c1.7 0 3-1.3 3-3s-1.3-3-3-3-3 1.3-3 3 1.3 3 3 3zm-1-4h2v2h-2v-2zm1 12c1.7 0 3-1.3 3-3s-1.3-3-3-3-3 1.3-3 3 1.3 3 3 3zm-1-4h2v2h-2v-2zm-7 4c1.7 0 3-1.3 3-3s-1.3-3-3-3-3 1.3-3 3 1.3 3 3 3zm-1-4h2v2h-2v-2zM28 0H6C3.8 0 2 1.8 2 4v24c0 2.2 1.8 4 4 4h22c2.2 0 4-1.8 4-4V4c0-2.2-1.8-4-4-4zm2 28c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2V8h26v20zm0-22H4V4c0-1.1.9-2 2-2h22c1.1 0 2 .9 2 2v2zM17 18c1.7 0 3-1.3 3-3s-1.3-3-3-3-3 1.3-3 3 1.3 3 3 3zm-1-4h2v2h-2v-2zM9 26c1.7 0 3-1.3 3-3s-1.3-3-3-3-3 1.3-3 3 1.3 3 3 3zm-1-4h2v2H8v-2zm1-4c1.7 0 3-1.3 3-3s-1.3-3-3-3-3 1.3-3 3 1.3 3 3 3zm-1-4h2v2H8v-2z" fill="#fff"/>'
    },
    {
      menuItem: "members",
      path:
        '<path d="M18 16.4c1.3-1.7 2-3.9 2-6.4 0-5.5-4-10-9-10S2 4.5 2 10c0 2.4.8 4.6 2 6.4-2.3.8-4 3-4 5.6v4c0 3.3 2.7 6 6 6h10c3.3 0 6-2.7 6-6v-4c0-2.6-1.7-4.8-4-5.6zM4 10c0-4.4 3.1-8 7-8s7 3.6 7 8-3.1 8-7 8-7-3.6-7-8zm16 15.5c0 2.5-2.2 4.5-4.9 4.5H6.9C4.2 30 2 28 2 25.5v-3c0-2.1 1.6-3.9 3.8-4.4C7.2 19.3 9 20 11 20s3.8-.7 5.2-1.9c2.2.5 3.8 2.2 3.8 4.4v3zM23 8h8c.6 0 1-.4 1-1s-.4-1-1-1h-8c-.6 0-1 .4-1 1s.4 1 1 1zm8 16h-6c-.6 0-1 .4-1 1s.4 1 1 1h6c.6 0 1-.4 1-1s-.4-1-1-1zm0-12h-8c-.6 0-1 .4-1 1s.4 1 1 1h8c.6 0 1-.4 1-1s-.4-1-1-1zm0 6h-6c-.6 0-1 .4-1 1s.4 1 1 1h6c.6 0 1-.4 1-1s-.4-1-1-1z" fill="#fff"/>'
    },
    {
      menuItem: "visits",
      path:
        '<path d="M14 0h-2c-1.1 0-2 .9-2 2v28c0 1.1.9 2 2 2h2c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2zm0 29c0 .6-.4 1-1 1s-1-.4-1-1V3c0-.6.4-1 1-1s1 .4 1 1v26zM4 9H2c-1.1 0-2 .9-2 2v19c0 1.1.9 2 2 2h2c1.1 0 2-.9 2-2V11c0-1.1-.9-2-2-2zm0 20c0 .6-.4 1-1 1s-1-.4-1-1V12c0-.6.4-1 1-1s1 .4 1 1v17zm20-13h-2c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h2c1.1 0 2-.9 2-2V18c0-1.1-.9-2-2-2zm0 13c0 .6-.4 1-1 1s-1-.4-1-1V19c0-.6.4-1 1-1s1 .4 1 1v10z" fill="#fff"/>'
    },
    {
      menuItem: "settings",
      path:
        '<path  d="M26 24H14.9c-.4-1.7-2-3-3.9-3s-3.4 1.3-3.9 3H6c-.6 0-1 .4-1 1s.4 1 1 1h1.1c.4 1.7 2 3 3.9 3s3.4-1.3 3.9-3H26c.6 0 1-.4 1-1s-.4-1-1-1zm-15 3.4c-1.3 0-2.4-1.1-2.4-2.4 0-1.3 1.1-2.4 2.4-2.4 1.3 0 2.4 1.1 2.4 2.4 0 1.3-1.1 2.4-2.4 2.4zM26 8H14.9c-.4-1.7-2-3-3.9-3S7.6 6.3 7.1 8H6c-.6 0-1 .4-1 1s.4 1 1 1h1.1c.4 1.7 2 3 3.9 3s3.4-1.3 3.9-3H26c.6 0 1-.4 1-1s-.4-1-1-1zm-15 3.4c-1.3 0-2.4-1.1-2.4-2.4 0-1.3 1.1-2.4 2.4-2.4 1.3 0 2.4 1.1 2.4 2.4 0 1.3-1.1 2.4-2.4 2.4zM26 16h-2.1c-.4-1.7-2-3-3.9-3s-3.4 1.3-3.9 3H6c-.6 0-1 .4-1 1s.4 1 1 1h10.1c.4 1.7 2 3 3.9 3s3.4-1.3 3.9-3H26c.6 0 1-.4 1-1s-.4-1-1-1zm-6 3.4c-1.3 0-2.4-1.1-2.4-2.4 0-1.3 1.1-2.4 2.4-2.4 1.3 0 2.4 1.1 2.4 2.4 0 1.3-1.1 2.4-2.4 2.4zM28 0H4C1.8 0 0 1.8 0 4v24c0 2.2 1.8 4 4 4h24c2.2 0 4-1.8 4-4V4c0-2.2-1.8-4-4-4zm2 28c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h24c1.1 0 2 .9 2 2v24z" fill="#fff"/>'
    }
  ];
  return data;
};

const chartData = () => {
  const data = {
    hourly: {
      labels: [
        "12:00",
        "13:00",
        "14:00",
        "15:00",
        "16:00",
        "17:00",
        "18:00",
        "19:00",
        "20:00",
        "21:00",
        "22:00",
        "23:00",
        "00:00"
      ],
      data: [
        1500,
        2550,
        1750,
        3500,
        2000,
        1500,
        2500,
        1250,
        1800,
        500,
        1700,
        2700,
        1500
      ]
    },
    daily: {
      labels: [
        "Monday",
        "Tuesdy",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      data: [500, 3500, 1750, 5500, 2500, 1700, 1500]
    },
    weekly: {
      labels: [
        "16-22",
        "23-29",
        "30-5",
        "6-12",
        "13-19",
        "20-26",
        "27-3",
        "4-10",
        "11-17",
        "18-24",
        "25-31"
      ],
      data: [500, 1250, 1000, 1500, 2000, 1500, 1750, 1250, 1750, 2250, 1750]
    },
    monthly: {
      labels: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ],
      data: [
        25000,
        35000,
        85000,
        25000,
        90000,
        50500,
        52000,
        20550,
        35000,
        75000,
        32500,
        100000
      ]
    },
    dailyTraffic: {
      labels: ["S", "M", "T", "W", "T", "F", "S"],
      data: [75, 100, 175, 125, 225, 200, 100]
    },
    mobileUser: {
      labels: ["Tablet", "Phone", "Desktop"],
      data: [20, 25, 145]
    },
    defaultChartList: ["weekly", "dailyTraffic", "mobileUser"]
  };
  return data;
};

const socialStats = () => {
  const data = {
    twitter: "10,345",
    facebook: "8,739",
    google: "2,530"
  };
  return data;
};

const memberData = () => {
  const data = [
    {
      details: {
        firstName: "Victoria",
        lastName: "Chambers",
        email: "victoria.chambers80@example.com",
        regDate: "10/15/15",
        img: "MEMBER-1"
      },
      memberActivity: [
        {
          type: "comment",
          thread: "YourApp's SEO Tips",
          time: "4 hours"
        }
      ]
    },
    {
      details: {
        firstName: "Dale",
        lastName: "Byrd",
        email: "dale.byrd52@example.com",
        regDate: "10/15/15",
        img: "MEMBER-2"
      },
      memberActivity: [
        {
          type: "post",
          thread: "Facebooks Changes for 2016",
          time: "5 hours"
        }
      ]
    },
    {
      details: {
        firstName: "Dawn",
        lastName: "Wood",
        email: "dawn.wood16@example.com",
        regDate: "10/15/15",
        img: "MEMBER-3"
      },
      memberActivity: [
        {
          type: "comment",
          thread: "Facebooks Changes for 2016",
          time: "5 hours"
        }
      ]
    },
    {
      details: {
        firstName: "Dan",
        lastName: "Oliver",
        email: "dan.oliver82@example.com",
        regDate: "10/15/15",
        img: "MEMBER-4"
      },
      memberActivity: [
        {
          type: "comment",
          thread: "YourApp's SEO Tips",
          time: "1 hours"
        }
      ]
    }
  ];
  return data;
};

const settingsData = () => {
  const data = {
    emailNotifications: false,
    publicProfile: false
  };
  return data;
};

const supportsLocalStorage = () => {
  try {
    return "localStorage" in window && window["localStorage"] !== null;
  } catch (e) {
    return false;
  }
};

const getSettings = () => {
  const settings = localStorage.getItem("settings");
  return settings ? JSON.parse(settings) : [];
};

const saveSettings = settings =>
  localStorage.setItem("settings", JSON.stringify(settings));

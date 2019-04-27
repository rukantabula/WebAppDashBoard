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

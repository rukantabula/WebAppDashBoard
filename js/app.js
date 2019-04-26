"use strict";
document.addEventListener("DOMContentLoaded", () => {
  if (supportsLocalStorage) {
    const data = settingsData();
    data.emailNotifications = true;
    data.publicProfile = true;
    saveSettings(data);
  }
});

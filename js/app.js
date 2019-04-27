document.addEventListener("DOMContentLoaded", () => {
  const notificationBtn = document.querySelector(".bell-icon");
  const notifications = document.querySelector(".notifications");
  const notifAlert = document.querySelector(".notif-alert");
  const data = userData();
  let notMessgaes = data.notifications;

  const notificationWindow = messages => {
    if (messages.length == 0) {
      messages.push('You have 0 unread notifications');
    }
    const notifCloseSection = document.createElement("div");
    for( let i = 0; i < messages.length; i++) {
      const notifSection = document.createElement("div");
      const notificationSymbol = document.createElement("span");
      const notificationMsg = document.createElement("p");
      const notificationClose = document.createElement("span");

      notificationSymbol.classList.add("notif-alert-symbol");
      notificationMsg.appendChild(document.createTextNode(messages[i]));
      notificationClose.classList.add("notif-close");
      notificationClose.id = i;
      notificationClose.innerHTML = "&times;";

      notifSection.classList.add("notif-section");
      notifSection.id = i;
      notifSection.appendChild(notificationSymbol);
      notifSection.appendChild(notificationMsg);
      notifSection.appendChild(notificationClose);

      notifications.appendChild(notifSection);

      notificationClose.addEventListener('click', e => {
        const notifSectionToRemove = document.getElementById(e.target.id);
        notifSectionToRemove.parentNode.removeChild(notifSectionToRemove);
        notifSection.removeChild(e.target);
        console.log(notifSectionToRemove.children[1].innerHTML);
      });
    };

    const notifCloseSectionText = document.createElement("p");
    const closeText = document.createTextNode("Close Notifications");

    notifCloseSection.className = "close-notif-section";
    notifCloseSectionText.appendChild(closeText);
    notifCloseSection.appendChild(notifCloseSectionText);

    notifications.appendChild(notifCloseSection);

    notifCloseSection.addEventListener("click", e => {
      notifications.style.display = "none";
    });
  };

  notificationWindow(notMessgaes);

  notificationBtn.addEventListener("click", e => {
    notifications.style.display = "block";
    notifAlert.style.display = "none";
  });
});

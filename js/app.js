document.addEventListener("DOMContentLoaded", () => {
  const userDetailSection = document.querySelector('.user-detail');
  const notifButton = document.querySelector(".bell-icon");
  const notifWindow = document.querySelector(".notifications");
  const notifAlert = document.querySelector(".notif-alert");
  const notifWindowCloseButton = document.createElement("div");
  const notifCloseSectionText = document.createElement("p");
  const menu = document.querySelector('.menu');
  const data = userData();
  let notifMessages = data.notifications;

const eventActions = {
  showNotificationWindow: () => {
    notifWindow.style.display = "block";
    notifAlert.style.display = "none";
  },
  closeNotificationWindow: () =>  notifWindow.style.display = "none",
  closeNotificationMessage: e => {
    notifMessages.splice(e.target.id, 1);
    notifMessages.length == 0 ? notifMessages.push('You have 0 unread messages') : null;

    notifWindow
      .querySelectorAll(".notif-section")
      .forEach(item => item.parentNode.removeChild(item));

    notifCloseSectionText.innerHTML = "";
    renderNotifWindow(notifMessages);
  },
  navigateToSection: e => {
    const node = e.target.parentNode;
    if (node.nodeName == "SVG") {
      menu.querySelectorAll(".menu-item").forEach(
        item => (item.id = item == node.parentNode ? "menu-item-selected" : "menu-item-deselected")
      );
    }
  }
}

  const eventListener = (element, action) =>
    element.addEventListener("click", event => eventActions[action](event));

  const renderUserDetails = () => {
    const profileImage = document.createElement("img");
    const userName = document.createElement("p");
    profileImage.classList.add(data.details.img);
    profileImage.src = `images/${data.details.img}.jpg`;
    profileImage.alt = data.details.img;
    userName.classList.add("user-name");
    userName.appendChild(
      document.createTextNode(
        `${data.details.firstName}  ${data.details.lastName}`
      )
    );
    userDetailSection.appendChild(profileImage);
    userDetailSection.appendChild(userName);
  };

  const renderMenuItems = () => {
    menuItems().forEach((item, index) => {
      const menuSection = document.createElement('div');
      const svg = document.createElement('svg');
      svg.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">${item.path}</svg>`;
      svg.querySelector('path').classList.add(`${item.name}-Icon`);
      menuSection.appendChild(svg);
      menuSection.classList.add('menu-item');
      menuSection.id = index == 0 ? 'menu-item-selected' : 'menu-item-deselected';
      menu.appendChild(menuSection);     
    });
  };

  const renderNotifWindow = messages => {
    messages.forEach((message, index) => {
      const notifSection = document.createElement("div");
      const notifAlertSymbol = document.createElement("span");
      const notifMsg = document.createElement("p");
      const notifMessageCloseButton = document.createElement("span");

      notifAlertSymbol.classList.add("notif-alert-symbol");
      notifMsg.appendChild(document.createTextNode(message));
      notifMessageCloseButton.classList.add("notif-close");
      notifMessageCloseButton.id = index;
      notifMessageCloseButton.innerHTML = "&times;";

      notifSection.classList.add("notif-section");
      notifSection.id = index;
      notifSection.appendChild(notifAlertSymbol);
      notifSection.appendChild(notifMsg);
      notifSection.appendChild(notifMessageCloseButton);
      notifWindow.appendChild(notifSection);
      eventListener(notifMessageCloseButton, 'closeNotificationMessage');
    });

    notifWindowCloseButton.appendChild(notifCloseSectionText);
    notifWindowCloseButton.className = "close-notif-section";
    notifCloseSectionText.appendChild(document.createTextNode("Close Notifications"));
    notifWindow.appendChild(notifWindowCloseButton);
  };

  renderUserDetails();
  renderMenuItems();
  renderNotifWindow(notifMessages);

  eventListener(notifButton, 'showNotificationWindow');
  eventListener(notifWindowCloseButton, 'closeNotificationWindow');
  eventListener(menu, 'navigateToSection');
});

document.addEventListener("DOMContentLoaded", () => {
  const userDetailDiv = document.querySelector('.user-detail');
  const notificationBtn = document.querySelector(".bell-icon");
  const notifications = document.querySelector(".notifications");
  const notifAlert = document.querySelector(".notif-alert");
  const menuSection = document.querySelector('.menu');
  const wrapper = document.querySelector('.wrapper');
  const data = userData();
  let notMessgaes = data.notifications;
  const menu  = menuIcons();

  const userDetailSection = () => {
    const profileImage = document.createElement('img');
    const userName = document.createElement('p');
    const name = document.createTextNode(`${data.details.firstName}  ${data.details.lastName}`);
    profileImage.classList.add(data.details.img);
    profileImage.src = `images/${data.details.img}.jpg`;
    profileImage.alt = data.details.img;
    userName.classList.add('user-name');
    userName.appendChild(name);
    userDetailDiv.appendChild(profileImage);
    userDetailDiv.appendChild(userName);
  }

  const menuItems = () => {
    menu.forEach((item, i) => {
      const menuDiv = document.createElement('div');
      const svg = document.createElement('svg');
      svg.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">${item['path']}</svg>`;
      svg.querySelector('path').classList.add(`${item['menuItem']}-Icon`);
      menuDiv.appendChild(svg);
      menuDiv.classList.add('menu-item');
      menuDiv.id = i == 0 ? 'menu-item-selected' : 'menu-item-deselected';
      menuSection.appendChild(menuDiv);     
    });
  };

  const notificationWindow = messages => {
    if (messages.length == 0) {
      messages.push('You have 0 unread notifications');
    }
    const notifCloseSection = document.createElement("div");
    messages.forEach((message, i) => {
      const notifSection = document.createElement("div");
      const notificationSymbol = document.createElement("span");
      const notificationMsg = document.createElement("p");
      const notificationClose = document.createElement("span");

      notificationSymbol.classList.add("notif-alert-symbol");
      notificationMsg.appendChild(document.createTextNode(message));
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
      });
    });
    

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

  userDetailSection();
  menuItems();
  notificationWindow(notMessgaes);

  notificationBtn.addEventListener("click", e => {
    notifications.style.display = "block";
    notifAlert.style.display = "none";
  });


  menuSection.addEventListener("click", e => {
    const node = e.target.parentNode;
    if (node.nodeName == "SVG") {
      const menuItems = menuSection.querySelectorAll(".menu-item");
      menuItems.forEach(
        item => (item.id = item == node.parentNode ? "menu-item-selected" : "menu-item-deselected")
      );
    }
  });
});

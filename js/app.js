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
    closeNotificationWindow: () => notifWindow.style.display = "none",
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

  const styleElement = (element, elementClass = '', innerHTML = '', id = '') => {
    const renderElement = document.createElement(`${element}`);
    renderElement.classList.add(elementClass);
    renderElement.id = id;
    renderElement.innerHTML = innerHTML;
    return renderElement;
  }

  const styleImg = (elementClass, name, alt) => {
    const elementImg = styleElement('img', elementClass);
    elementImg.src = `images/${name}.jpg`;
    elementImg.alt = alt;
    return elementImg;
  }

  const renderUserDetails = () => {
    const profileImage = styleImg(data.details.img, data.details.img, data.details.img)
    const userName = styleElement('p', 'user-name');

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
      const menuSection = styleElement('div', 'menu-item', '', index == 0 ? 'menu-item-selected' : 'menu-item-deselected');

      const svg = document.createElement('svg');
      svg.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">${item.path}</svg>`;
      svg.querySelector('path').classList.add(`${item.name}-Icon`);

      menuSection.appendChild(svg);
      menu.appendChild(menuSection);
    });
  };

  const renderNotifWindow = messages => {
    messages.forEach((message, index) => {

      const notifMsg = document.createElement("p");
      const notifAlertSymbol = styleElement('span', 'notif-alert-symbol');
      const notifMessageCloseButton = styleElement('span', 'notif-close', '&times;', index);
      const notifSection = styleElement('div', 'notif-section', '', index);

      notifMsg.appendChild(document.createTextNode(message))
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

  const renderSocialStats = () => {
    socialStats().forEach(item => {
      const socialSection = document.querySelector(`.${item.name}`)
      const stats = styleElement('div', 'stats');
      const title = styleElement('p', `${item.name}-title`, item.name);
      const value = styleElement('p', `${item.name}-stat`, item.value);

      stats.appendChild(title);
      stats.appendChild(value);
      socialSection.appendChild(stats);
    });
  };

  const renderMembersActivity = () => {
    const memberActivitySection = document.querySelector('.mb');
    memberActivityData().forEach(item => {

      const memberSection = styleElement('div', 'members');
      const memberDetails = styleElement('div', 'member-details');
      const name = styleElement('p', 'name', `${item.member.firstName} ${item.member.firstName}`);
      const email = styleElement('p', 'email', item.member.email);
      const regDate = styleElement('p', 'date', item.member.regDate);
      const memberImg = styleImg('member-img', item.member.img, item.member.img);

      memberDetails.appendChild(name);
      memberDetails.appendChild(email);
      memberSection.appendChild(memberImg);
      memberSection.appendChild(memberDetails);
      memberSection.appendChild(regDate);
      memberActivitySection.appendChild(memberSection);
    });
  };


  renderUserDetails();
  renderMenuItems();
  renderNotifWindow(notifMessages);
  renderSocialStats();
  renderMembersActivity();

  eventListener(notifButton, 'showNotificationWindow');
  eventListener(notifWindowCloseButton, 'closeNotificationWindow');
  eventListener(menu, 'navigateToSection');
});

document.addEventListener("DOMContentLoaded", () => {
  const userDetailSection = document.querySelector('.user-detail');
  const notifButton = document.querySelector(".bell-icon");
  const notifWindow = document.querySelector(".notifications");
  const notifAlert = document.querySelector(".notif-alert");
  const notifWindowCloseButton = document.createElement("div");
  const notifCloseSectionText = document.createElement("p");
  const menu = document.querySelector('.menu');
  const searchInput = document.querySelector('.searchInput');
  const textArea = document.querySelector('.text-area');
  const sendButton = document.querySelector('.send');
  const memberList = document.getElementById('member-list');
  let newMemberList;
  const data = userData();

  let notifMessages = data.notifications;

  const eventActions = {
    showNotificationWindow: () => {
      notifWindow.style.display = "block";
      notifAlert.style.display = "none";
    },
    closeNotificationWindow: () => (notifWindow.style.display = "none"),
    closeNotificationMessage: e => {
      notifMessages.splice(e.target.id, 1);
      notifMessages.length == 0
        ? notifMessages.push("You have 0 unread messages")
        : null;

      notifWindow
        .querySelectorAll(".notif-section")
        .forEach(item => item.parentNode.removeChild(item));

      notifCloseSectionText.innerHTML = "";
      renderNotifWindow(notifMessages);
    },
    navigateToSection: e => {
      const node = e.target.parentNode;
      if (node.nodeName == "SVG") {
        menu
          .querySelectorAll(".menu-item")
          .forEach(
            item =>
              (item.id =
                item == node.parentNode
                  ? "menu-item-selected"
                  : "menu-item-deselected")
          );
      }
    },
    searchMembers: e => {
      const value = e.target.value.toLowerCase();
      newMemberList = [];
      let firstName, lastName, isMatch;

      if (value !== "") {
        memberActivityData().forEach(item => {
          firstName = item.member.firstName.toLowerCase();
          lastName = item.member.lastName.toLowerCase();
          isMatch = firstName.indexOf(value) > -1;
          if (isMatch) {
            newMemberList.push(`${firstName} ${lastName}`);
          }
        });

        memberList
          .querySelectorAll("option")
          .forEach(item => item.parentNode.removeChild(item));

        newMemberList.forEach(match => {
          const option = document.createElement("option");
          option.value = match;
          memberList.appendChild(option);
        });
      }
    },
    sendEmail: () =>
      alert(
        searchInput.value == "" || textArea.value == ""
          ? "Please add both user and message fields"
          : "Message Sent!"
      )
  };

  const eventListener = (element, event, action) =>
    element.addEventListener(event, e => eventActions[action](e));

  const styleElement = (element, elementClass = '', innerHTML = '', id = '') => {
    const renderElement = document.createElement(`${element}`);
    renderElement.classList.add(elementClass);
    renderElement.id = id;
    renderElement.innerHTML = innerHTML;
    return renderElement;
  }

  const styleImg = (elementClass, name, alt) => {
    const elementImg = styleElement('img', elementClass);
    elementImg.src = name;
    elementImg.alt = alt;
    return elementImg;
  }

  const renderUserDetails = () => {
    const profileImage = styleImg(data.details.img, `images/${data.details.img}.jpg`, data.details.img)
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
      eventListener(notifMessageCloseButton,'click', 'closeNotificationMessage');
    });

    notifWindowCloseButton.appendChild(notifCloseSectionText);
    notifWindowCloseButton.className = "close-notif-section";
    notifCloseSectionText.appendChild(document.createTextNode("Close Notifications"));
    notifWindow.appendChild(notifWindowCloseButton);
  };

  const renderSocialStats = () => {
    socialStats().forEach(item => {
      const socialSection = document.querySelector(`.${item.name}`);
      const stats = styleElement('div', 'stats');
      const title = styleElement('p', `${item.name}-title`, item.name);
      const value = styleElement('p', `${item.name}-stat`, item.value);

      stats.appendChild(title);
      stats.appendChild(value);
      socialSection.appendChild(stats);
    });
  };

  const renderMembersActivity = () => {
    memberActivityData().forEach(item => {
      const memberSection = styleElement('div', 'members');
      const memberDetails = styleElement('div', 'member-details');
      const name = styleElement('p', 'name', `${item.member.firstName} ${item.member.lastName}`);
      const email = styleElement('p', 'email', item.member.email);
      const regDate = styleElement('p', 'date', item.member.regDate);
      const memberImg = styleImg('member-img', `images/${item.member.img}.jpg`, item.member.img);
      const activitySection = styleElement('div', 'members');
      const activityImg = styleImg('activity-img', `images/${item.member.img}.jpg`, item.member.img);
      const activityDetails = styleElement('div', 'activity-details');
      const target = (`${item.activity[0].thread}`).bold();
      const message = `${item.member.firstName} ${item.member.lastName} 
      ${item.activity[0].type}ed on ${target} ${item.activity[0].time} ago`;
      const activityMessage = styleElement("p", "activity-message", message, "");
      const nextImg = styleImg('next', 'https://img.icons8.com/ios/50/000000/more-than.png', 'next-icon');

      memberDetails.appendChild(name);
      memberDetails.appendChild(email);
      memberSection.appendChild(memberImg);
      memberSection.appendChild(memberDetails);
      memberSection.appendChild(regDate);
      activityDetails.appendChild(activityMessage);
      activityDetails.appendChild(nextImg);
      activitySection.appendChild(activityImg);
      activitySection.appendChild(activityDetails);
      document.querySelector('.mb').appendChild(memberSection);
      document.querySelector('.ac').appendChild(activitySection);
    });
  };

  renderUserDetails();
  renderMenuItems();
  renderNotifWindow(notifMessages);
  renderSocialStats();
  renderMembersActivity();

  eventListener(notifButton,'click', 'showNotificationWindow');
  eventListener(notifWindowCloseButton,'click', 'closeNotificationWindow');
  eventListener(menu,'click', 'navigateToSection');
  eventListener(searchInput,'input', 'searchMembers');
  eventListener(sendButton,'click', 'sendEmail');
});
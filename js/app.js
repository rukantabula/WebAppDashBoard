"use strict";
document.addEventListener("DOMContentLoaded", () => {
 const notificationBtn = document.querySelector('.bell-icon');
 const notifWindow = document.querySelector('.notify');
 const closeNotif = document.querySelector('.close-notification');
 const notifAlert = document.querySelector('.notif-alert');



 notificationBtn.addEventListener('click', e => {
   notifWindow.style.display = 'block';
   notifAlert.style.display = 'none';
 });

 closeNotif.addEventListener('click', e => {
  notifWindow.style.display = 'none';
 });
});

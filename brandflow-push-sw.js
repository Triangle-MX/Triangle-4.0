// [START initialize_firebase_in_sw]
// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/3.5.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/3.5.2/firebase-messaging.js');

self.addEventListener('push', function(event) {

    if (event.data) {
        const data = event.data.json();

        const title = data.notification.title;
        const body = data.notification.body;
        const icon = data.notification.icon;
        const action = data.notification.click_action;

        event.waitUntil(
            self.registration.showNotification(title, {
                body: body,
                icon: icon,
                requireInteraction: true,
                data: {
                    click_action: action
                }
                // "actions": [
                //     { "action": "yes", "title": "Yes", "icon": "images/yes.png" },
                //     { "action": "no", "title": "No", "icon": "images/no.png" }
                // ]
            })
        );
    }
});

self.addEventListener('notificationclick', function(event) {
  // // Android doesn’t close the notification when you click on it
  // See: http://crbug.com/463146
  event.notification.close();

  const notification = event.notification;
  const url = notification.data.click_action;
  // This looks to see if the current is already open and
  // focuses if it is
  event.waitUntil(clients.matchAll({
    type: 'window'
  }).then(function(clientList) {
    for (var i = 0; i < clientList.length; i++) {
      var client = clientList[i];
      if (client.url === '/' && 'focus' in client) {
        return client.focus();
      }
    }
    if (clients.openWindow) {
      return clients.openWindow(url);
    }
  }));
});
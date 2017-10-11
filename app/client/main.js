// Client entry point, imports all client code

import '/imports/startup/client';
import '/imports/startup/both';


Meteor.startup(() => {
	navigator.serviceWorker.register('/sw.js').then()
	.catch(error => console.log('ServiceWorker registration failed: ', err)); 
});

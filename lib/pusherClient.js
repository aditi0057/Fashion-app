// lib/pusherClient.js
import Pusher from 'pusher-js';

// Replace these values with your actual Pusher credentials
const PUSHER_APP_KEY = 'your-app-key';
const PUSHER_APP_CLUSTER = 'your-app-cluster';

const pusherClient = new Pusher(PUSHER_APP_KEY, {
    cluster: PUSHER_APP_CLUSTER,
    // Additional configuration options, if any
});

export { pusherClient };

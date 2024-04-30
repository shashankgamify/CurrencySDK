// Define a function to handle messages from any source
const handleMessage = (event) => {
    console.log('Message received in worker:', event.data);
    self.postMessage(`${event.data}  +  work done`);
};

// Add an event listener to listen for messages from any source
self.addEventListener('message', handleMessage);


// self.onmessage = (event: MessageEvent) => {
//     console.log('Received message in worker:', event.data);
//     // self.postMessage(result);
// };
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-analytics.js";

  const firebaseConfig = {
    apiKey: "AIzaSyBy6LBA7DWSwR0ycrskMe9agyUgRW0298k",
    authDomain: "clube-hellfire.firebaseapp.com",
    projectId: "clube-hellfire",
    storageBucket: "clube-hellfire.appspot.com",
    messagingSenderId: "223947095873",
    appId: "1:223947095873:web:cc11ce143919cf0fc32bc0",
    measurementId: "G-4RX1F7Z975"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  export default app
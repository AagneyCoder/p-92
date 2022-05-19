const firebaseConfig = {
    apiKey: "AIzaSyDpre-d8aw9emUYQ_Yd1GHm2bcmzjbiwlA",
    authDomain: "myversionofkwitter.firebaseapp.com",
    projectId: "myversionofkwitter",
    storageBucket: "myversionofkwitter.appspot.com",
    messagingSenderId: "854127766588",
    appId: "1:854127766588:web:97f35be335f33416d2e739"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  
  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code

   //End code
   });});}
getData();

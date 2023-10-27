  const firebaseConfig = {
    apiKey: "AIzaSyCsxGEZkviWPM7QwfRL93rvjquj5pO8a7Y",
    authDomain: "brand-t-shirt-ecommerce-d4ba5.firebaseapp.com",
    databaseURL: "https://brand-t-shirt-ecommerce-d4ba5-default-rtdb.firebaseio.com",
    projectId: "brand-t-shirt-ecommerce-d4ba5",
    storageBucket: "brand-t-shirt-ecommerce-d4ba5.appspot.com",
    messagingSenderId: "255562291441",
    appId: "1:255562291441:web:291f1367e0479905e83150"
  };

  //initialize firebase
  firebase.initializeApp(firebaseConfig);

  //reference your database
  firebase.database().ref('contactForm')
  var contactFormDB = firebase.database().ref("contactForm");

  document.getElementById("contactForm").addEventListener("submit", submitForm);

  function submitForm(e){
    e.preventDefault();

    var name = getElementVal('name');
    var emailid = getElementVal(email.id);
    var msgContent = getElementVal('msgContent')
  }

  const getElementVal = (id) => {
    return document.getElementById(id).value;

    console.log(name, emailid, msgContent);
  } 
import { database,firebase, googleAuthProvider } from "../firebase/firebase";

export const login = uid => ({
  type: "LOGIN",
  uid
});

export const startLogin = (login) => {
  return () => {
    const {email,password}=login;
    console.log(email,password)
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage)
      // ...
    });
  };
};

export const googleLogin = () => {
  return () => {
    return firebase.auth().signInWithPopup(googleAuthProvider);
  };
};


export const logout = () => ({
  type: "LOGOUT"
});

export const startLogout = () => {
  return () => {
    return firebase.auth().signOut();
  };
};

export const onRegister = (register ,password)=>{
  return () => {
    const email=register.email;
    // const password=register.password;
    console.log(password);
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
      console.log(error.message)
    });
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        console.log(register,user.uid);
        let uid=user.uid;
        firebase.firestore().collection("User").doc(uid).set(register)
        .then(function(docRef) {
          console.log("Document written with ID: ", docRef.id);
        })
        .catch(function(error) {
          console.error("Error adding document: ", error);
        })
      }; 
    }) 
  };
};
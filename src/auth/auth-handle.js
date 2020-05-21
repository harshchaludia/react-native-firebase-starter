import firebase from "firebase/app";
import "firebase/auth";

export const UserSignOut = () => {
  firebase.auth().signOut();
};

export const UserSignIn = async ({ name, email, password }) => {
  try {
    await firebase.auth().createUserWithEmailAndPassword(email, password);
    firebase.auth().currentUser.updateProfile({
      displayName: name
    });

    return {};
  } catch (error) {
    switch (error.code) {
      case "auth/email-already-in-use":
        return {
          error: "E-mail already in use."
        };
      case "auth/invalid-email":
        return {
          error: "Invalid e-mail address format."
        };
      case "auth/weak-password":
        return {
          error: "Password is too weak."
        };
      case "auth/too-many-requests":
        return {
          error: "Too many request. Try again in a minute."
        };
      default:
        return {
          error: "Check your internet connection."
        };
    }
  }
};

export const loginUser = async ({ email, password }) => {
  try {
    await firebase.auth().signInWithEmailAndPassword(email, password);
    return {};
  } catch (error) {
    switch (error.code) {
      case "auth/invalid-email":
        return {
          error: "It's an invalid email address format."
        };
      case "auth/user-not-found":
      case "auth/wrong-password":
        return {
          error: "It's an invalid email address or password."
        };
      case "auth/too-many-requests":
        return {
          error: "Try again in a minute."
        };
      default:
        return {
          error: "Check your connection."
        };
    }
  }
};

export const sendEmailWithPassword = async email => {
  try {
    await firebase.auth().sendPasswordResetEmail(email);
    return {};
  } catch (error) {
    switch (error.code) {
      case "auth/invalid-email":
        return {
          error: "It's an invalid email address format."
        };
      case "auth/too-many-requests":
        return {
          error: "Try again in a minute."
        };
        case "auth/user-not-found":
        return {
          error: "No such user exits with such Email ID."
        };
      default:
        return {
          error: "Check your connection."
        };
    }
  }
};

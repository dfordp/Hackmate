import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithPopup, GoogleAuthProvider,GithubAuthProvider } from "firebase/auth";
// import * as dotenv from "dotenv";

// dotenv.config();


const firebaseConfig = {
    apiKey: "AIzaSyBxW04er40-p9M0izU9qMQChWJEZP2n-rY",
    authDomain: "hackmate-62123.firebaseapp.com",
    projectId: "hackmate-62123",
    storageBucket: "hackmate-62123.appspot.com",
    messagingSenderId: "287787174086",
    appId: "1:287787174086:web:50cb829a067a3795faafc7",
    measurementId: "G-9RSDLCNZLS"
  };

  const app = initializeApp(firebaseConfig);

  const auth = getAuth();

  const googleProvider=new GoogleAuthProvider()

export const signInWithGoogle=()=>{
    signInWithPopup(auth,googleProvider).then((result)=>{

        const name = result.user.displayName
        const email = result.user.email
        const profilePic = result.user.photoURL
        localStorage.setItem("name",name)
        localStorage.setItem("email",email)
        localStorage.setItem("profilePic",profilePic)   
    }).catch((error) => {
        console.log(error);
    });

    navigatetoMain();
}

const githubProvider=new GithubAuthProvider();

export const signInWithGithub=()=>{
    signInWithPopup(auth,githubProvider).then((result)=>{
        
        const name=result.user.displayName;
        const email=result.user.email;
        const profilePic=result.user.photoURL

        localStorage.setItem("name",name)
        localStorage.setItem("email",email)
        localStorage.setItem("profilePic",profilePic)
    }).catch((error)=>{
        console.log(error);
    })
    navigatetoMain();

}
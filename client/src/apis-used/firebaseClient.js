import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider,GithubAuthProvider } from "firebase/auth";
// import * as dotenv from "dotenv";

// dotenv.config();

const firebaseConfig = {
    
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
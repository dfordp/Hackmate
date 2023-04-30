import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider,GithubAuthProvider } from "firebase/auth";
import axios from "axios";

const firebaseConfig = {
   
  };


  const app = initializeApp(firebaseConfig);

  const auth = getAuth();

  const googleProvider=new GoogleAuthProvider()


  const sendUserData = async (data) => {
    try{
        const res = await axios.post("http://localhost:8080/api/users/createUser", data )
        console.log(res);
    }
    catch(error){
        console.log(error);
    }
}

export const signInWithGoogle= ()=>{
    signInWithPopup(auth,googleProvider).then((result)=>{
        const name = result._tokenResponse.displayName
        const email = result._tokenResponse.email
        const userName = result._tokenResponse.email.split("@")[0]
        const avatar = result.user.photoURL
        const data ={
            name : name,
            email : email,
            userName : userName,
            avatar : avatar
        }

        sendUserData(data)
        // localStorage.setItem("name",name)
        // localStorage.setItem("email",email)
        // localStorage.setItem("profilePic",profilePic)   
        // localStorage.setItem("userName",userName)
    }).catch((error) => {
        console.log(error);
    });

}

const githubProvider=new GithubAuthProvider();

export const signInWithGithub=()=>{
    signInWithPopup(auth,githubProvider).then((result)=>{
        console.log(result);
        const name = result._tokenResponse.displayName
        const email = result._tokenResponse.email
        const userName = result._tokenResponse.screenName
        
        localStorage.setItem("name",name)
        localStorage.setItem("email",email)
        localStorage.setItem("userName",userName)
    }).catch((error)=>{
        console.log(error);
    })


}

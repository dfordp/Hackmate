import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider,GithubAuthProvider } from "firebase/auth";
// import { createUser } from "../../../server/controllers/user.controller";

const firebaseConfig = {
    
  };


  const app = initializeApp(firebaseConfig);

  const auth = getAuth();

  const googleProvider=new GoogleAuthProvider()

export const signInWithGoogle= ()=>{
    signInWithPopup(auth,googleProvider).then((result)=>{
        const userProfile={
            name : result._tokenResponse.displayName,
            email : result._tokenResponse.email,
            userName : result._tokenResponse.email.split("@")[0],
        }
      
        const saveUser = async (userProfile) => {
            if(userProfile){
                const res = await fetch("http:/localhost:8080/api/users",{
                    method:"POST",
                    headers:{
                        "Content-Type":"application/json"
                    },
                    body:JSON.stringify(userProfile)
                })
                console.log(res);
                const data = await res.json()
                if (res.status === 200) {
                    localStorage.setItem(
                        "user",
                        userProfile
                    )
                }
            }
        };
        saveUser(userProfile);
        // localStorage.setItem("name",name)
        // localStorage.setItem("email",email)
        // localStorage.setItem("profilePic",profilePic)   
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

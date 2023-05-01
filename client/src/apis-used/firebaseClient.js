import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider,GithubAuthProvider, reload } from "firebase/auth";
import axios from "axios";

const firebaseConfig = {
    
  };


  const app = initializeApp(firebaseConfig);

  const auth = getAuth();

  const googleProvider=new GoogleAuthProvider()
  const githubProvider=new GithubAuthProvider();


  const sendUserData = async (data) => {
    try{
        const res = await axios.post("http://localhost:8080/api/users/createUser", data )
        console.log(res.data);
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
        localStorage.setItem("name",name)
        localStorage.setItem("email",email)
        localStorage.setItem("profilePic",avatar)   
        localStorage.setItem("userName",userName)
        window.location.reload();
    }).catch((error) => {
        console.log(error);
    });

}


// export const signInWithGithub=()=>{
//     signInWithPopup(auth,githubProvider).then((result)=>{
//         const name = result._tokenResponse.displayName
//         const email = result._tokenResponse.email
//         const userName = result._tokenResponse.screenName
//         const avatar = result._tokenResponse.photoURL

//         const data = {
//             name : name,
//             email : email,
//             userName : userName,
//             avatar : avatar
//         }

//         sendUserData(data)
//         // localStorage.setItem("name",name)
//         // localStorage.setItem("email",email)
//         // localStorage.setItem("profilePic",avatar)
//         // localStorage.setItem("userName",userName)
//         // window.location.reload();
//     }).catch((error)=>{
//         console.log(error);
//     })


// }

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
        const res = await axios.post("http://localhost:8080/api/users/createUser", data );
        console.log(res.data);
    }
    catch(error){
        console.log(error);
    }
}

const getID = async (email) => {
    try{
        const res = await axios.get("http://localhost:8080/api/users/getALLUsers");
        console.log(res.data);
        const data = res.data.filter((user)=> user.email === email);
        return data[0]?._id
    }
    catch(error){
        console.log(error);
    }
};

export const signInWithGoogle = () => {
    signInWithPopup(auth,googleProvider).then(async(result)=>{
        const name = result._tokenResponse.displayName
        const email = result._tokenResponse.email
        const userName = result._tokenResponse.email.split("@")[0]
        const avatar = result.user.photoURL
        const data = {
            name : name,
            email : email,
            userName : userName,
            avatar : avatar
        }

        sendUserData(data)
        const id = await getID(data.email);
        localStorage.setItem("id", id)
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

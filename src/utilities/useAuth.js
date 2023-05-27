import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import auth from "../../firebase.config";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const useAuth=()=>{
  const navigate=useNavigate()
  const [user, setUser] = useState('')
  const [loading, setLoading] = useState(true)
const [errorMessage, setErrorMessage] = useState('')
const [updateName, setUpdateName] = useState(false)
const createNewUserWithEmail = (email, password, name) => {
  setLoading(true)
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      updateUserProfile(name)
      setUser(user);
      navigate('/')
    })
    .catch((error) => {
      const errorMessage = error.message;
      setErrorMessage(errorMessage)
    });
    setLoading(false)

}

const signInWithEmail = (email, password) => {
  setLoading(true)
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      if(user){
        navigate('')
      }
      setUser(user)
    })
    .catch((error) => {
      setErrorMessage(error.message);
      console.log(error)
    });
    setLoading(false)
}

const emailLogOut = () => {
  setLoading(true)
  signOut(auth).then(() => {
    navigate('/login')
  }).catch((error) => {
    setErrorMessage(error.message)
  });
  setLoading(false)
}

const updateUserProfile = (name) => {
  updateProfile(auth.currentUser, {
    displayName: name
  }).then(() => {
    setUpdateName(true)
  }).catch((error) => {
    setErrorMessage(error.message)
  });
}


useEffect(() => {
  setLoading(true)
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      setUser(user)
    } else {
      setUser('')
    }
    setLoading(false)
  });
}, [])

return {createNewUserWithEmail,signInWithEmail,emailLogOut,updateUserProfile,user,errorMessage,updateName,loading};
}


export default useAuth;


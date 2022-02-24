import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initilizeAuthentication from "../Pages/Login/Firebase/firebase.init";
initilizeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();


    const signInUsingGoogle = () => {
  return  signInWithPopup(auth, googleProvider)
           
    };

    const logOut = () => {
        signOut(auth)
            .then(() => {

            })
    }
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }
        });
        return () => unsubscribed;
    }, [])

    return {
        user,
        signInUsingGoogle,
        logOut
    }


};

export default useFirebase;


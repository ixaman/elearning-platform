import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../components/Login/Firebase/firebase.init";

initializeAuthentication()

const useFirebase = ()=> {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInWithGoogle = ()=> {
        setIsLoading(true)
        signInWithPopup(auth, googleProvider)
        .then(result => {
            const user = result.user;
            console.log(user)
        })
        .catch( error => setError(error.message))
        .finally( ()=> setIsLoading(false));

    }

    const createUserWithEmail = (email, password)=> {
        createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
            const user = result.user;
            setError('');
        })
        .catch(error => setError(error.message) );
    }

    const signInEmailPassword = (email, password) => {

        signInWithEmailAndPassword(auth,email,password)
        .then(result => {
            const user = result.user;
            console.log(user);
            setError('');

        })
        .catch(error => setError(error.message))

    }

    const logout = ()=> {
        setIsLoading(true);
        signOut(auth)
        .then( () =>{
            setUser({});
        } )
        .finally( ()=> setIsLoading(false)); 
    }

    useEffect( ()=> {
        onAuthStateChanged(auth, user => {
            if (user){
                setUser(user);
            }
            setIsLoading(false);
        } )
     }, [] )



    return {
        user,
        error,
        isLoading,
        signInWithGoogle,
        createUserWithEmail,
        signInEmailPassword,
        logout
    }

}

export default useFirebase;
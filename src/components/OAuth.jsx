import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";
import { useLocation, useNavigate } from "react-router-dom"
import { toast } from "react-toastify";
import { db } from '../firebase.config';
import googleIcon from '../assets/svg/googleIcon.svg'


function OAuth() {
    const navigate = useNavigate();
    const location = useLocation();

    const onGoogleClick = async () => {
        try {
            const auth = getAuth();
            const provider = new GoogleAuthProvider();
            const results = await signInWithPopup(auth, provider)
            const user = results.user;

            // Check user
            const docRef = doc(db, 'users', user.uid)
            const docSnap = await getDoc(docRef)

            // If user doesn't exist, create user
            if (!docSnap.exists()) {
                await setDoc(doc(db, 'users', user.uid), {
                    name: user.displayName,
                    email: user.email,
                    timestamp: serverTimestamp()
                })
            }
            navigate('/');
            toast.success('Success')
        } catch (error) {
            toast.error('Could not authenticate with Google')
            console.log(error);
        }
    }
    return (
        <div className="socialLogin">
            <p>Sign {location.pathname === '/sign-up' ? 'up' : 'in'} with </p>
            <button className="socialIconDiv" onClick={onGoogleClick}>
                <img src={googleIcon} alt="google" className="socialIconImg" />
            </button>

        </div>
    )
}

export default OAuth

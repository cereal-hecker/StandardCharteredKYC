import {app, auth} from "../firebase/firebase";
import { getFirestore, getDoc, setDoc, doc, } from "firebase/firestore";
import { signOut,sendEmailVerification } from "firebase/auth";

const db = getFirestore(app);
export default function DonePage() {
    
    const data = auth.currentUser;

    const handleUpdate = async () => {
        if (data.emailVerified != true){
            await sendEmailVerification(data);
        }
        await signOut(auth);
    };
    handleUpdate();

    return (
        <div className="flex justify-center items-center pt-[300px]">
            <h1 className="text-3xl font-bold">Your KYC has been completed! <br/> Look out for follow-up mails!</h1>
        </div>
    )
}
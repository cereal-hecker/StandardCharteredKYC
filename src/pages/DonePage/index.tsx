import {app, auth} from "../firebase/firebase";
import { getFirestore, getDoc, setDoc, doc, } from "firebase/firestore";
import { signOut,sendEmailVerification } from "firebase/auth";
import { useTranslation } from "react-i18next";

const db = getFirestore(app);
export default function DonePage() {
    
    const data = auth.currentUser;
    const { t } = useTranslation();
    const handleUpdate = async () => {
        if (data.emailVerified != true){
            await sendEmailVerification(data);
        }
        await signOut(auth);
    };
    handleUpdate();

    return (
        <div className="flex justify-center items-center text-center pt-[250px] w-full">
            <h2 className="text-3xl w-[600px] font-semibold"><div className="pb-4">{t('Congratulations!')}</div>{('Your KYC process has been successfully completed. Please check your email for further instructions.')}</h2>
        </div>
    )
}
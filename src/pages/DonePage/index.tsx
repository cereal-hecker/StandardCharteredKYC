import {app, auth} from "../firebase/firebase";
import { getFirestore, getDoc, setDoc, doc } from "firebase/firestore";

const db = getFirestore(app);
export default function DonePage() {


    const handleUpdate = async () => {
        const docPrev = doc(db, "PersonalDetails", data.email);
        var docSnap:any = await getDoc(docPrev);
        var curr = (await docSnap.data()) || {};
        curr["verified"] = "true";
        await setDoc(doc(db, "PersonalDetails", data.email), curr);
    };
    var data = auth.currentUser;

    return (
        <div className="flex justify-center items-center pt-[300px]">
            <h1 className="text-3xl font-bold">Your KYC has been completed! <br/> Look out for follow-up mails!</h1>
        </div>
    )
}
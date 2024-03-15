import React, { useState,useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import TextFieldCustom from '../../components/TextField';
import '../../components/Translations/translations';
import CameraFeed from '../../components/CameraFeed/CameraFeed';
import {app, auth} from "../firebase/firebase";
import { getFirestore, getDoc, setDoc, doc } from "firebase/firestore";

const db = getFirestore(app);


export default function PersonalDetails() {
  const { t } = useTranslation();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const data = auth.currentUser;
  const [email, setEmail] = useState(data.email);
  const [phoneNumber, setPhoneNumber] = useState('');
  const navigate = useNavigate();
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(document.createElement('canvas'));
  const [capturedImage, setCapturedImage] = useState<string | null>(null);

    const handleCapture = () => {
        const video = videoRef.current;
        const canvas = canvasRef.current;
        if (video && canvas) {
          const context = canvas.getContext('2d');
          if (context) {
            const rectX = video.videoWidth * 0.1;
            const rectY = video.videoHeight * 0.1;
            const rectWidth = video.videoWidth * 0.8;
            const rectHeight = video.videoHeight * 0.8;
    
            canvas.width = rectWidth;
            canvas.height = rectHeight;
    
            context.drawImage(video, rectX, rectY, rectWidth, rectHeight, 0, 0, rectWidth, rectHeight);
    
            const stream = video.srcObject as MediaStream;
            const tracks = stream.getTracks();
            tracks.forEach(track => track.stop());
    
            const imageDataUrl = canvas.toDataURL('image/png');
            setCapturedImage(imageDataUrl);
          }
        }
      };
    
      const handleRetake = () => {
        setCapturedImage(null);
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
          navigator.mediaDevices.getUserMedia({ video: true })
            .then((stream) => {
              const video = videoRef.current;
              if (video) {
                video.srcObject = stream;
                video.play();
              }
            })
            .catch((error) => {
              console.error("Error accessing the camera", error);
            });
        }
      };

    const handleSaveAndContinue = async () => {
        const docPrev = doc(db, "PersonalDetails", data.email);
        var docSnap:any = await getDoc(docPrev);
        var curr = (await docSnap.data()) || {};
        curr["first_name"] = firstName;
        curr["last_name"] = lastName;
        curr["phone_number"] = phoneNumber;
        curr["image"] = capturedImage;
        await setDoc(doc(db, "PersonalDetails", data.email), curr);
        navigate('/aadharcard');
    };

    return (
        <div className="flex px-16 pt-20 gap-10">
            <div className='w-1/2'>
                <img src="/assets/images/Rafiki.png" alt="logo" />
            </div>
            <div className="w-1/2">
                <h1 className="text-4xl font-bold mb-16">{t('Personal Details')}</h1>
                <h2>Take a photo</h2>
                <div className="flex items-center justify-around">
          {capturedImage ? (
            <img src={capturedImage} alt="Captured frame" className="border-3 border-gray-300 rounded-md" />
          ) : (
            <CameraFeed videoRef={videoRef} />
          )}
        </div>
                <div className="grid grid-cols-2 gap-4">
                
        
                    <TextFieldCustom
                        heading={t('Enter your first name')}
                        variableName="firstName"
                        value={firstName}
                        onChange={e => setFirstName(e.target.value)}
                        placeholder="John"
                    />
                    <TextFieldCustom
                        heading={t('Enter your last name')}
                        variableName="lastName"
                        value={lastName}
                        onChange={e => setLastName(e.target.value)}
                        placeholder="Doe"
                    />
                    <TextFieldCustom
                        heading={t('Enter your email')}
                        variableName="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        placeholder="johndoe72@gmail.com"
                    />
                    <TextFieldCustom
                        heading={t('Enter your phone number')}
                        variableName="phoneNumber"
                        value={phoneNumber}
                        onChange={e => setPhoneNumber(e.target.value)}
                        placeholder="123-456-7890"
                    />
                </div>
                <div className="flex justify-between items-center mt-5">
                  <button
                      type="button"
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                      onClick={handleSaveAndContinue}
                  >
                      {t('Save & Continue')}
                  </button>
          {capturedImage ? (
            <>
              <button onClick={handleRetake} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">{t('Retake')}</button>
            </>
          ) : (
            <button onClick={handleCapture} className="ml-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">{t('Capture Frame')}</button>
          )}
        </div>
            </div>
        </div>
    );
}

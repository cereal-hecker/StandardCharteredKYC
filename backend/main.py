from fastapi import FastAPI
from pydantic import BaseModel
from starlette.middleware.cors import CORSMiddleware
import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore_async

# Use a service account.
cred = credentials.Certificate('serviceAccount.json')

firebase = firebase_admin.initialize_app(cred)

db = firestore_async.client()


class PersonalDetails(BaseModel):
    name: str
    pan_card: str
    aadhar_card: int
    phone_number: int


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_headers=['*'],
    allow_methods=['*'],
    allow_origins=['*'],
)


@app.post('/process')
async def process(req: PersonalDetails):
    await db.collection("PersonalDetails").document(str(req.phone_number)).set({
        "name": req.name,
        "pan_card": req.pan_card,
        "aadhar_card": req.aadhar_card,
    })

    return req

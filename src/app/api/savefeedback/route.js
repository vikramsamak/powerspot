import { NextResponse } from "next/server";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, setDoc, doc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);

export async function POST(request, response) {
  try {
    const payload = await request.json();

    const feedback = {
      name: payload.name,
      email: payload.email,
      sub: payload.sub,
      msg: payload.msg,
    };

    const db = getFirestore();

    const docRef = doc(db, "feedback", feedback.name);

    await setDoc(docRef, feedback);

    return NextResponse.json(
      {
        msg: "Thank you for giving your valuable feedback",
      },
      { status: 200, statusText: "OK" }
    );
  } catch (error) {
    return NextResponse.json(
      {
        msg: "Something went wrong",
      },
      { status: 500, statusText: "Internal server error" }
    );
  }
}

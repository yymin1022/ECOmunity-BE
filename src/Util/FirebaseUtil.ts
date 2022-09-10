import { FirebaseApp, initializeApp } from "firebase/app";
import { collection, doc, Firestore, getDoc, getDocs, getFirestore, query,  updateDoc } from "firebase/firestore";

import { API_DATA, API_USER_INFO } from "./ApiUtil";

import dotenv from "dotenv";

dotenv.config();
const firebaseConfig = {
    apiKey: process.env.FB_API_KEY,
    authDomain: process.env.FB_AUTH_DOMAIN,
    projectId: process.env.FB_PROJECT_ID,
    appId: process.env.FB_APP_ID
};

let firebaseApp: FirebaseApp;
let firebaseDB: Firestore;

export const initFirebase = () => {
    firebaseApp =  initializeApp(firebaseConfig);
    firebaseDB = getFirestore();
};

export const getUserInfoDB = async (UID: string): Promise<API_DATA> => {
    const RESULT_DATA = await getFirebaseDB("profile", UID);

    return RESULT_DATA;
};

export const setUserInfoDB = async (UID: string, USER_INFO: API_USER_INFO): Promise<API_DATA> => {
    const RESULT_DATA = await setFirebaseDB("profile", UID, USER_INFO);

    return RESULT_DATA;
};

const getFirebaseDB = async (collection: string, document: string) => {
    const RESULT_DATA: API_DATA = {
        RESULT_CODE: 0,
        RESULT_MSG: "Ready",
        RESULT_DATA: {}
    }

    const fbDocument = await getDoc(doc(firebaseDB, collection, document));
    if(!fbDocument.exists()){
        RESULT_DATA.RESULT_CODE = 100;
        RESULT_DATA.RESULT_MSG = "No Such Database";
        return RESULT_DATA;
    }

    try{
        RESULT_DATA.RESULT_CODE = 200;
        RESULT_DATA.RESULT_MSG = "Success";
        RESULT_DATA.RESULT_DATA = fbDocument.data();
    }catch(error){
        RESULT_DATA.RESULT_CODE = 100;
        RESULT_DATA.RESULT_MSG = error as string;
    }

    return RESULT_DATA;
}

const setFirebaseDB = async (collection: string, document: string, updateData: object) => {
    const RESULT_DATA: API_DATA = {
        RESULT_CODE: 0,
        RESULT_MSG: "Ready",
        RESULT_DATA: {}
    }

    const fbDocument = doc(firebaseDB, collection, document);
    const fbDocumentRef = await getDoc(fbDocument);
    if(fbDocumentRef.exists()){
        RESULT_DATA.RESULT_CODE = 100;
        RESULT_DATA.RESULT_MSG = "No Such Database";
        return RESULT_DATA;
    }

    try{
        RESULT_DATA.RESULT_CODE = 200;
        RESULT_DATA.RESULT_MSG = "Success";

        await updateDoc(fbDocument, updateData);
    }catch(error){
        RESULT_DATA.RESULT_CODE = 100;
        RESULT_DATA.RESULT_MSG = error as string;
    }

    return RESULT_DATA;
}
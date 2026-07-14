import { Timestamp } from "firebase/firestore";

export interface UserInterface {
    uid: string;
    email: string | null;
    displayName: string | null;
    photoURL: string | null;
    emailVerified: boolean;
    phoneNumber: string | null;
    userDocument?: UserDocument
}

export  interface UserDocument {
    uid: string,
    email: string,
    how_did_hear: string
    createdAt: Timestamp
    onboardingIsCompleted: boolean
}
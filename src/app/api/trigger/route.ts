import { NextRequest, NextResponse } from "next/server";
import webpush from "web-push";

const keys = {
  publicKey:
    "BNTUAVX76ob-ayTCAV6FCu_Sc2MarHxE8xKvlPa_6t4EFW0rlXB01OwO-DALmUPDz29jPROmVosy5rr4gFhWjy8",
  privateKey: "S9LY82ydI_BQARkhlBIvD-MKSgHbMIX7AKJHg6uFNV8",
};

export function GET(req: NextRequest) {
  webpush.setVapidDetails(
    "mailto:example@yourdomain.org",
    keys.publicKey,
    keys.privateKey,
  );

  // This is the same output of calling JSON.stringify on a PushSubscription
  const pushSubscription = {
    endpoint:
      "https://fcm.googleapis.com/fcm/send/dS-byQBUQwY:APA91bHE0jA43-CnCcwCLkrHcErV0aLm6eobaz9MLDoMquRx_E-1qZwJY46BP_W5ig5yH4AlPBW19kvIlaemMXseLmB0ZB1lumEtR2w8e0qRkb3fDNvZOpC3rzrS9Ex_J3MLd_Fe3XIJ",
    expirationTime: null,
    keys: {
      p256dh:
        "BAYDpR5AT40BPc1a-5NJXO1hbd8zpDXsigazMvKU7vIUF6mbxrRJbreR3z9BFQJN1knLyDxr7rqaf_EFbGQtVcY",
      auth: "3ShMAucZ7xqno7mfMpldsA",
    },
  };

  webpush.sendNotification(pushSubscription, "Your Push Payload Text");
  return NextResponse.json({ success: true });
}

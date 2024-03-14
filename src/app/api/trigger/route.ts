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
    endpoint: ".....",
    keys: {
      auth: ".....",
      p256dh: ".....",
    },
  };

  webpush.sendNotification(pushSubscription, "Your Push Payload Text");
  NextResponse.json({ success: true });
}

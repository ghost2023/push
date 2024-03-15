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
      "https://fcm.googleapis.com/fcm/send/cN1IPBfUrbk:APA91bGCxoEMrU0Sjx-EqV8bmks-HllyerxikqIZ35Pbk4QtWrtD9w6-8QocmISb7nhQDabJ_b9Ky7jTZREQ6LuogTumeOL4Kjy-6z3R4vrWKHMMPFDxC8nfyPQcIRRen0Nt9VZmUrkx",
    expirationTime: null,
    keys: {
      p256dh:
        "BLU06z_fR51HBKHjrHStGXG-cpKwYT2h3kUcZ1wUJIQZ-uY9k4jvvpVih75pstNnlZQudpARlf7CRsVNZlQAPf4",
      auth: "kBEM1ggz2tGJH5E9vKoFpg",
    },
  };

  webpush.sendNotification(pushSubscription, "Your Push Payload Text");
  return NextResponse.json({ success: true });
}

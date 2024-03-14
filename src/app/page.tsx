"use client";

export default function Home() {
  async function subscribe() {
    let sw = await navigator.serviceWorker.ready;
    let push = await sw.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey:
        "BNTUAVX76ob-ayTCAV6FCu_Sc2MarHxE8xKvlPa_6t4EFW0rlXB01OwO-DALmUPDz29jPROmVosy5rr4gFhWjy8",
    });
    console.log(JSON.stringify(push));
  }

  if ("serviceWorker" in navigator) {
    addEventListener("load", async () => {
      if (typeof navigator == "undefined") return;
      let sw = await navigator.serviceWorker.register("./sw.js");
      console.log(sw);
    });
  }

  return (
    <main className="">
      <button onClick={subscribe}>Subscribe</button>
    </main>
  );
}

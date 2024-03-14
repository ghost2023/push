"use client";

export default function Home() {
  async function subscribe() {
    let sw = await navigator.serviceWorker.ready;
    let push = await sw.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey:
        "BBZY7Q3KEtZArAAWMLi_qzWHbH4vAoqPpIXnRhmlUaw0PVs1Kt_2fgLhuaVI5i8MWASBKx3d6W6UoH2U3qChw9U",
    });
    console.log(JSON.stringify(push));
  }

  if ("serviceWorker" in navigator) {
    addEventListener("load", async () => {
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

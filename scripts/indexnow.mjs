// Script to submit portfolio URLs to IndexNow (Bing, Yandex, Seznam, Naver)
const host = "rayankoussa.vercel.app";
const key = "ef660ab840edffd4cefa4f2bc043f61f";
const keyLocation = `https://${host}/${key}.txt`;

const urlList = [
  `https://${host}/en`,
  `https://${host}/fr`,
  `https://${host}/en/projects`,
  `https://${host}/fr/projects`,
  `https://${host}/en/contact`,
  `https://${host}/fr/contact`,
];

async function submitIndexNow() {
  console.log(`📡 Submitting ${urlList.length} URLs to IndexNow...`);

  const payload = {
    host,
    key,
    keyLocation,
    urlList,
  };

  try {
    const res = await fetch("https://api.indexnow.org/indexnow", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(payload),
    });

    if (res.status === 200 || res.status === 202) {
      console.log(`✅ Success! Status: ${res.status} ${res.statusText}`);
      console.log(`🚀 All URLs submitted to Bing, Yandex, Naver, and Seznam engines.`);
    } else {
      const text = await res.text();
      console.error(`⚠️ IndexNow responded with ${res.status} ${res.statusText}: ${text}`);
    }
  } catch (err) {
    console.error("❌ Failed to reach IndexNow API:", err);
  }
}

submitIndexNow();

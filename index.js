const express = require("express");
const app = express();

app.post("/api/v1/patches/check", (req, res) => {
  console.log("== patches check req" + req);
  res.send({
    message: "ok",
    patch_available: true,
    patch: 
      {
        number: 2,
        hash: "7cfe5a2e51dea978203b682df675cd103f015b467ceb2233d2ad376693b92f99",
        download_url:"https://github.com/hungnqptit/test_sb/releases/download/v2/dlc.vmcode"
      }
    ,
    rolled_back_patch_numbers: []
  });
});
app.get("/api/v1/apps", (req, res) => {
  console.log("== /api/v1/apps check req" + req);
  res.send({
   apps: [
     {
        app_id: "457789c6-f756-4650-a3e1-06da8d2032fc",
        display_name: "codepush_demo",
        latest_release_version: "1.0.0",
        latest_patch_number: 1,
        created_at: new Date("2023-01-01T00:00:00Z"),
        updated_at: new Date("2023-06-01T00:00:00Z"),
      }
   ]
  });
});
app.get("/", function (req, res) {
  console.log("== root get req" + req);
  res.send("OK");
});
app.post("/", function (req, res) {
  console.log("== root post req" + req);
  res.send("OK");
});
app.post("/api/v1/patches/events", (req, res) => {
  console.log("== patches events req" + req);
  res.send('OK')
})
const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
app.get("/api/v1/apps/28bf72f7-dc01-4159-b9ae-8f9ce191bd5c/releases", (req, res) => {
  console.log("== release patches request", req);
  res.send({ releases: [
    {
      id: 1,
      app_id: "457789c6-f756-4650-a3e1-06da8d2032fc",
      version: "1.0.0",
      flutter_revision: "30c3f3e73b9db8fbf8d9dd57724171d4194c4915",
      flutter_version: "3.27.4",
      display_name: "codepush_demo",
      platform_statuses: { "android" : "active" },
      created_at: new Date("2023-01-01T00:00:00Z"),
      updated_at: new Date("2023-06-01T00:00:00Z"),
      notes: "Test code push ne hehe",
    }
  ] });
});
app.get("/api/v1/apps/28bf72f7-dc01-4159-b9ae-8f9ce191bd5c/releases/1/artifacts", (req, res) => {
  console.log("== release patches request", req);
  res.send({ artifacts: [
    {
      id: 0,
      release_id: 1,
      arch: "aarch64",
      platform: "android",
      url: "https://github.com/hungnqptit/test_sb/releases/download/v1/app-release.aab",
      hash: "44575fb35dde8a0521f9cd3b7fb66536d3518294",
      size: 42,
      podfile_lock_hash: null,
      can_sideload: true
    }
  ] });
});

const express = require("express");
const app = express();

app.post("/api/v1/patches/check", (req, res) => {
  console.log("== patches check req" + req);
  res.send({
    message: "ok",
    patch_available: true,
    patch: 
      {
        number: 1,
        hash: "9ab68f08776723442542f1cfa78fad357fe3b6ab34df263373439d9ed744477d",
        // download_url:
        //  "https://raw.githubusercontent.com/huy2368/test-code-push/refs/heads/develop/dlc.vmcode",
        download_url:"https://cdn.shorebird.cloud/api/v1/patches/28bf72f7-dc01-4159-b9ae-8f9ce191bd5c/android/aarch64/bf009ca7/dlc.vmcode"
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
        app_id: "28bf72f7-dc01-4159-b9ae-8f9ce191bd5c",
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
    id: "1",
    appId: "28bf72f7-dc01-4159-b9ae-8f9ce191bd5c",
    version: "1.0.0",
    flutterRevision: "a9d3aa6a2a71c0f7581dc81f3e2e787233ed7b92",
    flutterVersion: "3.38.5",
    displayName: "codepush_demo",
    platformStatuses: { "android" : "active" },
    created_at: new Date("2023-01-01T00:00:00Z"),
    updated_at: new Date("2023-06-01T00:00:00Z"),
    notes: "Test code push ne hehe",
  ] });
});

const fs = require("fs");

const originalNames = [
  "lesson153",
  "lesson154",
  "lesson155",
  "lesson156",
  "lesson157",
  "lesson158",
  "lesson159",
  "lesson160",
  "lesson161",
  "lesson162",
  "lesson163",
  "lesson164",
  "lesson165",
  "lesson166",
  "lesson167",
  "lesson168",
  "lesson169",
  "lesson170",
  "lesson171",
  "lesson172",
  "lesson173",
  "lesson174",
  "lesson175",
  "lesson176",
  "lesson177",
  "lesson178",
  "lesson179",
  "lesson180",
  "lesson181",
  "lesson182",
  "lesson183",
  "lesson184",
  "lesson185",
  "lesson186",
  "lesson187",
  "lesson188",
  "lesson189",
  "lesson190",
  "lesson191",
  "lesson192",
  "lesson193",
  "lesson194",
  "lesson195",
];

const repalceNames = [
  "153 Testing React Apps Welcome",
  "154 Simple Test with ReactDOM",
  "155 Render Counter Component Solution 1",
  "156 Test Counter Component Solution 2",
  "157 Increment and Decrement Buttons Solution 3",
  "158 Cleaning up Test Environments Solution 4",
  "159 Add use dispatchEvent Extra Credit Solution 1",
  "160 Simple Test with React Testing Library",
  "161 Rendering Solution 1",
  "162 Firing Events Solution 2",
  "163 Accretions Extra Credit Solution 1",
  "164 Avoid Implementation Details",
  "165 Screen Utility Solution",
  "166 Browser Interactions  Extra Credit Solution 1",
  "167 Form Testing",
  "168 Exposes a Debug Method to Test Elements Solution 1",
  "169 Jest Mock Solution 2",
  "170 Abstract Variables Extra Credit Solution 1",
  "171 Jest Mock Functions Extra Credit Solution 2",
  "172 Generate Test Data Extra Credit Solution 3",
  "173 Allow for Overrides Extra Credit Solution 4",
  "174 Mocking HTTP Requests",
  "175 Mock Service Worker Solution 1",
  "176 Mocked Responses Solution 2",
  "177 Reuse Server Request Handlers Extra Credit Solution 1",
  "178 Unhappy Path Extra Credit Solution 2",
  "179 Use Inline Snapshots Extra Credit Solution 3",
  "180 Use One-off Server Handlers Extra Credit Solution 4",
  "181 Mocking Browser APIs and Modules",
  "182 Mock Geolocation Solution 1",
  "183 Act Function Solution 2",
  "184 Mock the module Extra Credit Solution 1",
  "185 Context and Custom Render Method",
  "186 Wrapper Component Solution",
  "187 Dark Theme Extra Credit Solution 1",
  "188 Render Method Extra Credit Solution 2",
  "189 App Test Utils Extra Credit Solution 3",
  "190 Testing Custom Hooks",
  "191 Test Functionality of Custom Hook Solution",
  "192 Fake Component Extra Credit Solution 1",
  "193 Setup Function Extra Credit Solution 2",
  "194 Using React-Hooks Testing Library Extra Credit Solution 3",
  "195 Testing React Apps Outro",
];

let textToSave = ``;
const len = originalNames.length;
for (let i = 0; i < len; i++) {
  textToSave += `get-childitem *.mp4 | foreach { rename-item $_ $_.Name.Replace("${originalNames[i]}", "${repalceNames[i]}") }\n`;
  console.log(
    `get-childitem *.mp4 | foreach { rename-item $_ $_.Name.Replace("${originalNames[i]}", "${repalceNames[i]}") }`
  );
}
console.log(textToSave);

fs.writeFile("new-names.txt", textToSave, function (err) {
  if (err) throw err;
  console.log("Saved!");
});

// const lessonNames = [];

// for (let i = 153; i < 196; i++) {
//   lessonNames.push(`lesson${i}`);
// }

// console.log(lessonNames);

const numberedLessons = [];
for (let i = 0, j = 153; i < target.length, j < 196; i++, j++) {
  numberedLessons.push(`${j} ${target[i]}`);
}
console.log(numberedLessons);

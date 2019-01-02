import { User } from "../shared/foo";

const users: User[] = [
  {
    id: "t.string",
    role: "user",
    hall: "t.string",
    code: "t.union([t.string, t.number])",
    commenting: false,
    enableCommenting: false,
    fullName: "t.string",
    handRaised: false,
    lastSeen: "t.union([t.string, t.undefined])",
    online: 1,
    status: "watching",
    viewerBuild: "t.string"
  }
];

users.forEach(user => {
  console.log(user);
});

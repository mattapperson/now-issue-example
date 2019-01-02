import * as t from "io-ts";

export const RuntimeUser = t.type({
  id: t.string,
  role: t.literal("user"),
  hall: t.string,
  code: t.union([t.string, t.number]),
  commenting: t.boolean,
  enableCommenting: t.boolean,
  fullName: t.string,
  handRaised: t.boolean,
  lastSeen: t.union([t.string, t.undefined]),
  online: t.number,
  status: t.union([
    t.literal("offline"),
    t.literal("online"),
    t.literal("watching")
  ]),
  viewerBuild: t.string
});

export interface User extends t.TypeOf<typeof RuntimeUser> {}

export const RuntimeHall = t.type({
  role: t.literal("hall"),
  email: t.union([t.string, t.undefined]),
  id: t.string,
  code: t.union([t.string, t.number]),
  gCommenting: t.boolean,
  name: t.string,
  podiumId: t.string,
  phone: t.union([t.number, t.undefined])
});

console.log("here");
export interface Hall extends t.TypeOf<typeof RuntimeHall> {}

import fs from "fs";

const userIdPath = "login_id.txt";
const userDataPath = "login.csv";

export class UserService {
  constructor() {}

  getAllUserData = () => {
    const fileData = fs.readFileSync(userDataPath, "utf-8");
    interface User {
      id: string;
      username: string;
      password: string;
    }
    const userData: User[] = fileData.split("\n").map((user) => {
      const userInfo = user.split(",");
      return {
        id: userInfo[0],
        username: userInfo[1],
        password: userInfo[2],
      };
    });

    return userData;
  };

  addUser = (username: string, password: string) => {
    let userId = parseInt(fs.readFileSync(userIdPath, "utf-8"));
    const newUserData = [userId++, username, password].join(",");
    fs.writeFileSync(userDataPath, "\n" + newUserData, { flag: "a" });
    fs.writeFileSync(userIdPath, userId + "", { flag: "w" });
  };
}

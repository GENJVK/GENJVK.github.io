import { Request, Response } from "express";
import { UserService } from "./UserService";

export class UserController {
  constructor(private userService: UserService) {}

  login = (req: Request, res: Response) => {
    try {
      const { username, password } = req.body;
      const userData = this.userService.getAllUserData();

      const user = userData.find((user) => user.username === username);

      const loginSuccess = user?.password === password;

      if (!loginSuccess) {
        res.status(400).json({ message: "incorrect username or password" });
        return;
      }

      res.json({ message: "success" });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };

  register = (req: Request, res: Response) => {
    try {
      const { username, password } = req.body;

      const userData = this.userService.getAllUserData();
      const user = userData.find((user) => user.username === username);
      if (user) {
        res.json({ message: "username has be used" });
        return;
      }

      this.userService.addUser(username, password);
      res.json({ message: "success" });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
}

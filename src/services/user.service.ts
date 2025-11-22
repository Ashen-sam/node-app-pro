import { UserRepository } from "../repositories/user.repository";

const userRepository = new UserRepository();

export class UserService {
  async getUsers() {
    return await userRepository.getAllUsers();
  }

  async getUserById(id: number) {
    return await userRepository.getUserById(id);
  }

  async createUser(name: string, email: string, password: string) {
    return await userRepository.createUser(name, email, password);
  }
}

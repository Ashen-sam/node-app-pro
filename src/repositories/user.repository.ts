import { supabase } from "../config/supabaseClient";
import { User } from "../models/user.model";

export class UserRepository {
  async getAllUsers(): Promise<User[]> {
    const { data, error } = await supabase.from("users").select("*");

    if (error) throw new Error(error.message);
    return data as User[];
  }

  async getUserById(id: number): Promise<User | null> {
    const { data, error } = await supabase
      .from("users")
      .select("*")
      .eq("user_id", id)
      .single();

    if (error) throw new Error(error.message);
    return data as User;
  }

  async createUser(
    name: string,
    email: string,
    password: string
  ): Promise<User> {
    const { data, error } = await supabase
      .from("users")
      .insert([{ name, email, password }])
      .select()
      .single();

    if (error) throw new Error(error.message);
    return data as User;
  }
}

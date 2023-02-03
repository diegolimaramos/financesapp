import { hash } from "bcryptjs";
import prismaClient from "../../prisma";

interface UserRequest {
  name: string;
  email: string;
  phone: string;
  password: string;
  balance?: number;
}

class CreateUserService {
  async execute({ name, email, phone, password, balance = 0 }: UserRequest) {
    if (!email) {
      throw new Error("Email incorrect");
    }

    const userAlreadyExists = await prismaClient.user.findFirst({
      where: {
        email: email,
      },
    });

    if (userAlreadyExists) {
      throw new Error("User already exists");
    }

    const passwordHash = await hash(password, 8);

    const user = await prismaClient.user.create({
      data: {
        name: name,
        email: email,
        phone: phone,
        password: passwordHash,
        balance,
      },
      select: {
        id: true,
        name: true,
        email: true,
        phone: true,
        balance: true,
        created_at: true,
        updated_at: true,
      },
    });

    return user;
  }
}

export { CreateUserService };

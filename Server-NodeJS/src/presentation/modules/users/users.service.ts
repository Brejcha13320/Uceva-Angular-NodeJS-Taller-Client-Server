import { UserEngineering, User } from "../../../domain/interfaces/user.interface";
import { faker } from '@faker-js/faker';

export class UsersService {

  private UserEngineerings: UserEngineering[] = [
    'Sistemas',
    'Electronica',
    'Biomedica',
    'Industrial',
    'Ambiental',
  ];

  public async getAllUsers(countUsers: number) {
    const users: Promise<User>[] = [];
    for (let i = 1; i <= countUsers; i++) {
      users.push(this.generateUser(i));
    }
    return Promise.all(users);
  }

  private generateUser(id: number): Promise<User> {
    return Promise.resolve({
      id,
      name: faker.person.firstName(),
      lastName: faker.person.lastName(),
      age: faker.number.int({ min: 18, max: 65 }),
      email: faker.internet.email(),
      engineering: faker.helpers.arrayElement(this.UserEngineerings),
    })
  }

}
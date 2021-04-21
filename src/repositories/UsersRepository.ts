import { EntityRepository, Repository } from 'typeorm';
import { User } from '../models/entities/User';

@EntityRepository(User)
export class UsersRepository extends Repository<User> { }

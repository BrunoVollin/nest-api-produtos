import { ClientSession, Model, Schema as MongooseSchema } from 'mongoose';
import { User } from '../entities/user.entity';
import { CreateUserDto } from '../modules/user/dto/createUser.dto';
export declare class UserRepository {
    private readonly userModel;
    constructor(userModel: Model<User>);
    createUser(createUserDto: CreateUserDto, session: ClientSession): Promise<any>;
    getUserById(id: MongooseSchema.Types.ObjectId): Promise<any>;
    getUserByEmail(email: string): Promise<any>;
}

import { Response } from 'express';
import { Connection, Schema as MongooseSchema } from 'mongoose';
import { CreateUserDto } from './dto/createUser.dto';
import { UserService } from './user.service';
export declare class UserController {
    private readonly mongoConnection;
    private userService;
    constructor(mongoConnection: Connection, userService: UserService);
    createUser(createUserDto: CreateUserDto, res: Response): Promise<Response<any, Record<string, any>>>;
    getCompanyById(id: MongooseSchema.Types.ObjectId, res: Response): Promise<Response<any, Record<string, any>>>;
}

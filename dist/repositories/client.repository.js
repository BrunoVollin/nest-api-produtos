"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientRepository = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const client_entity_1 = require("../entities/client.entity");
let ClientRepository = class ClientRepository {
    constructor(clientModel) {
        this.clientModel = clientModel;
    }
    async createClient(createClientDto, session) {
        let client = await this.getClientByName(createClientDto.name);
        if (client) {
            throw new common_1.ConflictException('Client Already Exists!');
        }
        client = new this.clientModel({
            name: createClientDto.name,
            contactNumber: createClientDto.contactNumber,
            user: createClientDto.userId,
        });
        try {
            client = await client.save({ session });
        }
        catch (error) {
            throw new common_1.InternalServerErrorException('Error al consultar la BD', error);
        }
        return client;
    }
    async getClients(query) {
        let from = query.from || 0;
        from = Number(from);
        let limit = query.limit || 0;
        limit = Number(limit);
        let clients;
        try {
            if (limit === 0) {
                clients = await this.clientModel
                    .find()
                    .populate('client')
                    .skip(from)
                    .sort({ createdAt: -1 })
                    .exec();
            }
            else {
                clients = await this.clientModel
                    .find()
                    .populate('client')
                    .skip(from)
                    .limit(limit)
                    .sort({ createdAt: -1 })
                    .exec();
            }
            let response;
            if (clients.length > 0) {
                response = {
                    ok: true,
                    data: clients,
                    message: 'Get Clients Ok!',
                };
            }
            else {
                response = {
                    ok: true,
                    data: [],
                    message: 'No hay clientes',
                };
            }
            return response;
        }
        catch (error) {
            throw new common_1.InternalServerErrorException('Error al intentar consultar los clientes', error);
        }
    }
    async getClientById(id) {
        let client;
        try {
            client = await this.clientModel.findById(id).exec();
        }
        catch (error) {
            throw new common_1.InternalServerErrorException('No existe el registro con id' + id, error);
        }
        if (!client) {
            throw new common_1.NotFoundException('The client with this id does not exist');
        }
        return client;
    }
    async getClientByName(name) {
        let client;
        try {
            client = await this.clientModel.find({ name });
        }
        catch (error) {
            throw new common_1.InternalServerErrorException('Error connecting to MongoDB', error);
        }
        return client;
    }
};
ClientRepository = __decorate([
    __param(0, (0, mongoose_1.InjectModel)(client_entity_1.Client.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ClientRepository);
exports.ClientRepository = ClientRepository;
//# sourceMappingURL=client.repository.js.map
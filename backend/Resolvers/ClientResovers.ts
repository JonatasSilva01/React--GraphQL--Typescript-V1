import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { Client } from "../Models/Client";
import {
  CreateClientInput,
  EditiClientInput,
} from "../InputClient/InputClient";
import { ClientMongoService } from "../data/Service/ClientService";

@Resolver()
export class ClientResolver {
  @Query(() => [Client])
  async clients() {
    return await ClientMongoService.find();
  }

  @Query(() => Client)
  async clientId(@Arg("id") id: string) {
    return await ClientMongoService.findOne({ _id: id });
  }

  @Mutation(() => Client)
  async createClient(
    @Arg("createClientObject") createClientObject: CreateClientInput
  ) {
    const { name, adress, cpf, email, tel } = createClientObject;

    return await ClientMongoService.create({
      name,
      adress,
      cpf,
      email,
      tel,
    });
  }

  @Mutation(() => Client)
  async editClient(
    @Arg("editClientObject") editiClientObject: EditiClientInput
  ) {
    const client = { ...editiClientObject };

    await ClientMongoService.updateOne({ _id: client.id }, client);

    return client;
  }

  @Mutation(() => String)
  async deleteOneClient(@Arg("id") id: string) {
    await ClientMongoService.deleteOne({ _id: id });
    return id;
  }
}

import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { Client } from "../Models/Client";
import { CreateClientInput } from "../InputClient/InputClient";
import { ClientMongoService } from "../data/Service/ClientService";

@Resolver()
export class ClientResolver {
  @Query(() => [Client])
  async clients() {
    return await ClientMongoService.find();
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
}

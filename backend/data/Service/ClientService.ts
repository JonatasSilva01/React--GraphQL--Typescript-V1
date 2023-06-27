import mongoose from "mongoose";

const schema = new mongoose.Schema({
  name: String,
  email: String,
  tel: String,
  adress: String,
  cpf: String,
});

export const ClientMongoService = mongoose.model("Client", schema);

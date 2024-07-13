import { mergeTypeDefs } from "@graphql-tools/merge";
import userTypeDef from "./user.typeDef";
import transactionTypeDef from "./transaction.typeDef";

const mergedTypeDefs = mergeTypeDefs([userTypeDef, transactionTypeDef]);

export default mergedTypeDefs;
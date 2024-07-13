import { mergeResolvers } from "@graphql-tools/merge";
import userResolver from "./user.resolver";
import transactionResolver from "./transaction.resolver";

const mergedResolvers = mergeResolvers([userResolver, transactionResolver]);

export default mergedResolvers;    // to make the code more readable
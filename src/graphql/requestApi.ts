import {appolloClient} from "../../App";
import {LOGIN_WITH_EMAIL_MUTATION} from "./mutations";

export const memberLoginRequest = async () => {
  return appolloClient
    .query({
      query: LOGIN_WITH_EMAIL_MUTATION,
      variables: {
        email: "ege@akyurek.com",
        password: "123456",
      },
    })
    .then((response) => response);
};

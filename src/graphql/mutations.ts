import {gql} from "@apollo/client";

const LOGIN_WITH_EMAIL_MUTATION = gql`
  mutation loginWithEmail($email: EmailAddress!, $password: NonEmptyString!) {
    loginWithEmail(email: $email, password: $password) {
      user {
        id
        email
        name
        facebookId
        googleId
        appleId
      }
      accessToken
      refreshToken
    }
  }
`;

const SIGN_UP_WITH_EMAIL_MUTATION = gql`
  mutation signUpWithEmail(
    $name: NonEmptyString!
    $email: EmailAddress!
    $password: Password!
  ) {
    signUpWithEmail(name: $name, email: $email, password: $password) {
      user {
        id
        email
        name
        facebookId
        googleId
        appleId
      }
      accessToken
      refreshToken
    }
  }
`;

const CREATE_CARD_MUTATION = gql`
  mutation createCard($name: NonEmptyString!) {
    createCard(
      data: {
        name: $name
        minPrice: null
        maxPrice: null
        locationTypeIds: []
        locationCuisineTypeIds: []
        dishTypeIds: []
        courseTypeIds: []
        dietIds: []
        excludedIngredientIds: []
      }
    ) {
      id
      name
    }
  }
`;

const SHARE_CARD_MUTATION = gql`
  mutation shareCard($id: ID!) {
    shareCard(id: $id)
  }
`;

const DUPLICATE_CARD_MUTATION = gql`
  mutation duplicateCard($id: ID!) {
    duplicateCard(id: $id) {
      id
      name
    }
  }
`;

const DELETE_CARD_MUTATION = gql`
  mutation deleteCard($id: ID!) {
    deleteCard(id: $id)
  }
`;

export {
  LOGIN_WITH_EMAIL_MUTATION,
  SIGN_UP_WITH_EMAIL_MUTATION,
  CREATE_CARD_MUTATION,
  SHARE_CARD_MUTATION,
  DUPLICATE_CARD_MUTATION,
  DELETE_CARD_MUTATION,
};

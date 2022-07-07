import {NativeStackScreenProps} from "@react-navigation/native-stack";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Root: undefined;
  ModalScreen: undefined;
  GuestScreen: undefined;
  SignUpScreen: undefined;
  LoginScreen: undefined;
  GuestNavigator: undefined;
  HomeNavigator: undefined;
  HomeScreen: undefined;
  ActionsModal: {item: any};
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;

export type LoginForm = {
  email: string;
  password: string;
};

export type SignUpForm = {
  name: string;
  email: string;
  password: string;
};

export type CreateCardForm = {
  name: string;
};

export type Card = {
  id: string;
  name: string;
  __typename: string;
};

export type CardList = Card[];

export type LoginWithEmailResponseModel = {
  accessToken?: string;
  refreshToken?: string;
  user: User;
};

export type User = {
  id: string;
  name: string;
  email: string;
  appleId?: string;
  facebookId?: string;
  googleId?: string;
};

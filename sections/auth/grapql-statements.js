import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation ($input: LoginDTO!) {
    login(input: $input) {
      accessToken
      action
      message
    }
  }
`;

export const REGISTER = gql`
  mutation ($input: RegisterDTO!) {
    registerUser(input: $input) {
      action
      message
    }
  }
`;


export const FORGOT_PASSWORD = gql`
  mutation ($input: ForgetPasswordDTO!) {
    forgotPassword(input: $input) {
      action
      message
    }
  }
`;

export const RESET_PASSWORD = gql`
  mutation ($input: ResetPasswordDTO!) {
    resetPassword(input: $input) {
      action
      message
    }
  }
`;

export const VERIFY_EMAIL = gql`
  mutation ($input: VerifyEmailDTO!) {
    verifyEmail(input: $input) {
      action
      message
    }
  }
`;

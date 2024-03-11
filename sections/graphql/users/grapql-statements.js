import { gql } from '@apollo/client';

export const CREATE = gql`
  mutation ($input: UserInputDTO!) {
    createUser(input: $input) {
      action
      message
    }
  }
`;

export const DELETE = gql`
  mutation ($input: UserInputDTO!) {
    deleteUser(input: $input) {
      action
      message
    }
  }
`;

export const UPDATE = gql`
  mutation ($input: UserInputDTO!) {
    updateUser(input: $input) {
      action
      message
    }
  }
`;

export const FINDALL = gql`
  query {
    findAllUsers {
            _id
            firstName
            lastName
            email
            role
            status
            contactNo
            username
            companyId
            creatorRole
            companyName
            streetLine1
            streetLine2
            city
            country
    }
  }
`;

export const FINDALLUSERSBYCOMPANYID = gql`
query($_id: String!){
    findAllUsersByCompanyId(_id: $_id) {
        
            _id
            firstName
            lastName
            email
            role
            status
            contactNo
            username
            companyId
            creatorRole
            companyName
            streetLine1
            streetLine2
            city
            country
        
    }
}
`


export const FINDALLCOMPANIES = gql`
  query {
   findAllCompanies {
      _id
      organizationName
    }
  }
`;

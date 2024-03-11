import { gql } from '@apollo/client';

export const CREATE = gql`
  mutation ($input: OrganizationInputDTO!) {
    createOrg(input: $input) {
      action
      message
    }
  }
`;

export const DELETE = gql`
  mutation ($input: OrganizationInputDTO!) {
    deleteOrg(input: $input) {
      action
      message
    }
  }
`;

export const UPDATE = gql`
  mutation ($input: OrganizationInputDTO!) {
    updateOrg(input: $input) {
      action
      message
    }
  }
`;

export const FINDALLORGSBYCOMPANYID = gql`
query($_id: String!){
    findAllOrgsByCompanyId(_id: $_id) {
    _id
      organizationName
      organizationType
        addressType
        streetLine1
        streetLine2
        city
        state
        zipCode
        country
        companyId
        contactPerson
        contactEmail
        contactBusinessNo
        disable
  }
}
`

export const FINDALL = gql`
  query {
    findAllOrgs {
      _id
      organizationName
      organizationType
        addressType
        streetLine1
        streetLine2
        city
        state
        zipCode
        country
       companyId
        contactPerson
        contactEmail
        contactBusinessNo
        disable
       
    }
  }

  
`;

export const FINDALLFACILITIES = gql`
  query {
   findAllFacilities {
      _id
      organizationName
      organizationType
        addressType
        streetLine1
        streetLine2
        city
        state
        zipCode
        country
        
    }
  }

  
`;


export const FINDALLCOMPANIES = gql`
  query {
   findAllCompanies {
      _id
      organizationName
    }
  }
`;

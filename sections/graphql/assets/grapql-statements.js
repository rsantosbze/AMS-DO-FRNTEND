import { gql } from '@apollo/client';

export const CREATE = gql`
  mutation ($input: AssetInputDTO!) {
    createAsset(input: $input) {
      action
      message
    }
  }
`;

export const DELETE = gql`
  mutation ($input: AssetInputDTO!) {
    deleteAsset(input: $input) {
      action
      message
    }
  }
`;

export const UPDATE = gql`
  mutation ($input: AssetInputDTO!) {
    updateAsset(input: $input) {
      action
      message
    }
  }
`;

export const FINDFACILITIES = gql`
  query {
    findAllFacilities {
      _id
      organizationName
      organizationType
    }
  }
`;


export const FINDALLFACILITIESBYCOMPANYID = gql`
query($_id: String!){
    findAllFacilitiesByCompanyId(_id: $_id) {
           _id
      organizationName
      organizationType     
    }
}
`

export const FINDASSETBYFACILITY = gql`
  query ($id: String!) {
    findOrg(_id: $id) {
      facassets {
        _id
        assetName
        assetCode
        assetType
        assetDescription
        dateOfManufacture
        dateOfInstallation
        facilityId
        userId
        supplierId
        contractorId
        companyId
        acquisitionCost
        # supplier {
        #     _id
        # }
        # facility {
        #     _id
        # }
      }
    }
  }
`;

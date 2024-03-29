import { gql } from '@apollo/client';

export const CREATE = gql`
  mutation ($input: MaintenanceRecordInputDTO!) {
    createMaintenanceRecord(input: $input) {
      action
      message
    }
  }
`;

export const DELETE = gql`
  mutation ($input: MaintenanceRecordInputDTO!) {
    deleteMaintenanceRecord(input: $input) {
      action
      message
    }
  }
`;

export const UPDATE = gql`
  mutation ($input: MaintenanceRecordInputDTO!) {
    updateMaintenanceRecord(input: $input) {
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

export const FINDASSETBYFACILITY = gql`
  query ($id: String!) {
    findOrg(_id: $id) {
      facassets {
        _id
        assetName
      }
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
export const FINDASSET = gql`
  query ($id: String!) {
    findAsset(_id: $id) {
      _id
      maintenanceRecords {
        _id
        maintenanceDescription
        dateOfMaintenance
        userId
        assetId
        companyId
        facilityId

      }
    }
  }
`;

import { gql } from '@apollo/client';

export const CREATE = gql`
  mutation ($input: InvoiceInputDTO!) {
    createInvoice(input: $input) {
      action
      message
    }
  }
`;

export const DELETE = gql`
  mutation ($input: InvoiceInputDTO!) {
    deleteInvoice(input: $input) {
      action
      message
    }
  }
`;

export const UPDATE = gql`
  mutation ($input: InvoiceInputDTO!) {
    updateInvoice(input: $input) {
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

export const FINDASSET = gql`
  query ($id: String!) {
    findAsset(_id: $id) {
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

      
    }
  }
`;

export const FINDALLFACILITIESBYCOMPANYID = gql`
query($_id: String!){
    findAllFacilitiesByCompanyId(_id: $_id) {
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
    }
}
`

export const FINDINVOICESBYASSET = gql`
  query ($id: String!) {
    findAsset(_id: $id) {
       invoices {
        _id
        invoiceNo
        invoiceInformation
        serviceReportNo
        invoiceCost
        dateOfInvoice
        facilityId
        userId
        assetId
        supplierId
        contractorId
        companyId
        maintenanceRecordId

       }  

      
    }
  }
`;
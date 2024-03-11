import validator from 'validator';

export const registerValidations = [
    ({ firstName }) =>
        !validator.isEmpty(firstName) || {
            firstName: 'First Name is required',
        },
    ({ lastName }) =>
        !validator.isEmpty(lastName) || {
            lastName: 'Last Name is required',
        },
    ({ username }) =>
        validator.isLength(username, { min: 4 }) || {
            username: 'min length of 4',
        },
    ({ username }) =>
        !validator.isEmpty(username) || { username: 'Username is required' },
    ({ password }) =>
        validator.isLength(password, { min: 4 }) || {
            password: 'min length of 4',
        },
    ({ password }) =>
        !validator.isEmpty(password) || { password: 'Password is required' },
    ({ email }) =>
        validator.isEmail(email) || { email: 'Email is has Incorrect Format' },
    ({ email }) => !validator.isEmpty(email) || { email: 'Email is required' },
];

export const loginValidations = [
    ({ username }) =>
        !validator.isEmpty(username) || { username: 'Username is required' },
    ({ password }) =>
        validator.isLength(password, { min: 4 }) || {
            password: 'min length of 4',
        },
    ({ password }) =>
        !validator.isEmpty(password) || { password: 'Password is required' },
];

export const forgotPasswordValidations = [
    ({ identity }) =>
        !validator.isEmpty(identity) || { identity: 'Username or Email is required' },
];

export const verifyEmailValidations = [
    ({ verifyCode }) =>
        !validator.isEmpty(verifyCode) || { verifyCode: 'Verification Code is required' },
];
export const resetPasswordValidations = [
    ({ temppassword }) =>
        !validator.isEmpty(temppassword) || { temppassword: 'Temporary Password is required' },
    ({ newpassword }) =>
        validator.isLength(newpassword, { min: 4 }) || {
            newpassword: 'min length of 4',
        },
    ({ newpassword }) =>
        !validator.isEmpty(newpassword) || { newpassword: 'New Password is required' },

    ({ newpassword, verifypassword }) =>
        newpassword === verifypassword || { verifypassword: 'New and Verify Password must be the same' },
    ({ verifypassword }) =>
        !validator.isEmpty(verifypassword) || { verifypassword: 'Verify Password is required' },
];
export const resetPassValidations = [
    ({ oldpassword }) =>
        !validator.isEmpty(oldpassword) || { oldpassword: 'Existing Password is required' },
    ({ newpassword }) =>
        validator.isLength(newpassword, { min: 4 }) || {
            newpassword: 'min length of 4',
        },
    ({ newpassword }) =>
        !validator.isEmpty(newpassword) || { newpassword: 'New Password is required' },

    ({ newpassword, verifypassword }) =>
        newpassword === verifypassword || { verifypassword: 'New and Verify Password must be the same' },
    ({ verifypassword }) =>
        !validator.isEmpty(verifypassword) || { verifypassword: 'Verify Password is required' },
];

export const organizationValidations = [

    ({ organizationName }) =>
        !validator.isEmpty(organizationName) || {
            organizationName: 'organization Name is required',
        },
    ({ streetLine1 }) =>
        !validator.isEmpty(streetLine1) || {
            streetLine1: 'street Line 1 is required',
        },
    ({ city }) => !validator.isEmpty(city) || { city: 'city is required' },
    ({ state }) => !validator.isEmpty(state) || { state: 'state is required' },
    ({ country }) => !validator.isEmpty(country) || { country: 'country is required' },
    ({ organizationType }) =>
        !validator.isEmpty(organizationType) || {
            organizationType: 'Must select an Organization Type',
        },
    // ({ password }) =>
    //   validator.isLength(password, { min: 4 }) || {
    //     password: 'min length of 4',
    //   },
    // ({ password }) =>
    //   !validator.isEmpty(password) || { password: 'Password is required' },
    //   ({ email }) =>
    //     validator.isEmail(email) || { email: 'Email is has Incorrect Format' },
    //   ({ email }) => !validator.isEmpty(email) || { email: 'Email is required' },
];

export const userValidations = [
    ({ username }) =>
        validator.isLength(username, { min: 4 }) || {
            username: 'min length of 4',
        },
    ({ username }) =>
        !validator.isEmpty(username) || { username: 'username is required' },
    ({ firstName }) =>
        !validator.isEmpty(firstName) || { firstName: 'first Name is required' },
    ({ lastName }) =>
        !validator.isEmpty(lastName) || { lastName: 'Last Name is required' },

    ({ role }) => !validator.isEmpty(role) || { role: 'Must select a Role' },
    ({ status }) =>
        !validator.isEmpty(status) || { status: 'Must select a Status' },
    ({ organizationId }) =>
        !validator.isEmpty(organizationId) || { organizationId: 'Must select a Company' },
    //   ({ password }) =>
    //     validator.isLength(password, { min: 4 }) || {
    //       password: 'min length of 4',
    //     },
    //   ({ password }) =>
    //     !validator.isEmpty(password) || { password: 'Password is required' },
    ({ email }) =>
        validator.isEmail(email) || { email: 'Email is has Incorrect Format' },
    ({ email }) => !validator.isEmpty(email) || { email: 'Email is required' },
];

export const assetValidations = [
    ({ assetCode }) =>
        !validator.isEmpty(assetCode) || {
            assetCode: 'Asset Code is required',
        },
    ({ assetName }) =>
        !validator.isEmpty(assetName) || {
            assetName: 'Asset Name is required',
        },
    ({ assetDescription }) =>
        !validator.isEmpty(assetDescription) || {
            assetDescription: 'Asset Description is required',
        },
    ({ supplierId }) =>
        !validator.isEmpty(supplierId) || {
            supplierId: 'Must select a Supplier',
        },
    ({ dateOfInstallation }) =>
        validator.isDate(new Date(dateOfInstallation)) || {
            dateOfInstallation: 'Date Of Installation is required',
        },
    ({ dateOfManufacture }) =>
        validator.isDate(new Date(dateOfManufacture)) || {
            dateOfManufacture: 'Date Of Manufacture is required',
        },
];

export const recordValidations = [
    ({ maintenanceDescription }) =>
        !validator.isEmpty(maintenanceDescription) || {
            maintenanceDescription: 'Description is required',
        },
    ({ dateOfMaintenance }) =>
        validator.isDate(new Date(dateOfMaintenance)) || {
            dateOfMaintenance: 'Date Of Maintenance is required',
        },
    //   ({ assetName }) =>
    //     !validator.isEmpty(assetName) || {
    //       assetName: 'Asset Name is required',
    //     },
    //   ({ assetDescription }) =>
    //     !validator.isEmpty(assetDescription) || {
    //       assetDescription: 'Asset Description is required',
    //     },
    //   ({ supplierId }) =>
    //     !validator.isEmpty(supplierId) || {
    //       supplierId: 'Must select an Supplier Id',
    //     },
    //   ({ dateOfInstallation }) =>
    //     !validator.isEmpty(dateOfInstallation) || {
    //       dateOfInstallation: 'Date Of Installation is required',
    //     },
    //   ({ dateOfManufacture }) =>
    //     !validator.isEmpty(dateOfManufacture) || {
    //       dateOfManufacture: 'Date Of Manufacture is required',
    //     },
];
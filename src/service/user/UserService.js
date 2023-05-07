import axios from 'axios';

const API_BASE_URL = 'http://localhost:9000';

export function createUser(firstName, lastName, email, phoneNumberPrefix, phoneNumberLocal, street, number, zip, country) {
    const { localPart, domain } = separateEmailParts(email);

    const user = {
        firstname: firstName,
        lastname: lastName,
        email: {
            localPart: localPart,
            domain: domain,
            complete: email
        },
        address: {
            streetName: street,
            houseNumber: number,
            postalCode: zip,
            country: country,
        },
        phoneNumber: {
            number: phoneNumberLocal,
            countryCallingCode: phoneNumberPrefix,
        },
    };

    return axios.post(`${API_BASE_URL}/customers`, user);
}
function separateEmailParts(email) {
    if (typeof email !== 'string') {
        throw new Error('Input must be a string');
    }

    const atIndex = email.indexOf('@');
    if (atIndex === -1) {
        throw new Error('Invalid email format');
    }

    const localPart = email.slice(0, atIndex);
    const domainPart = email.slice(atIndex + 1);

    const dotIndex = domainPart.lastIndexOf('.');
    if (dotIndex === -1) {
        throw new Error('Invalid email format');
    }

    const domain = domainPart.slice(0, dotIndex);

    return {
        localPart,
        domain,
    };
}
const axios = require('axios');

const liveURL = 'https://paytez.io';
const sandboxURL = 'https://staging.paytez.io';

// Function to create a payment
async function createPayment(apiKey, data, environment = 'live') {
    const url = environment === 'live' ? `${liveURL}/api/webpayment/create` : `${sandboxURL}/api/webpayment/create`;
    const headers = {
        'x-api-key': apiKey,
        'Content-Type': 'application/json',
    };

    try {
        const response = await axios.post(url, data, { headers });
        return response.data;
    } catch (error) {
        throw new Error('Error creating payment: ' + error.message);
    }
}

// Function to verify a payment
async function verifyPayment(apiKey, data, environment = 'live') {
    const url = environment === 'live' ? `${liveURL}/api/webpayment/verify` : `${sandboxURL}/api/webpayment/verify`;
    const headers = {
        'x-api-key': apiKey,
        'Content-Type': 'application/json',
    };

    try {
        const response = await axios.post(url, data, { headers });
        return response.data;
    } catch (error) {
        throw new Error('Error verifying payment: ' + error.message);
    }
}

module.exports = {
    createPayment,
    verifyPayment,
};

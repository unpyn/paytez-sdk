Sure! Here's the README content for your npm package with example usage:

---

# paytez-sdk

A simple npm package to interact with the PAYTez REST APIs for creating and verifying payments.

## Installation

Install the package using npm:

```bash
npm install paytez-sdk
```

## Usage

### Import the package

In your JavaScript or TypeScript file, import the package:

```javascript
const { createPayment, verifyPayment } = require('paytez-sdk');
```

### Create a Payment

To create a payment, use the `createPayment` function. Pass your API key, payment data, and specify the environment as either `'live'` or `'sandbox'`.

```javascript
const apiKey = 'YOUR_API_KEY';

const paymentData = {
  invoiceAmount: '10',
  currencySymbol: 'USD',
  successUrl: 'http://example.com/success',
  failureUrl: 'http://example.com/failure',
};

// For live environment
createPayment(apiKey, paymentData, 'live')
  .then((paymentResponse) => {
    console.log('Payment Created:', paymentResponse);
    // Redirect the user to the payment page using paymentResponse.redirectLink
     window.location.href = paymentResponse.redirectLink;
  })
  .catch((error) => {
    console.error('Error creating payment:', error);
  });

// For sandbox environment
createPayment(apiKey, paymentData, 'sandbox')
  .then((paymentResponse) => {
    console.log('Payment Created:', paymentResponse);
    // Redirect the user to the payment page using paymentResponse.redirectLink
  })
  .catch((error) => {
    console.error('Error creating payment:', error);
  });
```

### Verify a Payment

To verify a payment, use the `verifyPayment` function. Pass your API key, payment data, and specify the environment as either `'live'` or `'sandbox'`.

```javascript
const apiKey = 'YOUR_API_KEY';

const verifyPaymentData = {
  invoiceNo: '123456',
};

// For live environment
verifyPayment(apiKey, verifyPaymentData, 'live')
  .then((verificationResponse) => {
    console.log('Payment Verification:', verificationResponse);
  })
  .catch((error) => {
    console.error('Error verifying payment:', error);
  });

// For sandbox environment
verifyPayment(apiKey, verifyPaymentData, 'sandbox')
  .then((verificationResponse) => {
    console.log('Payment Verification:', verificationResponse);
  })
  .catch((error) => {
    console.error('Error verifying payment:', error);
  });
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Replace `YOUR_API_KEY` with your actual API key obtained from PAYTez. The example usage demonstrates how to use the `paytez-sdk` package to create and verify payments in both live and sandbox environments.

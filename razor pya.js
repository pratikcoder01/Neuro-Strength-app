import React from 'react';
import { View, Button, Alert } from 'react-native';
import RazorpayCheckout from 'razorpay-react-native';

export default function PaymentScreen() {
  const startPayment = () => {
    const options = {
      description: 'Order Payment',
      image: 'https://yourdomain.com/logo.png',
      currency: 'INR',
      key: 'YOUR_RAZORPAY_KEY_ID', // Use your Razorpay Key ID
      amount: '50000', // Amount in paise (50000 paise = ₹500)
      name: 'Your Business Name',
      prefill: {
        email: 'user@example.com',
        contact: '9876543210',
        name: 'Pratik',
      },
      theme: { color: '#53a20e' },
    };

    RazorpayCheckout.open(options)
      .then((data) => {
        // handle success
        Alert.alert(`Success: ${data.razorpay_payment_id}`);
      })
      .catch((error) => {
        // handle failure
        Alert.alert(`Error: ${error.code} | ${error.description}`);
      });
  };

  return (
    <View style={{ marginTop: 50 }}>
      <Button title="Pay ₹500" onPress={startPayment} />
    </View>
  );
}
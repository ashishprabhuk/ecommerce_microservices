# eCommerce Platform Project - MERN Stack

Welcome to the eCommerce Platform Project built using the MERN (MongoDB, Express.js, React, Node.js) Stack using Microservices Architecture. This project provides a robust and full-featured online shopping platform with various functionalities to enhance the user experience.

**Live App Demo** : [https://mern-shop-abxs.onrender.com/](https://mern-shop-abxs.onrender.com/)</br>
Note: Please be aware that Render's free tier will automatically shut down after 15 minutes of inactivity. Consequently, the first request after reactivation may experience a delay, but subsequent requests will be faster.

## Features

- **Full-Featured Shopping Cart**: Seamless shopping cart functionality for users to add, remove, and manage products.
- **Product Reviews and Ratings**: Users can leave reviews and provide ratings for products.
- **Top Products Carousel**: Display a carousel of top-rated or featured products.
- **Product Pagination**: Navigate through products efficiently with pagination.
- **Product Search Feature**: Easily search for products based on keywords.
- **User Profile with Orders**: Users can create profiles and track their order history.
- **Checkout Process**: Seamless checkout with options for shipping and payment methods.
- **Razorpay Integration**: Secure payment processing through Razorpay.
- **Database Seeder**: Easily populate the database with sample products and users.
- **MQTT and NATs**Implemented MQTT server on Linux for real-time communication and NAT for efficient network management.

## Getting Started

### Prerequisites

1. Fork the repository to your GitHub account.
2. Clone the forked repository to your local machine

```bash
git clone https://github.com/your-username/MERN-eCommerce.git
```

```bash
cd MERN-eCommerce
```

3. Create a MongoDB database and obtain your MongoDB URI from [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
4. Create a Razorpay account and obtain your Key ID and Key Secret from [Razorpay](https://razorpay.com/).
5. Create a Brevo account and generate a new SMTP Key from [Brevo](https://www.brevo.com/)

### Env Variables

1. Rename the `.env.example` file to `.env` and add the following environment variables:

```dotenv
NODE_ENV=development
PORT=5000
JWT_SECRET=ADD_YOUR_JWT_SECRET_HERE
MONGO_URI=ADD_YOUR_MONGO_URI_HERE
RAZORPAY_KEY_ID=ADD_YOUT_RAZORPAY_KEY_ID
RAZORPAY_KEY_SECRET=ADD_YOUR_RAZORPAY_KEY_SECRET
PAGINATION_MAX_LIMIT=12
EMAIL_HOST=smtp-relay.brevo.com
EMAIL_PORT=587
EMAIL_USER=ADD_YOUR_BREVO_LOGIN
EMAIL_PASS=ADD_YOUR_BREVO_PASSWORD
EMAIL_FROM=ADD_YOUR_BREVO_LOGIN
```

### Install Dependencies

Run the following commands to install dependencies for both the frontend and backend:

```bash
npm install
cd frontend
npm install
```

### Run

To run both the frontend and backend concurrently, use:

```bash
npm run dev
```

To run only the backend:

```bash
npm run server
```

## Build & Deploy

To create a production build for the frontend:

```bash
cd frontend
npm run build
```

## Seed Database

Use the following commands to seed the database with sample users and products, or destroy all data:

```bash
# Import data
npm run data:import

# Destroy data
npm run data:destroy
```

## Sample User Logins

- **Live Customer Logins:**: [https://mern-shop-abxs.onrender.com/login](https://mern-shop-abxs.onrender.com/login)
  - John Doe
    - Email: john@email.com
    - Password: john123
  - Alice Smith
    - Email: alice@email.com
    - Password: alice123

# 📸 MERN-Cloudinary: Full-Stack Image Management

[![MERN Stack](https://img.shields.io/badge/Stack-MERN-0099D6?style=for-the-badge&logo=react)](https://reactjs.org/)
[![Cloudinary](https://img.shields.io/badge/Media-Cloudinary-3448C5?style=for-the-badge&logo=cloudinary)](https://cloudinary.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

A robust and scalable full-stack solution for implementing **secure, high-performance image uploads** in a MERN (MongoDB, Express, React, Node.js) application using **Cloudinary** for media management. Say goodbye to file system uploads and hello to powerful, cloud-based media delivery!

* **Live Demo:** [https://dheepaky-mern-cloudinary.onrender.com/](https://dheepaky-mern-cloudinary.onrender.com/)

---

## ✨ Features

| Feature | Description |
| :--- | :--- |
| **Cloudinary Integration** | Seamlessly upload, store, and manage media assets using the industry-leading Cloudinary platform. |
| **Secure & Scalable** | Images are offloaded from your server and stored securely, ensuring quick retrieval and reduced server load. |
| **Full MERN Stack** | Built on the reliable and modern **MongoDB, Express, React, and Node.js** architecture. |
| **File Handling Middleware** | Utilizes **Multer** on the server side to efficiently process file input before passing to the Cloudinary API. |

---

## 🛠️ Tech Stack

This project is built using a powerful and modern stack:

### Frontend
* **React** (with Functional Components and Hooks)
* **Axios** (for API communication)

### Backend
* **Node.js** & **Express.js**
* **Cloudinary SDK** (for server-side media management)
* **Multer** (Node.js middleware for handling `multipart/form-data`)

### Database
* **MongoDB** (NoSQL Database)
* **Mongoose** (ODM for MongoDB)

---

## 🚀 Getting Started

Follow these steps to set up the project locally.

### Prerequisites

You must have **Node.js** and **npm** installed on your machine.

### Installation

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/dheepaky/Mern-Cloudinary.git](https://github.com/dheepaky/Mern-Cloudinary.git)
    cd Mern-Cloudinary
    ```

2.  **Install dependencies in both client and server directories:**
    ```bash
    # Install server dependencies
    cd server
    npm install

    # Install client dependencies
    cd ../client
    npm install
    ```

3.  **Set up Environment Variables:**
    Create a file named **`.env`** in the **`server`** directory and add your credentials.

    ```ini
    # MongoDB Connection
    MONGO_URI="YOUR_MONGO_CONNECTION_STRING"

    # Cloudinary Credentials (Get these from your Cloudinary Dashboard)
    CLOUDINARY_CLOUD_NAME="YOUR_CLOUD_NAME"
    CLOUDINARY_API_KEY="YOUR_API_KEY"
    CLOUDINARY_API_SECRET="YOUR_API_SECRET"
    
    # Optional: Server port
    PORT=5000 
    ```

### Running the Application

1.  **Start the Backend Server:**
    Navigate back to the **`server`** directory and run the development script:
    ```bash
    npm run dev  # Requires nodemon
    # OR
    npm start 
    ```
    The server will typically run on `http://localhost:5000`.

2.  **Start the Frontend Client:**
    Navigate to the **`client`** directory and run:
    ```bash
    npm start
    ```
    The React application will open in your browser, typically at `http://localhost:3000`.

You're all set! Now you can test the upload functionality and see your assets appear instantly on Cloudinary.

---

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'feat: Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

---

## 📄 License

Distributed under the **MIT License**. See the `LICENSE` file for more information.

---

## 👤 Author

**Dheepak Y**
* **GitHub:** [dheepaky](https://github.com/dheepaky)

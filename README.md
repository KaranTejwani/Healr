# Healr

Healr is a full-stack healthcare platform that connects patients, doctors, and laboratories. It allows users to book appointments, consult online, manage prescriptions, and access a wide range of medical and surgical services.

## Features

- Patient, Doctor, and Admin roles
- Book and manage appointments
- Online consultations
- Laboratory test booking and management
- Surgery and specialist doctor listings
- Admin dashboard for platform management

## Tech Stack

- **Frontend:** React (Vite)
- **Backend:** Node.js, Express, MongoDB (Mongoose)
- **Deployment:** Vercel (frontend and backend deployed separately)

---

## Installation

### Prerequisites

- Node.js (v16+ recommended)
- npm
- MongoDB (local or Atlas)

### 1. Clone the repository

```bash
git clone https://github.com/KaranTejwani/Healr.git
cd Healr
```

### 2. Install dependencies

#### Backend

```bash
cd backend
npm install
```

#### Frontend

```bash
cd ../frontend
npm install
```

---

## Running the Project Locally

### 1. Start MongoDB

Make sure your MongoDB server is running locally or update the connection string in `backend/server.js` or your `.env` file.

### 2. Start the Backend

```bash
cd backend
npm start
```

The backend will run on [http://localhost:5000](http://localhost:5000).

### 3. Start the Frontend

```bash
cd ../frontend
npm run dev
```

The frontend will run on [http://localhost:5173](http://localhost:5173) (default Vite port).

### 4. (Optional) Seed Doctor Data

To seed doctor accounts, run the upload script in the backend:

```bash
cd backend/upload
node uploadDoctorAccounts.js
```

---

## Deployment

Both frontend and backend are ready for deployment on Vercel.  
- Frontend: [https://healr.vercel.app](https://healr.vercel.app)
- Backend: [https://healr-backend.vercel.app](https://healr-backend.vercel.app)

The frontend is configured to proxy `/api/*` requests to the backend using `vercel.json`.

---

## Example Credentials

### Doctor

- **Email:** dr.afshanahmad_dermatologist@example.com
- **Password:** 12345678

### Patient

- **Email:** kashish@test.com
- **Password:** 11223344

### Admin

- **Email:** qadir@test.com
- **Password:** 12121212

> If these accounts do not exist, you can sign up as a patient or create the admin/doctor directly in the database.

---

## Notes

- For production, make sure to use environment variables for sensitive data (MongoDB URI, etc.).
- Update the backend CORS settings if you change your frontend domain.
- For local development, you may want to set up a proxy in `vite.config.js` to forward `/api` requests to the backend.

---

## License

This project is licensed under the ISC License. 
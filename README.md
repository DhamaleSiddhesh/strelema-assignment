
# Admin Dashboard React App

A simple **React Admin Dashboard** with login authentication, employee listing, and client-side pagination.


Project Setup & Run

Clone the repository:

git clone [text](https://github.com/DhamaleSiddhesh/strelema-assignment.git)
cd <strelema-assignment>


Install dependencies:

npm install


Start the development server:

npm start

The app will run on http://localhost:5173/

## DEPLOYED LINK OF THE PROJECT 
[link](https://strelema-assignment-orcin.vercel.app/)

---

## Pages & URLs

| Page              | URL                  |
|------------------|--------------------|
| Landing Page      | `/`                 |
| Login Page        | `/login`            |
| Admin Dashboard   | `/dashboard`        |


---

## Login Credentials

     "phone": "7768860976",
     "password": "Strelema@2026"

> After login, the dashboard fetches employees from the API.

---

## APIs Used

1. **Login API**  
   `POST https://strelema-task.onrender.com/api/auth/login`  

2. **Employees API**  
    `GET https://strelema-task.onrender.com/api/employees`

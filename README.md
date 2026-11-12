# Project_service_Stadt

A catalog of local service providers for 3 cities: Frankfurt am Main, München, Würzburg.

## BACKEND

🚀 Backend Setup & Usage
Follow these instructions to set up and manage the backend services for this project.

📋 Prerequisites
Before you begin, ensure you have the following installed on your machine:

    - Docker (required for containerized services).

⚙️ Environment Configuration
Before launching the services, you must configure your environment variables:

    1. Navigate to the backend directory:

        cd backend

    2. Create your `.env` file by copying the provided example:

        cp .env.example .env

    Open the .env file in your editor and provide the necessary values for all required environment variables.

🟢 Managing Services
Use the following commands from the root directory (or the backend folder, depending on your configuration) to manage your services:

    Start services:

        npm run server:up

    Stop services:

        npm run server:down

🌐 Accessing the Service
Once the containers are running, the server will be available at the host and port specified in your .env file:

    👉 http://<hostname>:<port>

📚 API Documentation
Interactive API documentation is automatically generated. You can explore all available endpoints, request schemas, and response models here:

    👉 http://<hostname>:<port>/api-docs/

    Note: If you encounter any issues during startup, ensure that the ports specified in your .env file are not already in use by other applications on your machine.


## FRONTEND

🚀 Frontend Setup & Usage
The frontend is a React + TypeScript single-page application built with Vite. It can run in two modes: with mock data (current stage, demo version) or connected to the backend.

📋 Prerequisites
Before you begin, ensure you have the following installed on your machine:

    - Node.js 20.19+ or 22.13+
    - npm

⚙️ Installation

    1. Navigate to the frontend directory:

        cd frontend

    2. Install dependencies:

        npm install

🗂️ Data Source: Mock Data or Backend
The data source is switched by the USE_MOCK flag in frontend/src/api/api.ts.

    Mock data (current stage, demo version):

        USE_MOCK = true

    Cities, categories and providers come from frontend/src/api/mockData.ts. No backend is needed. All providers, addresses, phone numbers and photos are fictional.

    Backend:

        USE_MOCK = false

    Start the backend first (see the BACKEND section above). In development, requests to /aglomerations, /categories and /companies are proxied to http://localhost:3001 (see frontend/vite.config.ts).

🟢 Running the App
Run the following commands from the frontend directory:

    Start the development server:

        npm run dev

    Build for production (output in frontend/dist):

        npm run build

    Preview the production build locally:

        npm run preview

    Run ESLint:

        npm run lint

🌐 Accessing the App
Once the development server is running, the app is available at the address shown in the terminal:

    👉 http://localhost:5173


📖 More Details
See frontend/README.md for the tech stack and project structure.

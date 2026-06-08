# Project_service_Stadt
Додаток для 3-х міст


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
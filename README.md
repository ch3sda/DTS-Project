# DTS_Project

## Overview

DTS_Project is a comprehensive system designed to manage and streamline various processes. It includes a Django backend and a Vue.js frontend, integrated with Flowbite for UI enhancements.

## Features

- **Django Backend**: Handles data management, API endpoints, and serves as the core of the application.
- **Vue.js Frontend**: Provides a dynamic and responsive user interface.
- **Flowbite**: Utilized for UI components and styling.

## Permissions

### Unauthorized Users
You are permitted to:
- Clone the project and source code for review and study purposes.
- Study the process of the project.
- Follow the process flow of the system for educational use.

You are not permitted to:
- Modify and use the code as your own without explicit permission.
- Copy the entire project for personal or commercial use.

### Authorized Users
This project is built under the license of the Royal University of Phnom Penh. The university has full rights to use the project without any restrictions.

## Contact

If you are interested in building a similar system or have any inquiries, please contact:

**Email**: [officialchesdamc@gmail.com](mailto:officialchesdamc@gmail.com)

## Setup and Installation

### Backend (Django)

1. **Create Project Directory:**
   ```bash
   mkdir Project
   cd Project
2. **Create and Activate Virtual Environment:**
   ```bash
   python -m venv venv
   
   venv\Scripts\activate # On Windows:
   source venv/bin/activate # On Mac/Linux:
3. **Setup and Install Django:**
   ```bash
   pip install django djangorestframework pillow django-cors-headers
4. **Create Django Project:**
   ```bash
    django-admin startproject DTS_Project
5. **Create Django App:**
   ```bash
    python manage.py startapp AskForLeave
6. **Configure Settings and URLs as described in the setup guide.**
7. **Run Djangpo Server.**
   ```bash
   python manage.py runserver
### Frontend (Vue.js)
1. **Install Node.js and npm:** Download Node.js
2. **Navigate to DTS_Project:** Your path should look like this *../Project/DTS_Project/*
3. **Create Vue.Js Project:** create a new Vue.js project named frontend.
   ```bash
    npm install -g @vue/cli
    vue create frontend
    cd frontend
4. **Install Dependencies:** Install the necessary packages for the Vue.js project.
   ```bash
    npm install axios
5. **Install Tailwind  Flowbite:** Tailwind CSS is a utility-first CSS framework, and Flowbite is a component library built on top of Tailwind CSS. Install both
   ```bash
    npm install -D tailwindcss postcss autoprefixer
    npm install flowbite
    npx tailwindcss init -p
6. **Configure Tailwind CSS** *in* tailwind.config.js *and* src/assets/styles/tailwind.css as described in the setup guide.
7. **Run the Development Server:**
   ```bash
    npm run dev
## Contribution

For contributions or if you wish to collaborate on the project, please reach out via the contact information provided above.
## License

This project is licensed under the Royal University of Phnom Penh license. See the university's licensing terms for more details.

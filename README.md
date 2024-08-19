# CMS-project-Frontend-and-Admin-Backend

## Overview

This project is a personal portfolio website built using modern web development technologies. It allows you to showcase your projects, providing details and links to both live demos and code repositories. The portfolio is dynamically managed via an Express.js backend, which serves the project data and handles the addition of new projects through an admin panel. The frontend is built with React, Vite, and Tailwind CSS, providing a fast, responsive, and visually appealing user experience.

## Features

- **Dynamic Portfolio Display**: Projects are fetched from an Express.js backend and displayed in a responsive grid layout.
- **Admin Panel**: A simple admin interface allows you to add new projects to your portfolio, which are then stored in a JSON file on the server.
- **Responsive Design**: The entire site is built with Tailwind CSS, ensuring it looks great on all devices, from mobile phones to desktop computers.
- **Single-Page Application**: The site uses React to manage navigation and rendering, providing a seamless and fast user experience without page reloads.
- **Backend Integration**: The Express.js server handles API requests to fetch and update project data, as well as serving the frontend in production.

## Technologies Used

- **Frontend**:
  - [React](https://reactjs.org/): A JavaScript library for building user interfaces.
  - [Vite](https://vitejs.dev/): A fast development build tool that optimizes the application for production.
  - [Tailwind CSS](https://tailwindcss.com/): A utility-first CSS framework for rapid UI development.

- **Backend**:
  - [Express.js](https://expressjs.com/): A minimal and flexible Node.js web application framework for building APIs.

- **Other Tools**:
  - [Node.js](https://nodejs.org/): JavaScript runtime environment that executes JavaScript code outside of a web browser.
  - [JSON](https://www.json.org/): A lightweight data interchange format used to store project data.

## Installation and Setup

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 14.x or higher)
- [npm](https://www.npmjs.com/)

### Frontend Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/portfolio.git
   cd portfolio/client
2. Install the dependencies:

   ```bash
   npm install
3. Start the development server:

   ```bash
   npm run dev


### Backend Setup

1. Navigate to the server directory:

   ```bash
   cd ../server
2. Install the dependencies:

   ```bash
   npm install
3. Start the development server:

   ```bash
   npm run dev

3. Start the Express server:
   ```bash
    node server.js

The server will run on http://localhost:5000, serving the frontend and handling API requests.

### Building for Production
1. Build the frontend:
   ```bash
    cd ../client
    npm run build
This will generate the production-ready files in the dist directory.

2. Serve the frontend and start the backend server:
   ```bash
   cd ../server
    node server.js

Your portfolio will be available at http://localhost:5000.

## Usage
Visit the homepage to see your portfolio of projects.
Use the admin panel (to be implemented) to add new projects, which will be immediately reflected on the portfolio page.
Click on the "Demo" button to view the live project or "Code" to visit the project's repository.

## Contributing
If you'd like to contribute to this project, feel free to fork the repository and submit a pull request. Any enhancements, bug fixes, or new features are welcome.
    

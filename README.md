# Social Media App Repository

This repository contains two distinct projects: **Social Media Feed** and **Whiteboard**. Each project has its own functionality, and they are structured in different folders within the repository.

---

## Project 1: Social Media Feed

### Overview
The **Social Media Feed** project is a dynamic feed that allows users to scroll through posts in a social media-like interface. Infinite scrolling is implemented, allowing for smooth user experience without excessive page loads.

### Structure
- `public/` - Contains static assets like HTML files and images.
- `src/` - Contains all source code related to the client-side of the project.
  - `App.js` - The main React component.
  - `index.js` - The entry point of the React application.
  - `components/` - Subfolder containing additional React components for the feed.
  
- `server/` - This folder contains the backend logic for the project.
  - `server.js` - Handles server-side operations, like API routes and data fetching.

### Running the Project
To run the **Social Media Feed** project locally:

1. Clone this repository to your local machine:
   ```bash
   git clone https://github.com/AbdulSamad01/social-media-app.git
2. Navigate to the project directory:
   cd social-media-app
3. Install dependencies:
   npm install
4. Run the project:
   npm start
5. The application will be available at http://localhost:3000/ in your web browser.

# Inspira - Visual Network for Designers

Inspira is a specialized, minimalist visual network designed exclusively for creators, architects, and visual designers. It serves as a premium platform to showcase portfolios, curate design inspiration, and connect with other professionals through a clean, "artsy," and dark-themed aesthetic.

## 🚀 Features

* **Minimalist Aesthetic:** A dark, raw, and typography-driven UI built to let high-fidelity images stand out.
* **Discover & Explore:** Masonry-grid exploration page for discovering new design trends, photography, and architectural concepts.
* **Curation Boards:** Users can save and organize their favorite findings into categorized collections.
* **Professional Profiles:** Detailed profile views tailored for designers, including a "Selected Works" portfolio.
* **Project Uploading:** A sleek drag-and-drop interface for publishing new design work.
* **Direct Messaging:** A clean, integrated chat interface for contacting other creators.

## 🛠️ Tech Stack

This project is built using modern web technologies to ensure a fast, scalable, and responsive user experience:

*   **Frontend Framework:** React 18
*   **Build Tool & Dev Server:** Vite
*   **Routing:** React Router DOM (Client-side routing)
*   **Styling:** Vanilla CSS with Tailwind CSS utilities and custom design tokens
*   **Icons:** Google Material Symbols (Outlined)
*   **Typography:** Google Fonts (`Inter` for UI, `Playfair Display` for bold display headings)

## 📦 Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1.  Clone the repository and open the project directory.
2.  Navigate to the frontend folder:
    ```bash
    cd inspira-frontend
    ```
3.  Install the dependencies:
    ```bash
    npm install
    ```

### Running the Development Server

To start the local Vite development server, run:

```bash
npm run dev
```
*(If you encounter an "Execution Policies" error on Windows PowerShell, run `cmd /c npm run dev` instead).*

Once the server is running, open your browser and navigate to the local URL provided in the terminal (usually `http://localhost:5173`).

## 📁 Project Structure

*   `src/App.jsx`: Application shell and React Router configuration.
*   `src/index.css`: Global CSS containing design tokens, base styles, and custom utilities.
*   `src/components/`: Reusable UI components (e.g., `Sidebar.jsx`).
*   `src/pages/`: Individual page/route components (Home, Explore, Boards, Profile, DesignerProfile, UploadProject, Contact).

# QuantumCanvas: AI-Augmented Portfolio for Cloud & Infrastructure Expertise

![GHBanner](https://ai.google.dev/static/site-assets/images/share-ais-513315318.png)

A cutting-edge, high-performance digital portfolio platform leveraging bleeding-edge React, 3D graphics, and Google Generative AI to showcase extensive experience in cloud engineering, infrastructure, and IT support.

## Why This Exists

Traditional static portfolios often fall short in dynamically representing a developer's evolving technical prowess and the depth of their project contributions. QuantumCanvas was engineered to solve this by providing an immersive, interactive, and intelligently augmented platform. It transforms the conventional portfolio into a strategic asset, enabling professionals like Arif Budi Prasetio to articulate complex cloud architectures, infrastructure deployments, and IT operational expertise with unparalleled clarity and engagement.

## Key Features

*   **AI-Powered Content Integration**: Leverages Google Generative AI (`@google/genai`) for potential dynamic content generation, intelligent search, or personalized visitor interactions, showcasing advanced AI integration capabilities.
*   **Dynamic 3D Particle Background**: An immersive visual experience built with React Three Fiber, featuring interactive particle effects that adapt to user input and theme, creating a premium and memorable impression.
*   **Modular & Scalable Architecture**: Developed with React 19, Vite 6, and TypeScript for a robust, component-driven, and high-performance front-end, ensuring maintainability and future scalability.
*   **Comprehensive Experience Showcase**: Dedicated, elegantly designed sections for detailed Work Experience (timeline-based), categorized Technical Skills, impactful Projects, and validated Professional Certifications.
*   **Modern & Responsive UI/UX**: Implements Tailwind CSS v4 for atomic styling, Motion.dev for smooth, engaging animations, and Lenis for an ultra-fluid scrolling experience across all devices.
*   **Automated CI/CD Pipeline**: Features a GitHub Actions workflow for seamless, automated deployment to GitHub Pages, ensuring continuous delivery and up-to-date content.
*   **Dark/Light Theme Support**: Provides a customizable theme system, enhancing user accessibility and aesthetic preference.

## Tech Stack

*   **Frontend**: React 19, Vite 6, TypeScript
*   **Styling**: Tailwind CSS v4, clsx, tailwind-merge
*   **Animation**: Motion.dev
*   **3D Graphics**: React Three Fiber (`@react-three/fiber`), Drei (`@react-three/drei`), Three.js
*   **AI Integration**: Google Generative AI API (`@google/genai`)
*   **Icons**: Lucide React
*   **Smooth Scrolling**: Lenis
*   **Environment**: Dotenv, Express.js (for potential backend API key handling)
*   **Deployment**: GitHub Actions, GitHub Pages

## Quick Start / How to Run

To get this project up and running locally, follow these steps:

### Prerequisites

Ensure you have Node.js (v20 or higher recommended) and npm/pnpm/yarn installed.

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/web-porto.git
    cd web-porto
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    # or pnpm install
    # or yarn install
    ```
3.  **Configure Environment Variables:**
    Create a `.env.local` file in the project root and add your Gemini API key:
    ```
    GEMINI_API_KEY=YOUR_GEMINI_API_KEY
    ```
    *(Note: While the project includes `@google/genai`, its full integration for dynamic content might require further backend setup not fully detailed here.)*

### Running the Application

To start the development server:

```bash
npm run dev
# or pnpm dev
# or yarn dev
```

The application will typically be available at `http://localhost:3000`.

### Building for Production

To create a production-ready build:

```bash
npm run build
# or pnpm build
# or yarn build
```

The optimized static files will be generated in the `./dist` directory.

## Screenshots/Demo

_Coming Soon: A live demo link and screenshots showcasing the dynamic 3D background, interactive sections, and responsive design will be added here._

[Placeholder for Live Demo / Screenshots](https://example.com/web-porto-demo)

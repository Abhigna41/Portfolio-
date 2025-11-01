# ProFolio - Personal Portfolio Website

![ProFolio Screenshot](https://res.cloudinary.com/dxifwkrow/image/upload/v1761969533/Portfolio_v5uhir.png)

ProFolio is a modern, fully responsive personal portfolio website designed to showcase professional work, skills, and publications. It's built with Next.js, TypeScript, and Tailwind CSS, providing a clean and performant user experience. The project is integrated with Firebase for backend services and is ready for easy deployment.

## ✨ Features

-   **Modern & Responsive Design:** Looks great on all devices, from mobile phones to desktops.
-   **Light & Dark Mode:** User-selectable theme to suit their preference.
-   **Dynamic Sections:**
    -   **Hero Section:** A stunning introduction with an animated gradient heading.
    -   **About Me:** A brief bio with a profile picture.
    -   **Skills Showcase:** A grid displaying technical skills with icons.
    -   **Projects:** A filterable gallery of projects with dedicated detail pages.
    -   **Publications:** A list of publications with links to view them.
-   **Interactive UI:** Smooth animations and transitions using Framer Motion.
-   **Contact Form:** A functional contact form integrated with Firebase Firestore to store messages.
-   **SEO Optimized:** Built with Next.js App Router for better performance and search engine visibility.

## 🛠️ Tech Stack

-   **Framework:** [Next.js](https://nextjs.org/) (App Router)
-   **Language:** [TypeScript](https://www.typescriptlang.org/)
-   **Styling:** [Tailwind CSS](https://tailwindcss.com/) & [ShadCN UI](https://ui.shadcn.com/)
-   **Animations:** [Framer Motion](https://www.framer.com/motion/)
-   **Backend & DB:** [Firebase](https://firebase.google.com/) (Firestore for contact form, Auth)
-   **Icons:** [Lucide React](https://lucide.dev/) & [React Icons](https://react-icons.github.io/react-icons/)
-   **Form Management:** [React Hook Form](https://react-hook-form.com/) & [Zod](https://zod.dev/) for validation.
-   **Generative AI:** [Genkit](https://firebase.google.com/docs/genkit) (configured and ready for extension).

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

-   [Node.js](https://nodejs.org/) (v20 or later)
-   [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
-   A Firebase project. You can create one for free at the [Firebase Console](https://console.firebase.google.com/).

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/your-repo-name.git
    cd your-repo-name
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Set up Firebase:**
    -   Navigate to your project in the [Firebase Console](https://console.firebase.google.com/).
    -   Go to **Project settings** > **General**.
    -   Under "Your apps", select the web app.
    -   Copy the Firebase configuration object.
    -   Paste it into `src/firebase/config.ts`, replacing the existing placeholder.

4.  **Run the development server:**
    ```bash
    npm run dev
    ```
    Open [http://localhost:9003](http://localhost:9003) with your browser to see the result.

## 部署 (Deployment)

This project is configured for easy deployment to **Firebase Hosting**.

1.  **Build the static site:**
    The `output: 'export'` option is already set in `next.config.ts`, which generates a static site in the `out` directory.
    ```bash
    npm run build
    ```

2.  **Deploy to Firebase:**
    Ensure you have the Firebase CLI installed (`npm install -g firebase-tools`) and are logged in (`firebase login`).
    ```bash
    firebase deploy --only hosting
    ```
    After the command completes, your portfolio will be live at the URL provided by Firebase.

## 📂 Project Structure

-   `src/app/`: Main application directory using the Next.js App Router.
    -   `layout.tsx`: Root layout of the application.
    -   `page.tsx`: The main landing page.
    -   `projects/[slug]/`: Dynamic route for project detail pages.
    -   `publications/[slug]/`: Dynamic route for publication detail pages.
-   `src/components/`: Reusable React components.
    -   `ui/`: Components from ShadCN UI.
    -   `*-section.tsx`: Components for each major section of the homepage.
-   `src/firebase/`: Firebase configuration and custom hooks (`useCollection`, `useUser`, etc.).
-   `src/ai/`: Configuration and flows for Genkit.
-   `src/lib/`: Utility functions and static data.
-   `public/`: Static assets like images and fonts.

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

# Computer Science Roadmaps

**Computer Science Roadmaps** is a React and Next.js-powered application designed to help users identify suitable domains within computer science through an interactive quiz. After determining the best-suited domain, the app provides free learning resources for the recommended technologies, empowering users to upskill effectively.

---

## Live Demo

Check out the live application here: [Computer Science Roadmaps](https://computer-science-roadmaps.vercel.app/)

---

## Features

- **Interactive Quiz**: A fun and engaging quiz to discover the most suitable computer science domain for users.
- **Personalized Recommendations**: Get domain suggestions tailored to the quiz results.
- **Learning Resources**: Free curated resources to help users learn and excel in the recommended technologies.
- **Responsive Design**: Optimized for a seamless experience across devices.
- **Animations**: Fun animations like confetti to make the experience enjoyable.

---

## Tech Stack

- **Frontend**: React (leveraging Next.js for SSR and optimized routing)
- **Styling**: Tailwind CSS and DaisyUI for modern and customizable design.
- **Libraries**: A robust set of tools for UI enhancements and functionality:
  - `react-icons` for visual appeal with icons.
  - `react-toastify` for notifications.
  - `react-confetti` for celebratory visuals.
  - `tw-elements` for additional UI components.
- **Email Integration**: `emailjs-com` for user communication and feedback.

---

## Libraries Used

### Dependencies

- **[animate.css](https://animate.style/)**: Smooth animations to enhance user interaction.
- **[emailjs-com](https://www.emailjs.com/)**: Integration for sending emails directly from the app.
- **[react-confetti](https://www.npmjs.com/package/react-confetti)**: Adds fun confetti animations.
- **[react-icons](https://react-icons.github.io/react-icons/)**: Rich icon set for modern UI design.
- **[react-toastify](https://react-hot-toast.com/)**: Toast notifications for better UX.
- **[tw-elements](https://tailwind-elements.com/)**: Prebuilt UI components for faster development.

### Dev Dependencies

- **[daisyui](https://daisyui.com/)**: Tailwind CSS component library for rapid UI prototyping.
- **[eslint](https://eslint.org/)**: Code quality tool for adhering to best practices.
- **[postcss](https://postcss.org/)**: Tool for transforming CSS with plugins.
- **[tailwindcss](https://tailwindcss.com/)**: Utility-first CSS framework for responsive and maintainable styles.

---

## Scripts

- `npm run dev`: Start the development server with Next.js.
- `npm run build`: Build the project for production.
- `npm run start`: Start the production server.
- `npm run lint`: Run ESLint for code quality checks.

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)

---

## Project Structure

csroadmap/<br>
├── public/ # Static assets<br>
├── src/ # Main source code<br>
│ ├── components/ # Reusable React components<br>
│ ├── pages/ # Next.js pages<br>
│ ├── styles/ # Tailwind CSS and custom styles<br>
│ ├── utils/ # Utility functions<br>
│ ├── App.js # Main App component<br>
│ ├── index.js # Entry point<br>
├── package.json # Project metadata and dependencies<br>
├── tailwind.config.js # Tailwind CSS configuration<br>
├── next.config.js # Next.js configuration<br>

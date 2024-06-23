import { AppContextWrapper } from "@/context/appcontextwrapper";
import "./globals.css";
import Navbar from "@/components/navbar/navbar";

export const metadata = {
  title: "Computer Science Roadmaps",
  description:
    "Developed by Yuvraj Sharma, Computer Science Roadmaps is a collection of resources to help begginers choose the right path in computer science.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playwrite+GB+S:ital,wght@0,100..400;1,100..400&display=swap"
          rel="stylesheet"
        />
      </head>

      <body>
        <AppContextWrapper>
          <Navbar />
          {children}
          </AppContextWrapper>
      </body>
    </html>
  );
}

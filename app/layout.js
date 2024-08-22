import { AppContextWrapper } from "@/context/appcontextwrapper";
import "./globals.css";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import styles from "./pages/style/styles";

export const metadata = {
  title: "Computer Science Roadmaps",
  description:
    "Developed by Yuvraj Sharma, Computer Science Roadmaps is a collection of resources to help begginers choose the right path in computer science.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AppContextWrapper>
          <div className="bg-primary w-full overflow-hidden">
            <section className={` ${styles.flexCenter} h-24 `}>
              <Navbar />
            </section>
            <section className={`bg-primary ${styles.flexStart}`}>
              <main className={`${styles.boxWidth}`}>{children}</main>
            </section>
            <section>
              <Footer />
            </section>
          </div>
        </AppContextWrapper>
      </body>
    </html>
  );
}

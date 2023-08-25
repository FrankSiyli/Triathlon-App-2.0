import BackGroundImage from "./components/BackGroundImage/BackGroundImage";
import "./globals.css";
import { Inter } from "next/font/google";
import RecoilRootWrapper from "./RecoilRootWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Siyli endurance coaching",
  description: "Triathlon App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <RecoilRootWrapper>
          <BackGroundImage />
          {children}
        </RecoilRootWrapper>
      </body>
    </html>
  );
}

import { Nunito, Della_Respira } from "next/font/google";

export const doodle = Della_Respira({
  subsets: ["latin"],
  variable: "--font-doodle",
  weight: "400",
});

export const nunito = Nunito({ subsets: ["latin"] });

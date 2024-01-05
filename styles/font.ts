import { Della_Respira, Nunito } from "next/font/google";

const doodle = Della_Respira({
    subsets: ["latin"],
    variable: "--font-doodle",
    weight: "400",
});

const sans = Nunito({
    subsets: ["latin"],
    variable: "--font-nunito",
});

export { doodle, sans };

import { Montserrat, Sora } from "next/font/google";

export const montserrat = Montserrat({
    subsets: ["latin"],
    weight: [
        "400",
        "500",
        "600",
        "700",
    ],
    variable: "--font-montserrat",
    display: "swap",
});

export const sora = Sora({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
    variable: "--font-sora",
    display: "swap",
});
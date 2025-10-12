import { Work_Sans, Shippori_Mincho } from "next/font/google";

export const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
  display: "swap",
});

export const shipporiMincho = Shippori_Mincho({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-shippori-mincho",
  display: "swap",
});

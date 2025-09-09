import { Work_Sans, Shippori_Mincho, Bodoni_Moda } from "next/font/google";

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

export const bodoniModa = Bodoni_Moda({
  subsets: ["latin"],
  variable: "--font-bodoni-moda",
  display: "swap",
});

// DNP秀英ゴシック銀
export const dnpShuei = {
  variable: "--font-dnp-shuei",
};

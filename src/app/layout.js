import "./globals.css";

export const metadata = {
  title: "Bugs FiFi — Automatically find and fix bugs with just one click",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

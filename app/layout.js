import "@styles/globals.css";
import Nav from "@components/Nav";
export const metadata = {
  title: "Promptopia",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Nav />
      <body>{children}</body>
    </html>
  );
}

import "../styles/global.css";
import Navigation from "./nav.js";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navigation/> 
        {children}
      </body>
    </html>
  );
}

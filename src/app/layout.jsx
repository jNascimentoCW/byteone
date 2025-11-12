import "./styles.jsx";

// Importação da fonte Montserrat do Google Fonts
import { Montserrat } from "next/font/google";

// Configuração da fonte Montserrat
const montserrat = Montserrat({
  subsets: ["latin"],
  fallback: ["Arial", "sans-serif"],
});

// Metadados da aplicação (título e descrição)
export const metadata = {
  title: "ByteOne Panel",
  description: "Dashbord interativo da ByteOne",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} ${montserrat.weight}`}>
        {children}
      </body>
    </html>
  );
}

import "./globals.css";

export const metadata = {
  title: "Porsenigama 2024",
  description: "Porsenigama 2024",
  icons: {
    icon: "/2024/porsenigama/assets/logo-porsenigama.png",
    appleTouchIcon: "/2024/porsenigama/assets/logo-porsenigama.png",
    shortcutIcon: "/2024/porsenigama/assets/logo-porsenigama.png",
  },
};

// eslint-disable-next-line react/prop-types
export default function RootLayout({ children }) {
  return (
    <html lang="id-ID">
      <body>{children}</body>
    </html>
  );
}

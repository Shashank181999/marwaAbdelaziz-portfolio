import './globals.css';

export const metadata = {
  title: 'Your Name - Personal Brand',
  description: 'Designer, developer, and creative technologist crafting memorable digital products.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
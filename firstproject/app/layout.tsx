import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/NavBar";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className="min-h-full bg-gray-2OO">
                <Navbar />
                <main className="px-8">{children}</main>
                <Footer/>
            </body>
        </html>
    );
}
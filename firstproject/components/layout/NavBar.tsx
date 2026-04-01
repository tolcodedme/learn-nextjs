import Link from "next/link";

export default function NavBar() {
    return (
        <header className="flex justify-between flex-row py-4 px-8 bg-blue-200 text-gray-900">
            <Link href="/">
            <h2 className="font-semibold text-xl">FirstProject</h2>
            </Link>

            <nav className="flex gap-4 items-center font-medium">
                <Link href="/portfolio">Portfolio</Link>
                <Link href="/contact">Contact</Link>
                <Link href="/testimonials">Témoignages</Link>
            </nav>
        </header>
    );
}

import Link from "next/link";

export default function NavBar(){
    return (
        <header className="flex justify-between items-center py-5">
            <h2 className="font-semibold text-xl ">
                <Link href="/">
                    <span className="text-violet-500">Blog</span>Flow
                </Link>
            </h2>
            <nav className="">
                <Link href="/posts">Posts</Link>
            </nav>
        </header>
    );
}
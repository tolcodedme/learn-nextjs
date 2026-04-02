import { Post } from "@/app/page";
import Link from "next/link";

type cardProps = {
    post: Post;
}
export default function Card({post}: cardProps) {
    return <div className="bg-violet-950 p-2.5 border border-violet-400 rounded-xl cursor-pointer">
        <Link href={`/posts/${post.id}`}>
            <h4 className="font-medium text-[20px]">{post.title}</h4>
            <p className="italic">{post.body}</p>
        </Link>
    </div>;
}
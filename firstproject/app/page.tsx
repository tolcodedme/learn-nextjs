import "./globals.css";

type Post = {
    userId : number;
    id : number;
    title: string;
    body: string;
}

async function getData(){
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");

    if (!res.ok) {
        throw new Error('Fetching Error');
    }

    return res.json();
}

export default async function App(){

    const blogposts = await getData();

    return (
        <div>
            <h4 className="font-semibold text-[22px] mt-3">Posts</h4>
            <div className="flex gap-5 mt-2 mb-5">
                { blogposts.slice(0, 4).map( (post : Post) =>(
                    <div key={post.id} className="bg-gray-300 p-5 cursor-pointer rounded-2xl border border-gray-700 text-gray-1OO w-2xl">
                        <h4 className="font-bold mb-1"> {post.title} </h4>
                        <p className="italic"> {post.body} </p>
                    </div>
                ))}
            </div>
        </div>
    )
}
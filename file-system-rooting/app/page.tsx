import Card from "@/components/ui/Card";

export type Post = {
    userId: number;
    id: number;
    title: string;
    body:string;
}
export async function getBlogPosts(){
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    
    if (!res.ok) {
        throw new Error('Erreur de récupération de données!');
        
    }

    return res.json();
}
export default async function Home() {

    const allBlogPosts = await getBlogPosts();
    
  return (
    <div className="min-h-full ">
        
        <h2>Trend Posts List</h2>
        
        <div className="flex gap-5 my-5">
            { allBlogPosts.slice(0,4).map((post: Post) =>(
                <Card key={post.id} post={post}/>
            ))}
        </div>
    </div>
  );
}

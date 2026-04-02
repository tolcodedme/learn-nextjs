
export default async function PostDetails({ params }: {params: Promise<{id:string}>}) {
    const {id} = await params;
    return <h4 className="text-yellow-500 text-center">{id}</h4>;
}
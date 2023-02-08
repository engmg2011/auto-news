import Database from "@/lib/Database";
import Post from "@/models/Post";

export async function getServerSideProps(context: any) {
    const {slug} = context.query

    await Database.connect();
    const posts = await Post.findById(slug);
    let post = JSON.parse(JSON.stringify(posts));
    return {
        props: {post},
    };
}

export default function Slug({post}: any) {
    console.log("props", post);

    return <>
        <div>
            <div className="flex justify-center ">
                <img src={post.image} className=" content-center h-48 w-96 "/>
            </div>

            <h1 className={'text-3xl  mb-3 mt-5 opacity-80'}>{post.title}</h1>

            <h5 className={'text-lg opacity-80 font-light'}>
                {post.content}
            </h5>


        </div>

    </>
}
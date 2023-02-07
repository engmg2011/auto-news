import Post from "@/models/Post";
import Database from "@/lib/Database";
import PostComponent from "@/components/PostComponent";


export async function getServerSideProps(context: any) {

    await Database.connect();
    const posts = await Post.find().sort({id:"desc"}).limit(30);
    let pArr = JSON.parse(JSON.stringify(posts));
    return {
        props: {data:pArr},
    };
}

export default  function Index({data}: any) {

    return <>

        <h1 className="logo"> AI News </h1>

        { data && data.map((post:any) =>
            <PostComponent post={post} key={post._id} />
        )}
    </>
}
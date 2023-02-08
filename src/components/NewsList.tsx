import PostComponent from "@/components/PostComponent";

export default function NewsList({ data} : any){
    return <div style={{color: "white"}}>
        { data && data.map((post:any) =>
            <PostComponent post={post} key={post._id} />
        )}
    </div>
}
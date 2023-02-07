import Post from "@/models/Post";
import Database from "@/lib/Database";

export default async function handler(req:any, res:any) {
    await Database.connect();

    console.log("will handle", req.method);
    // const client = await Promise;
    // const db = client.db("news");
    switch (req.method) {
        case "POST":
            // let bodyObject = JSON.parse(req.body);
            // let myPost = await db.collection("posts").insertOne(bodyObject);
            // res.json(myPost.ops[0]);
            break;
        case "GET":
            const posts = await Post.find();
            res.json({ status: 200, posts});
            break;
    }
}

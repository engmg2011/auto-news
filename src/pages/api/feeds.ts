import type {NextApiRequest, NextApiResponse} from 'next';
import process from "process";
import Database from "@/lib/Database";
import Post from "@/models/Post";
import Rewriter from "@/lib/Rewriter";
import {IPost} from "@/interfaces/IPost";
import WorldNewsController from "@/controllers/WorldNewsController";

type Data = {
    name: string
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    await Database.connect();

    switch (req.method) {
        case 'GET':
            // await Post.create({
            //     title: 'Test created at',
            //     content: 'Test Content',
            //     sourceId: '21223334367',
            //     source: 'test'
            //
            // });
            // res.status(200).json({ name: 'Done' })
            const worldNews = new WorldNewsController();
            const data = await worldNews.getNews();

            console.log("news data", data );
            if (data.news) {
                data.news.map(async (post: any) => {
                    console.log("post.text", post.text);
                    // const rewroteContent = await Rewriter.rewrite(post.text)
                    // console.log("rewroteContent", rewroteContent.rewrite)
                    try {
                        await Post.create(worldNews.formatNews(post));
                    }catch (e:any){
                        console.error(e.message);
                    }
                })

                res.status(200).json(data);
            }else {
                console.log(data);
            }
            break;

    }

}

import process from "process";

export default class WorldNewsController {
    async getNews() {
        try {
            const response = await fetch('https://api.worldnewsapi.com/search-news?' +
                // 'source-countries=eg'+'&'
                'earliest-publish-date=2023-02-04%2006:10:00&' +
                'language=ar&' +
                'number=10&' +
                // 'offset=500&'+
                'api-key=' + process.env.WORLD_NEWS_API_KEY, {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer '
                }
            });
            return await response.json();

        } catch (e) {
            console.error(e)
        }
    }

    formatNews(post: any){
        return {
            title: post.title,
            content: post.text,
            image: post.image,
            source: 'worldnewsapi',
            sourceId: post.id,
            originalTitle: post.title,
            originalContent: post.text,
            date: post.publish_date,
            summary: post.text.replace(/^(.{180}[^\s]*).*/, "$1")
        }
    }

}
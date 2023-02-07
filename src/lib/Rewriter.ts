const url: string = 'https://rewriter-paraphraser-text-changer-multi-language.p.rapidapi.com/rewrite';
const headers: any = {
    'content-type': 'application/json',
    'X-RapidAPI-Key': '69674393d1mshfa72616012bfbb5p110543jsn4f0b9ca63500',
    'X-RapidAPI-Host': 'rewriter-paraphraser-text-changer-multi-language.p.rapidapi.com'
}

export default class Rewriter {

    public static async rewrite(content: string) {
        const options = {
            method: 'POST',
            headers: headers,
            body: '{"language":"ar","strength":3,"text":"' + content + '"}'
        };
        try {
            const res = await fetch(url, options);
            const data = res.json();
            console.log("data", data);
            return data;
        } catch (e) {
            console.error('error:' + e)
        }
    }
}
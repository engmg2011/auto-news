import {IPost} from "@/interfaces/IPost";

export default function PostComponent({post}:{post: IPost}){
    return <>
        <div className={'post-container '}>
            <div className='content'>
                <h3 className='title'>{ post.title }</h3>
                <h4 className='text-summary'>
                    { post.summary || post.content.replace(/^(.{120}[^\s]*).*/, "$1") }
                </h4>
            </div>
            <div className="image-wrapper">
                { post.image ?
                    <div className='post-image'  style={{backgroundImage:`url(${post.image})`}}></div>
                :
                    <div className='post-image'>
                        <img width='100%' src="https://archive.org/download/no-photo-available/no-photo-available.png" alt=""/>
                    </div>
                }
            </div>
        </div>
    </>
}
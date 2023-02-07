import mongoose, {Schema} from "mongoose";
import {IPost} from "@/interfaces/IPost";

const postSchema = new Schema<IPost>({
    title: {type: String, required: true},
    content: {type: String, required: true},
    date: {type: Date, default: Date.now},
    hidden: Boolean,
    originalTitle: String,
    originalContent: String,
    image: String,
    source: {type: String, required:true},
    sourceId: {type: String, required:true, unique:true}
},{
    timestamps: true
});

export default mongoose.models.Post || mongoose.model<IPost>('Post', postSchema);
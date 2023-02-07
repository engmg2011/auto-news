// 1. Create an interface representing a document in MongoDB.
import mongoose, {Schema} from "mongoose";

interface IUser {
    name: string;
    email: string;
    avatar?: string;
}

// 2. Create a Schema corresponding to the document interface.
const userSchema = new Schema<IUser>({
    name: {type: String, required: true},
    email: {type: String, required: true},
    avatar: String
});

export default mongoose.models.User || mongoose.model<IUser>('User', userSchema);
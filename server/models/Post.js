import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        max: 500,
    },
    PicturePath: {
        type: String,
        default: "",
    },
    userPicturePath: {
        type: String,
        default: "",
    },
    likes: {
        type: Map,
        of: Boolean,
    },
    comments: {
        type: Array,
        default: [],
    },
    location:String,
},
{ timestamps: true }
);

const Post = mongoose.model("Post", postSchema);

export default Post;
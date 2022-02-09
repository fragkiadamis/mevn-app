const Mongoose = require('mongoose');

const postSchema = new Mongoose.Schema({
    title: { type: String },
    text: { type: String },
    createdAt: { type: Date, default: Date.now },
});

const Post = Mongoose.model('Post', postSchema);

exports.getPosts = async () => {
    const posts = await Post.find();
    return posts;
};

exports.insertPost = async (post) => {
    const newPost = new Post(post);
    await newPost.save();
};

exports.deletePost = async (postId) => {
    await Post.deleteOne({_id: postId});
}

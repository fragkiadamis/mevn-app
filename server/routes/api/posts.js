const express = require('express');
const Post = require('../../models/Post')

const router = express.Router();

// Get Posts
router.get('/', async (req, res) => {
    const posts = await Post.getPosts()
    res.status(200).json(posts)
});

// Add Post
router.post('/', async (req, res) => {
    const post = {title: req.body.title, text: req.body.text}
    await Post.insertPost(post);
    res.status(201).json(post)
});

// Delete Post
router.delete('/:id', async (req, res) => {
    const postId = req.params.id
    await Post.deletePost(postId);
    res.status(201).json()
});

module.exports = router
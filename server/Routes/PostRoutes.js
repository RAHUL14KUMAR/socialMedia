const express=require('express');
const {
    createPost,
    getPost,
    updatePost,
    deletePost,
    likePost,
    timelinePost
}=require('../Controllers/postController');

const router=express.Router()

router.route('/')
.post(createPost)

router.route('/:id')
.get(getPost)
.put(updatePost)
.delete(deletePost)

router.route('/:id/like')
.put(likePost)

router.route('/:id/timeline')
.get(timelinePost)

module.exports=router;
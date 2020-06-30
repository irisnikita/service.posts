// router
const express = require('express');
const authMiddleware = require('../Middleware/AuthMiddleware');

// Controler
const {createPost, listPost, getPaths, findPost, findByUser, deletePost, updateStatus, updatePost} = require('../controllers/Posts');

const postRouter = (app) => {

    app.get('/get-list', listPost);

    app.get('/get-paths', getPaths);

    app.get('/get-post-user', authMiddleware.isAuth, findByUser);

    app.get('/get-post/:id?', findPost);

    app.use(authMiddleware.isAuth);

    app.post('/create', createPost);

    app.delete('/delete/:id?', deletePost);

    app.put('/update/:id?', updateStatus);

    app.put('/update-post/:id?', updatePost);
};

module.exports = postRouter;

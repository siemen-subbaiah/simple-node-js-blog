const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogControllers');

//GET ALL THE BLOGS!
router.get('/', blogController.blog_index);

//ABOUT PAGE!
router.get('/about', blogController.blog_about);

//NEW BLOGS PAGE!
router.get('/create', blogController.blog_create_get);

//POST A BLOG!
router.post('/', blogController.blog_create_post);

//SINGLE BLOG!
router.get('/:id', blogController.blog_details);

//DELETE BLOG!
router.delete('/:id', blogController.blog_delete);

//ERROR PAGE!
router.use((req, res) => res.status(404).render('404', { title: 'ERROR!' }));

module.exports = router;

const Blog = require('../models/Blog');

const blog_index = (req, res) => {
  Blog.find()
    .sort({ createdAt: -1 })
    .then((data) => {
      res.render('index', { title: 'BLOGS', data });
    })
    .catch((err) => console.log(err));
};

const blog_details = (req, res) => {
  Blog.findById(req.params.id)
    .then((data) => res.render('details', { title: 'Blogs details', data }))
    .catch((err) => res.render('404', { title: 'BLOGS 404!' }));
};

const blog_create_get = (req, res) => {
  res.render('create', { title: 'BLOGS-CREATE!' });
};

const blog_create_post = (req, res) => {
  const newBlog = new Blog(req.body);
  newBlog
    .save()
    .then((data) => res.redirect('/blogs'))
    .catch((err) => console.log(err));
};

const blog_delete = (req, res) => {
  Blog.findByIdAndDelete(req.params.id)
    .then((data) => {
      res.json({ redirect: '/blogs' });
    })
    .catch((err) => console.log(err));
};

const blog_about = (req, res) => {
  res.render('about', { title: 'ME' });
};

module.exports = {
  blog_index,
  blog_details,
  blog_create_get,
  blog_create_post,
  blog_delete,
  blog_about,
};

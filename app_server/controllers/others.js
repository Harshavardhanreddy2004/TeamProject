/* GET 'about' page */
const about = (req, res) => {
    res.render('generic-text', { title: 'About' });
   };
   const Reviews = (req, res) => {
    res.render('Reviews', { title: 'Reviews' });
   };
   module.exports = {
    about,
    Reviews
   };
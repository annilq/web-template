/* GET aboutus page. */
function aboutus(req, res, next) {
    res.render('aboutus', { title: 'Express' });
  }

module.exports = aboutus;

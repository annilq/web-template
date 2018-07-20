/* GET contact page. */
function contact(req, res, next) {
    res.render('contact', { title: 'Express' });
  }

module.exports = contact;

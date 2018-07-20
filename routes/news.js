/* GET news page. */
function news(req, res, next) {
    res.render('news', { title: 'Express' });
  }

module.exports = news;

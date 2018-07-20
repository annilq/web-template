/* GET hr page. */
function hr(req, res, next) {
    res.render('hr', { title: 'Express' });
  }

module.exports = hr;

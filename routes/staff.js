/* GET staff page. */
function staff(req, res, next) {
    res.render('staff', { title: 'Express' });
  }

module.exports = staff;

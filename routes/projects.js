/* GET projects page. */
function projects(req, res, next) {
    res.render('projects', { title: 'Express' });
  }

module.exports = projects;

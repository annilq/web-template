function routers(app) {
  // 关于中浩链接
  app.use("/aboutus", function(req, res, next) {
    res.render("aboutus");
  });
  app.use("/dszzc", function(req, res, next) {
    res.render("dszzc");
  });
  app.use("/zzjg", function(req, res, next) {
    res.render("zzjg");
  });
  app.use("/fzlc", function(req, res, next) {
    res.render("fzlc");
  });
// 新闻中心链接
app.use("/news", function(req, res, next) {
    res.render("news");
  });
  app.use("/newsdetail", function(req, res, next) {
    res.render("newsdetail");
  });
  app.use("/projects", function(req, res, next) {
    res.render("projects");
  });
  app.use("/projectsdetail", function(req, res, next) {
    res.render("projectsdetail");
  });
  app.use("/staff", function(req, res, next) {
    res.render("staff");
  });
  app.use("/qualification", function(req, res, next) {
    res.render("qualification");
  });
  app.use("/hr", function(req, res, next) {
    res.render("hr");
  });
  app.use("/culture", function(req, res, next) {
    res.render("culture");
  });
  app.use("/contact", function(req, res, next) {
    res.render("contact");
  });
  app.use("/contact", function(req, res, next) {
    res.render("contact");
  });
  //   首页
  app.use("/", function(req, res, next) {
    res.render("index");
  });
}
module.exports = routers;

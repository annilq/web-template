// 添加引用
var gulp = require("gulp");
var ejs = require("gulp-ejs");
const del = require("del");
var browserSync = require("browser-sync").create();
var reload = browserSync.reload;
var nodemon = require("gulp-nodemon");

//这个可以让express启动
gulp.task("node", function() {
  nodemon({
    script: "./bin/www",
    ext: "js ejs",
    env: {
      NODE_ENV: "development"
    }
  });
});
//清除静态文件
gulp.task("clean", function() {
  del("public/*.html").then(paths => {
    console.log("Deleted files and folders:\n", paths.join("\n"));
  });
});

//生成静态页面
gulp.task("build", ["clean"], function() {
  gulp
    .src("./views/*.ejs")
    .pipe(
      ejs(
        {
          msg: "Hello Gulp!"
        },
        {},
        { ext: ".html" }
      )
    )
    .pipe(gulp.dest("./public"));
});

// gulp.task('js-watch', ['js'], browserSync.reload);

gulp.task("server", ["node"], function() {
  var files = ["views/**/*.ejs", "routes/**/*.js", "public/**/*.css", "app.js"];

  browserSync.init(files, {
    proxy: "http://localhost:3000",
    browser: ["chrome", "safari"],
    notify: false,
    port: 4001,
    open: false,
    ghostMode: {
      clicks: true,
      scroll: true
    }
  });

  gulp.watch(files).on("change", reload);
});

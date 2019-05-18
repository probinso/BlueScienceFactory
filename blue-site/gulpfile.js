const gulp = require("gulp");
const path = require("path");
const cp = require("child_process");

const pug = require("gulp-pug");
const pug_plugin_ng = require("pug-plugin-ng");
const pug_opts = { doctype: "html", plugins: [pug_plugin_ng] };

const pugFiles = path.join("src", "**", "*.pug");

gulp.task("pug", () => {
    return gulp
        .src(pugFiles)
        .pipe(pug(pug_opts))
        .pipe(gulp.dest("src"));
});

gulp.task("pugwatch", () => {
    return gulp.watch(pugFiles, gulp.series("pug"));
});


gulp.task("run", () => {
    return cp.spawn("ng", ["serve", "--open"], {
        stdio: "inherit"
    });
});

gulp.task("develop", gulp.series("pug", gulp.parallel("run", "pugwatch")));

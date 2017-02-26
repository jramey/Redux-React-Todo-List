var gulp = require("gulp");
var babel = require("gulp-babel");

gulp.task("default", function() {
    return gulp.src("src/js/*.js")
        .pipe(babel({
            presets: ["es2015", 'react'],
            plugins: ["transform-es2015-destructuring", "transform-object-rest-spread"]
        }))
        .pipe(gulp.dest("dist/js"));
});
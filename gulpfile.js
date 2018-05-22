
const gulp    = require("gulp");
const nodemon = require("nodemon");

gulp.task("default", () => {
    nodemon({
        script: "index.js",
        ext: "js",
        env: {
            PORT: 8000
        },
        ignore: [
            "./node_modules/"
        ]
    }).on("restart", () => {
        process.stdout.write("Restarting...");
    });
});

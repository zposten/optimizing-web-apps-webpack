module.exports = {
  presets: [
    // The beauty of the @babel/preset-env is that it is intelligent.
    // Using the .browserslintrc file, I have specified the browsers that I
    // want this project to support.  Namely those that have greater than 1%
    // marketshare usage, are still receiving security updates (not dead), and
    // are not IE (IE v12 doesn't exist).
    //
    // Based on that information, @babel/preset-env will only transpile the
    // features that are still missing from any of the browsers that meet those
    // criteria.
    //
    // It is also smart enough to apply the appropriate polyfills that are
    // needed by those browsers, via the useBuiltIns option set to 'entry'.
    // But if the useBuiltIns option is set to 'usage', then babel goes through
    // the source files and determines if, in addition to if the selected browsers
    // require it, the source files require those polyfills.  If a source file
    // requires a polyfill, a require statement is added at the top of the
    // file to import that file, taking advantage of the fact that a bundler
    // will only load the same polyfill once.
    //
    // See documentation here:
    // https://babeljs.io/docs/en/babel-preset-env
    ['@babel/preset-env', {useBuiltIns: 'usage', debug: true}],
  ],
}
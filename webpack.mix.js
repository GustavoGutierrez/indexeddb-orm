let mix = require('laravel-mix');

mix.js('./src/index.js', './dist/idb.js');
mix.js('./src/worker.js', './dist/worker.js');
mix.js('./test/cases.js', './test/cases-spec.js');
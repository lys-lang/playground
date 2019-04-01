build:
	node_modules/.bin/webpack --config webpack.config.js --mode production

just-watch:
	node_modules/.bin/webpack --config webpack.config.js --watch --mode development

watch:
	node_modules/.bin/concurrently "$(MAKE) just-watch" "node_modules/.bin/hs docs"

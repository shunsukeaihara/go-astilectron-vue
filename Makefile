default: resource
	rm -rf bind_*.go
	astilectron-bundler -v
resource: js
	rm -rf resources/app/
	mkdir -p resources/app/static
	cp vue/dist/index.html resources/app/index.html
	sed -i -e "s#/DUMMY_PUBLIC_PATH/##g" resources/app/index.html
	cp -rf vue/dist/css resources/app/
	cp -rf vue/dist/js resources/app/
	cp -rf vue/dist/img resources/app/
	sed -i -e 's#"/DUMMY_PUBLIC_PATH/"#__dirname + "/"#' resources/app/js/app*.js
js:
	make -C vue

test: build
	@mocha -R spec --recursive
build:
	@./node_modules/.bin/coffee -m -b -o lib -c src 
publish:
	@npm publish
#generate documentation
doc: build
	@./node_modules/.bin/codo -o doc src
commit: build
	@git add .
	@git commit -am"auto-update `date`" | :
push: doc commit 
	@git push origin --all
push-gh-pages: doc commit
	git checkout gh-pages
	git checkout master/doc
	mv doc/* .
	git add .
	git commit -am"doc update `date`" | : 
	git push origin gh-pages
	git checkout master
.PHONY: commit test push doc publish
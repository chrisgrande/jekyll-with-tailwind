# Local dev setup: gems go to ./vendor/bundle (see .bundle/config), not system Ruby.
# Optional: install rbenv (https://github.com/rbenv/rbenv) and run `make ruby-install`
# to match .ruby-version without touching system Ruby.

RUBY_VERSION := $(shell cat .ruby-version 2>/dev/null)

.PHONY: help setup gems npm build serve clean distclean ruby-install ruby-check

help:
	@echo "Project-local setup (gems in ./vendor/bundle, npm in ./node_modules)"
	@echo ""
	@echo "  make setup        Install Bundler gems + npm packages"
	@echo "  make gems         bundle install only"
	@echo "  make npm          npm install only"
	@echo "  make ruby-install Install Ruby $(RUBY_VERSION) via rbenv (if rbenv exists)"
	@echo "  make ruby-check   Show expected vs current Ruby version"
	@echo "  make build        bundle exec jekyll build"
	@echo "  make serve        bundle exec jekyll serve"
	@echo "  make clean        Remove _site and Jekyll cache"
	@echo "  make distclean    clean + remove vendor/bundle and node_modules"

setup: gems npm

gems:
	bundle install

npm:
	npm install

ruby-install:
	@if ! command -v rbenv >/dev/null 2>&1; then \
		echo "rbenv not found. Install it from https://github.com/rbenv/rbenv"; \
		echo "or use any Ruby >= $(RUBY_VERSION) and run: make gems"; \
		exit 1; \
	fi
	rbenv install -s "$(RUBY_VERSION)"
	@echo "Ruby $(RUBY_VERSION) ready. Run: make gems"

ruby-check:
	@echo "Expected (.ruby-version): $(RUBY_VERSION)"
	@echo -n "Current ruby:            "
	@command -v ruby >/dev/null 2>&1 && ruby -v || echo "(ruby not in PATH)"

build:
	bundle exec jekyll build

serve:
	bundle exec jekyll serve

clean:
	rm -rf _site .jekyll-cache

distclean: clean
	rm -rf vendor/bundle node_modules

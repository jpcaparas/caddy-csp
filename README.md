# Setting CSP headers on a Caddy server

## Overview
This guide shows how to set [Content Security Policy (CSP)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP) headers on a [Caddy web server](https://caddyserver.com/).

## Installation
1. Download the latest version of Caddy [here](https://caddyserver.com/download) or, if you are on a Mac and have [Homebrew](https://brew.sh/) installed, run `brew install caddy`.

## Disclaimer
1. This guide was done on a Caddy server running on a macOS Sierra machine.

## Gotchas
- CSP is supported by most modern browsers; a list of them can be seen [here](http://caniuse.com/#feat=contentsecuritypolicy).
- Incorrect syntax will render CSP useless. Try using a free validator like [this one](https://cspvalidator.org/) if you are setting a number of rules.
- To whitelist base64-encoded images, use `data:` as a trusted domain:
```
 Content-Security-Policy "img-src data:"
```


## TODO
- [ ] References


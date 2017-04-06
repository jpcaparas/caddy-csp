# :lock: Setting CSP headers on a Caddy server

## :information_desk_person: Overview
This guide shows how [Content Security Policy (CSP)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP) headers improve the security of a web page. We will be using a [Caddy web server](https://caddyserver.com/) to serve up CSP-protected web page.

## :car: Running the CSP-protected application
1. Clone this repository and `cd` into it.
1. Make sure Caddy is installed; if not, download the latest version [here](https://caddyserver.com/download) or, if you are on a Mac and have [Homebrew](https://brew.sh/) installed, run `brew install caddy`.
1. Run `caddy` on the terminal to serve the web page at `http://localhost:2015`. It should load the `Caddyfile` in the root directory.
1. Assuming you're using Google Chrome / Firefox, using your browser's developer tools, open the _Console_ tab to see errors associated with CSP response header directives we set on the `Caddyfile`.

## :loudspeaker: Disclaimer
1. This guide was done on a Caddy server running on a macOS Sierra machine.

## :ghost: Gotchas
- CSP is supported by most modern browsers; a list of them can be seen [here](http://caniuse.com/#feat=contentsecuritypolicy).
- Incorrect syntax will render CSP useless. Try using a free validator like [this one](https://cspvalidator.org/) if you are setting a number of rules.
- To whitelist base64-encoded images, use `data:` as a trusted domain:
```
 Content-Security-Policy "img-src data:"
```

## :sweat_drops: TODO
- [ ] References
- [ ] Logging violations with Sentry.io


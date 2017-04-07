# :lock: Setting CSP headers on a Caddy server

## :information_desk_person: Overview
This guide shows how [Content Security Policy (CSP)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP) headers improve the security of a web page by only **limiting the rendering/execution of styles, scripts, images, AJAX requests to only white-listed hostnames**. We will be using a [Caddy web server](https://caddyserver.com/) to serve up CSP-protected web page and [Sentry](https://sentry.io/) to log violations.

## :key: Getting a Sentry API key
Sentry is a popular logging mechanism

1. Sign up for Sentry [here](https://sentry.io/signup).
1. Go to _Organization Settings_ at and tick the `Early Adopter` box.
1. Create a project and go to _Settings_ &rarr; _Client Keys (DSN)_. From there, copy the `CSP Endpoint` field value somewhere, as we'll use it later.

## :car: Running the CSP-protected application
1. Clone this repository and `cd` into it.
1. Make sure Caddy is installed (we're using `v0.9.5` for this demo); if not, download the latest version [here](https://caddyserver.com/download) or, if you are on a Mac and have [Homebrew](https://brew.sh/) installed, run `brew install caddy`.
1. On your terminal, run `CSP_REPORT_URI="[csp-endpoint-you-copied-earlier]" caddy` to serve the web page at `http://localhost:2015`. This command will use the `Caddyfile` in the root directory, where restrictions are defined under the `Content-Security-Policy` header.
1. Using your browser's developer tools, open the _Console_ tab to see the violations.

## :warning: Viewing violations on Sentry
If the report URI key you entered is valid, you should also start seeing violations on your project dashboard on Sentry:

![Sentry log](http://i.imgur.com/dOeZ7Sll.jpg)

This comes in handy when you're trying to debug issues on staging/production environments.

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
- [x] References
- [x] Logging violations with Sentry.io


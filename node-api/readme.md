### Getting Started
Launch your Node.JS terminal in NODE-API and run the commands
`npm install`
and then
`npm start`

This should open the API route which can then be tested on `localhost:3000`, through services such as Postman.

Documentation of the API can be found at `localhost:3000/swagger`.

### Validation
Some validation has been applied to the create and update routes. This validation enforces that all fields are filled in the create route, and that all data types are sent as they should be, for the update route.

### Known bugs
- Update endpoint fails through the Swagger documentation, but works as intended when using Postman.

### Software version
This application was made to run on Node.js version 13.6.0
#### Installed packages and their versions
~~~
+-- @hapi/joi@15.1.0
| +-- @hapi/address@2.1.4
| +-- @hapi/hoek@6.2.4
| +-- @hapi/marker@1.0.0
| `-- @hapi/topo@3.1.6
|   `-- @hapi/hoek@8.5.1
+-- autoprefixer@9.8.0
| +-- browserslist@4.17.2
| | +-- caniuse-lite@1.0.30001264 deduped
| | +-- electron-to-chromium@1.3.857
| | +-- escalade@3.1.1
| | +-- nanocolors@0.2.12
| | `-- node-releases@1.1.77
| +-- caniuse-lite@1.0.30001264
| +-- chalk@2.4.2
| | +-- ansi-styles@3.2.1
| | | `-- color-convert@1.9.3
| | |   `-- color-name@1.1.3
| | +-- escape-string-regexp@1.0.5
| | `-- supports-color@5.5.0 deduped
| +-- normalize-range@0.1.2
| +-- num2fraction@1.2.2
| +-- postcss@7.0.38
| | +-- nanocolors@0.2.12 deduped
| | `-- source-map@0.6.1
| `-- postcss-value-parser@4.1.0
+-- cors@2.8.5
| +-- object-assign@4.1.1
| `-- vary@1.1.2
+-- dotenv@10.0.0
+-- express@4.17.1
| +-- accepts@1.3.7
| | +-- mime-types@2.1.33
| | | `-- mime-db@1.50.0
| | `-- negotiator@0.6.2
| +-- array-flatten@1.1.1
| +-- body-parser@1.19.0
| | +-- bytes@3.1.0
| | +-- content-type@1.0.4 deduped
| | +-- debug@2.6.9 deduped
| | +-- depd@1.1.2 deduped
| | +-- http-errors@1.7.2
| | | +-- depd@1.1.2 deduped
| | | +-- inherits@2.0.3
| | | +-- setprototypeof@1.1.1 deduped
| | | +-- statuses@1.5.0 deduped
| | | `-- toidentifier@1.0.0
| | +-- iconv-lite@0.4.24
| | | `-- safer-buffer@2.1.2
| | +-- on-finished@2.3.0 deduped
| | +-- qs@6.7.0 deduped
| | +-- raw-body@2.4.0
| | | +-- bytes@3.1.0 deduped
| | | +-- http-errors@1.7.2 deduped
| | | +-- iconv-lite@0.4.24 deduped
| | | `-- unpipe@1.0.0 deduped
| | `-- type-is@1.6.18 deduped
| +-- content-disposition@0.5.3
| | `-- safe-buffer@5.1.2 deduped
| +-- content-type@1.0.4
| +-- cookie@0.4.0
| +-- cookie-signature@1.0.6
| +-- debug@2.6.9
| | `-- ms@2.0.0
| +-- depd@1.1.2
| +-- encodeurl@1.0.2
| +-- escape-html@1.0.3
| +-- etag@1.8.1
| +-- finalhandler@1.1.2
| | +-- debug@2.6.9 deduped
| | +-- encodeurl@1.0.2 deduped
| | +-- escape-html@1.0.3 deduped
| | +-- on-finished@2.3.0 deduped
| | +-- parseurl@1.3.3 deduped
| | +-- statuses@1.5.0 deduped
| | `-- unpipe@1.0.0
| +-- fresh@0.5.2
| +-- merge-descriptors@1.0.1
| +-- methods@1.1.2
| +-- on-finished@2.3.0
| | `-- ee-first@1.1.1
| +-- parseurl@1.3.3
| +-- path-to-regexp@0.1.7
| +-- proxy-addr@2.0.7
| | +-- forwarded@0.2.0
| | `-- ipaddr.js@1.9.1
| +-- qs@6.7.0
| +-- range-parser@1.2.1
| +-- safe-buffer@5.1.2
| +-- send@0.17.1
| | +-- debug@2.6.9 deduped
| | +-- depd@1.1.2 deduped
| | +-- destroy@1.0.4
| | +-- encodeurl@1.0.2 deduped
| | +-- escape-html@1.0.3 deduped
| | +-- etag@1.8.1 deduped
| | +-- fresh@0.5.2 deduped
| | +-- http-errors@1.7.2 deduped
| | +-- mime@1.6.0
| | +-- ms@2.1.1
| | +-- on-finished@2.3.0 deduped
| | +-- range-parser@1.2.1 deduped
| | `-- statuses@1.5.0 deduped
| +-- serve-static@1.14.1
| | +-- encodeurl@1.0.2 deduped
| | +-- escape-html@1.0.3 deduped
| | +-- parseurl@1.3.3 deduped
| | `-- send@0.17.1 deduped
| +-- setprototypeof@1.1.1
| +-- statuses@1.5.0
| +-- type-is@1.6.18
| | +-- media-typer@0.3.0
| | `-- mime-types@2.1.33 deduped
| +-- utils-merge@1.0.1
| `-- vary@1.1.2 deduped
+-- mongoose@6.0.8
| +-- bson@4.5.2
| | `-- buffer@5.7.1
| |   +-- base64-js@1.5.1
| |   `-- ieee754@1.2.1
| +-- kareem@2.3.2
| +-- mongodb@4.1.1
| | +-- bson@4.5.2 deduped
| | +-- denque@1.5.1
| | +-- mongodb-connection-string-url@2.1.0
| | | +-- @types/whatwg-url@8.2.1
| | | | +-- @types/node@16.10.2
| | | | `-- @types/webidl-conversions@6.1.1
| | | `-- whatwg-url@9.1.0
| | |   +-- tr46@2.1.0
| | |   | `-- punycode@2.1.1
| | |   `-- webidl-conversions@6.1.0
| | `-- saslprep@1.0.3
| |   `-- sparse-bitfield@3.0.3
| |     `-- memory-pager@1.5.0
| +-- mpath@0.8.4
| +-- mquery@4.0.0
| | +-- debug@4.3.2
| | | `-- ms@2.1.2
| | +-- regexp-clone@1.0.0 deduped
| | `-- sliced@1.0.1 deduped
| +-- ms@2.1.2
| +-- regexp-clone@1.0.0
| +-- sift@13.5.2
| `-- sliced@1.0.1
`-- nodemon@2.0.13
  +-- chokidar@3.5.2
  | +-- anymatch@3.1.2
  | | +-- normalize-path@3.0.0 deduped
  | | `-- picomatch@2.3.0
  | +-- braces@3.0.2
  | | `-- fill-range@7.0.1
  | |   `-- to-regex-range@5.0.1
  | |     `-- is-number@7.0.0
  | +-- UNMET OPTIONAL DEPENDENCY fsevents@2.3.2
  | +-- glob-parent@5.1.2
  | | `-- is-glob@4.0.3 deduped
  | +-- is-binary-path@2.1.0
  | | `-- binary-extensions@2.2.0
  | +-- is-glob@4.0.3
  | | `-- is-extglob@2.1.1
  | +-- normalize-path@3.0.0
  | `-- readdirp@3.6.0
  |   `-- picomatch@2.3.0 deduped
  +-- debug@3.2.7
  | `-- ms@2.1.3
  +-- ignore-by-default@1.0.1
  +-- minimatch@3.0.4
  | `-- brace-expansion@1.1.11
  |   +-- balanced-match@1.0.2
  |   `-- concat-map@0.0.1
  +-- pstree.remy@1.1.8
  +-- semver@5.7.1
  +-- supports-color@5.5.0
  | `-- has-flag@3.0.0
  +-- touch@3.1.0
  | `-- nopt@1.0.10
  |   `-- abbrev@1.1.1
  +-- undefsafe@2.0.3
  | `-- debug@2.6.9 deduped
  `-- update-notifier@5.1.0
    +-- boxen@5.1.2
    | +-- ansi-align@3.0.1
    | | `-- string-width@4.2.3 deduped
    | +-- camelcase@6.2.0
    | +-- chalk@4.1.2 deduped
    | +-- cli-boxes@2.2.1
    | +-- string-width@4.2.3
    | | +-- emoji-regex@8.0.0
    | | +-- is-fullwidth-code-point@3.0.0
    | | `-- strip-ansi@6.0.1
    | |   `-- ansi-regex@5.0.1
    | +-- type-fest@0.20.2
    | +-- widest-line@3.1.0
    | | `-- string-width@4.2.3 deduped
    | `-- wrap-ansi@7.0.0
    |   +-- ansi-styles@4.3.0 deduped
    |   +-- string-width@4.2.3 deduped
    |   `-- strip-ansi@6.0.1 deduped
    +-- chalk@4.1.2
    | +-- ansi-styles@4.3.0
    | | `-- color-convert@2.0.1
    | |   `-- color-name@1.1.4
    | `-- supports-color@7.2.0
    |   `-- has-flag@4.0.0
    +-- configstore@5.0.1
    | +-- dot-prop@5.3.0
    | | `-- is-obj@2.0.0
    | +-- graceful-fs@4.2.8
    | +-- make-dir@3.1.0
    | | `-- semver@6.3.0
    | +-- unique-string@2.0.0
    | | `-- crypto-random-string@2.0.0
    | +-- write-file-atomic@3.0.3
    | | +-- imurmurhash@0.1.4
    | | +-- is-typedarray@1.0.0
    | | +-- signal-exit@3.0.5
    | | `-- typedarray-to-buffer@3.1.5
    | |   `-- is-typedarray@1.0.0 deduped
    | `-- xdg-basedir@4.0.0 deduped
    +-- has-yarn@2.1.0
    +-- import-lazy@2.1.0
    +-- is-ci@2.0.0
    | `-- ci-info@2.0.0
    +-- is-installed-globally@0.4.0
    | +-- global-dirs@3.0.0
    | | `-- ini@2.0.0
    | `-- is-path-inside@3.0.3
    +-- is-npm@5.0.0
    +-- is-yarn-global@0.3.0
    +-- latest-version@5.1.0
    | `-- package-json@6.5.0
    |   +-- got@9.6.0
    |   | +-- @sindresorhus/is@0.14.0
    |   | +-- @szmarczak/http-timer@1.1.2
    |   | | `-- defer-to-connect@1.1.3
    |   | +-- cacheable-request@6.1.0
    |   | | +-- clone-response@1.0.2
    |   | | | `-- mimic-response@1.0.1 deduped
    |   | | +-- get-stream@5.2.0
    |   | | | `-- pump@3.0.0 deduped
    |   | | +-- http-cache-semantics@4.1.0
    |   | | +-- keyv@3.1.0
    |   | | | `-- json-buffer@3.0.0
    |   | | +-- lowercase-keys@2.0.0
    |   | | +-- normalize-url@4.5.1
    |   | | `-- responselike@1.0.2
    |   | |   `-- lowercase-keys@1.0.1 deduped
    |   | +-- decompress-response@3.3.0
    |   | | `-- mimic-response@1.0.1 deduped
    |   | +-- duplexer3@0.1.4
    |   | +-- get-stream@4.1.0
    |   | | `-- pump@3.0.0
    |   | |   +-- end-of-stream@1.4.4
    |   | |   | `-- once@1.4.0 deduped
    |   | |   `-- once@1.4.0
    |   | |     `-- wrappy@1.0.2
    |   | +-- lowercase-keys@1.0.1
    |   | +-- mimic-response@1.0.1
    |   | +-- p-cancelable@1.1.0
    |   | +-- to-readable-stream@1.0.0
    |   | `-- url-parse-lax@3.0.0
    |   |   `-- prepend-http@2.0.0
    |   +-- registry-auth-token@4.2.1
    |   | `-- rc@1.2.8
    |   |   +-- deep-extend@0.6.0
    |   |   +-- ini@1.3.8
    |   |   +-- minimist@1.2.5
    |   |   `-- strip-json-comments@2.0.1
    |   +-- registry-url@5.1.0
    |   | `-- rc@1.2.8 deduped
    |   `-- semver@6.3.0
    +-- pupa@2.1.1
    | `-- escape-goat@2.1.1
    +-- semver@7.3.5
    | `-- lru-cache@6.0.0
    |   `-- yallist@4.0.0
    +-- semver-diff@3.1.1
    | `-- semver@6.3.0
    `-- xdg-basedir@4.0.0
   ~~~

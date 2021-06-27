```sh
npm install
```

## Without Browser

* Export Environment variable

```sh
export CLIENT_ID=
export ACCESS_TOKEN=
export CHANNEL_ID=
export CLIENT_SECRET=
export REDIRECT_URI=
```

* Run

```sh
node login_with_access_token.js
```

## With Browser

* Set client_id in `login_via_websocket.js`

* Run

```sh
webpack --mode development
http-server
```

# go-astilectron-vue

なんかpublicPathを指定してもjsonpScriptSrcで動的に読み込むチャンクが読めなかったのでsedで`__dirname`変数を参照するように書き換えている。マジ糞なのでもっと良い解決方法知りたい。

## install go-astilectron-bundler

```
go get -u github.com/asticode/go-astilectron-bundler/...
go install github.com/asticode/go-astilectron-bundler/astilectron-bundler
```


## build electron app using go-astilectron and vue

```
dep ensure
make
```

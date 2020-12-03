- ツイートすることができる。
 (ツイートした際にページ全体の更新を行わない)
- ツイートに対してLikeを行うことができる。
- ツイート内容はlocalstrageに保存してページ全体を更新した際にツイートした内容が再表示できる
- リポジトリのあるディレクトリで `npm start`をすることでローカルで確認できる

### プラスアルファで何らかの改良部分の実装してください
- ツイートした際にページ全体の更新を行わないために、localstrageとrecoilを組み合わせました。
- アイコンなどは、MATERIAL-UIをしようする事でよりTwitterのフロント部分を再現しました。
`$ npm install @material-ui/core`
- Twitter本家を参考に、右サイド部分を充実させるため、react-twitter-embedを採用し、私のアカウントと連動させました。
`npm install --save react-twitter-embed`


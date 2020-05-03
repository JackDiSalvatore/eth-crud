# ETH CRUD

## truffle

1) Create .secrets file that looks like
```js
{
  "projectId": "infura-project-id-goes-here",
  "seed": "truffle seed phrase goes here"
}
```

2) Deploy to Ropsten testnet

Run `truffle develop`

In the truffle develop console run
`migrate --reset --network ropsten`# eth-crud

3) Start webapp
```bash
npm install
npm start
```

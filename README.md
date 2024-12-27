# WalletConnect AppKit Example App

1. Go to [cloud.walletconnect.com](https://cloud.walletconnect.com) and create a new project. Copy the project ID.

2. Rename `.env.example` to `.env` and fill in the project ID that you just created in step 1.

3. Install dependencies:

```bash
# Using npm
npm install --legacy-peer-deps

# Or using yarn
yarn install

# Or using pnpm
pnpm install

# Or using bun
bun install
```

4. Run the development server:

```bash
npm run dev
```

...or `yarn dev`, or `pnpm dev`, or `bun dev`.

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

6. See examples of how you can use AppKit in your app.

## Learn More

To learn more about AppKit:

- [AppKit Documentation](https://docs.walletconnect.com/appkit/overview) - learn how to use AppKit in your project.
- [WalletConnect Docs](https://docs.walletconnect.com/) - docs for WalletConnect SDKs: AppKit (to build apps) and WalletKit (to build wallets).
- [WalletConnect.com](https://walletconnect.com/) - tools to build user experiences that make digital ownership effortless, intuitive, and secure.

## Troubleshooting

If you encounter dependency conflicts during installation:

1. Use `--legacy-peer-deps` flag with npm:
```bash
npm install --legacy-peer-deps
```

2. Or clean your dependencies and reinstall:
```bash
rm -rf node_modules package-lock.json
npm install --legacy-peer-deps
```

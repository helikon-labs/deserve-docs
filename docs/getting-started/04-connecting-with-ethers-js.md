---
id: connecting-with-ethers-js
sidebar_position: 4
slug: /getting-started/connecting-with-ethers-js
---

# Connecting with ethers.js

[ethers.js](https://docs.ethers.org) is a widely used JavaScript/TypeScript library for interacting with Ethereum-compatible chains. DeServe provides Ethereum-compatible RPC endpoints for Polkadot Asset Hub via the [Revive](https://github.com/paritytech/revive) pallet.

## Installation

```bash
npm install ethers
```

## Connecting to the geo-steered endpoint

```typescript
import { ethers } from 'ethers';

const provider = new ethers.JsonRpcProvider('https://asset-hub.polkadot.eth-rpc.deserve.network');

const blockNumber = await provider.getBlockNumber();
console.log(`Current block number: ${blockNumber}`);
```

## Connecting to a regional endpoint

```typescript
import { ethers } from 'ethers';

// Replace with your preferred regional endpoint
const provider = new ethers.JsonRpcProvider(
    'https://london.asset-hub.polkadot.eth-rpc.deserve.network',
);

const blockNumber = await provider.getBlockNumber();
console.log(`Current block number: ${blockNumber}`);
```

## Connecting with viem

[viem](https://viem.sh) is a modern TypeScript alternative to ethers.js:

```bash
npm install viem
```

```typescript
import { createPublicClient, http } from 'viem';

const client = createPublicClient({
    transport: http('https://asset-hub.polkadot.eth-rpc.deserve.network'),
});

const blockNumber = await client.getBlockNumber();
console.log(`Current block number: ${blockNumber}`);
```

## Available endpoints

| Network            |                                       Endpoints                                       |
| :----------------- | :-----------------------------------------------------------------------------------: |
| Polkadot Asset Hub | [Link](/polkadot-and-parachains/polkadot-asset-hub#ethereum-compatible-rpc-endpoints) |

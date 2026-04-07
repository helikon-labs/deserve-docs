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

| Location         | Endpoint                                                          |
| ---------------- | ----------------------------------------------------------------- |
| Geo-steered      | `https://asset-hub.polkadot.eth-rpc.deserve.network`              |
| Atlanta, GA, US  | `https://atlanta.asset-hub.polkadot.eth-rpc.deserve.network`      |
| Gravelines, FR   | `https://gravelines.asset-hub.polkadot.eth-rpc.deserve.network`   |
| İstanbul, TR     | `https://istanbul.asset-hub.polkadot.eth-rpc.deserve.network`     |
| Johannesburg, ZA | `https://johannesburg.asset-hub.polkadot.eth-rpc.deserve.network` |
| Limburg, DE      | `https://limburg.asset-hub.polkadot.eth-rpc.deserve.network`      |
| London, UK       | `https://london.asset-hub.polkadot.eth-rpc.deserve.network`       |
| Miami, FL, US    | `https://miami.asset-hub.polkadot.eth-rpc.deserve.network`        |
| Montreal, CA     | `https://montreal.asset-hub.polkadot.eth-rpc.deserve.network`     |
| Mumbai, IN       | `https://mumbai.asset-hub.polkadot.eth-rpc.deserve.network`       |
| Seattle, WA, US  | `https://seattle.asset-hub.polkadot.eth-rpc.deserve.network`      |
| São Paulo, BR    | `https://sao-paulo.asset-hub.polkadot.eth-rpc.deserve.network`    |
| Singapore, SG    | `https://singapore.asset-hub.polkadot.eth-rpc.deserve.network`    |
| Sydney, AU       | `https://sydney.asset-hub.polkadot.eth-rpc.deserve.network`       |
| Warsaw, PL       | `https://warsaw.asset-hub.polkadot.eth-rpc.deserve.network`       |

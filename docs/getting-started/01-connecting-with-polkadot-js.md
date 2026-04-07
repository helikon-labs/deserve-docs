---
id: connecting-with-polkadot-js
sidebar_position: 1
slug: /getting-started/connecting-with-polkadot-js
---

# Connecting with Polkadot.js

[Polkadot.js](https://polkadot.js.org/) is the most widely used JS/TS library for interacting with Polkadot and Substrate-based chains.

## Installation

```bash
npm install @polkadot/api
```

## Connecting to the geo-steered endpoint

```typescript
import { ApiPromise, WsProvider } from '@polkadot/api';

const provider = new WsProvider('wss://asset-hub.polkadot.rpc.deserve.network');
const api = await ApiPromise.create({ provider });

console.log(`Connected to chain: ${await api.rpc.system.chain()}`);
```

## Connecting to a regional endpoint

```typescript
import { ApiPromise, WsProvider } from '@polkadot/api';

// Replace with your preferred regional endpoint
const provider = new WsProvider('wss://london.asset-hub.polkadot.rpc.deserve.network');
const api = await ApiPromise.create({ provider });

console.log(`Connected to chain: ${await api.rpc.system.chain()}`);
```

## Available endpoints

| Network            |                                 Endpoints                                 |
| :----------------- | :-----------------------------------------------------------------------: |
| Polkadot Asset Hub | [Link](/polkadot-and-parachains/polkadot-asset-hub#archive-rpc-endpoints) |

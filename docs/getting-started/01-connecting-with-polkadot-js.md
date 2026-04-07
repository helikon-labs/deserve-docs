---
id: connecting-with-polkadot-js
sidebar_position: 1
slug: /getting-started/connecting-with-polkadot-js
---

# Connecting with Polkadot.js

[Polkadot.js](https://polkadot.js.org/) is the most widely used JavaScript/TypeScript library for interacting with Polkadot and Substrate-based chains.

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
const provider = new WsProvider('wss://london-01.asset-hub.polkadot.rpc.deserve.network');
const api = await ApiPromise.create({ provider });

console.log(`Connected to chain: ${await api.rpc.system.chain()}`);
```

## Available endpoints

| Location         | Endpoint                                                       |
| ---------------- | -------------------------------------------------------------- |
| Geo-steered      | `wss://asset-hub.polkadot.rpc.deserve.network`                 |
| Atlanta, GA, US  | `wss://atlanta-01.asset-hub.polkadot.rpc.deserve.network`      |
| Gravelines, FR   | `wss://gravelines-01.asset-hub.polkadot.rpc.deserve.network`   |
| İstanbul, TR     | `wss://istanbul-01.asset-hub.polkadot.rpc.deserve.network`     |
| Johannesburg, ZA | `wss://johannesburg-01.asset-hub.polkadot.rpc.deserve.network` |
| Limburg, DE      | `wss://limburg-01.asset-hub.polkadot.rpc.deserve.network`      |
| London, UK       | `wss://london-01.asset-hub.polkadot.rpc.deserve.network`       |
| Miami, FL, US    | `wss://miami-01.asset-hub.polkadot.rpc.deserve.network`        |
| Montreal, CA     | `wss://montreal-01.asset-hub.polkadot.rpc.deserve.network`     |
| Mumbai, IN       | `wss://mumbai-01.asset-hub.polkadot.rpc.deserve.network`       |
| Seattle, WA, US  | `wss://seattle-01.asset-hub.polkadot.rpc.deserve.network`      |
| São Paulo, BR    | `wss://sao-paulo-01.asset-hub.polkadot.rpc.deserve.network`    |
| Singapore, SG    | `wss://singapore-01.asset-hub.polkadot.rpc.deserve.network`    |
| Sydney, AU       | `wss://sydney-01.asset-hub.polkadot.rpc.deserve.network`       |
| Warsaw, PL       | `wss://warsaw-01.asset-hub.polkadot.rpc.deserve.network`       |

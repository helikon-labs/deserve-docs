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
const provider = new WsProvider('wss://london.asset-hub.polkadot.rpc.deserve.network');
const api = await ApiPromise.create({ provider });

console.log(`Connected to chain: ${await api.rpc.system.chain()}`);
```

## Available endpoints

| Location         | Endpoint                                                    |
| ---------------- | ----------------------------------------------------------- |
| Geo-steered      | `wss://asset-hub.polkadot.rpc.deserve.network`              |
| Atlanta, GA, US  | `wss://atlanta.asset-hub.polkadot.rpc.deserve.network`      |
| Gravelines, FR   | `wss://gravelines.asset-hub.polkadot.rpc.deserve.network`   |
| İstanbul, TR     | `wss://istanbul.asset-hub.polkadot.rpc.deserve.network`     |
| Johannesburg, ZA | `wss://johannesburg.asset-hub.polkadot.rpc.deserve.network` |
| Limburg, DE      | `wss://limburg.asset-hub.polkadot.rpc.deserve.network`      |
| London, UK       | `wss://london.asset-hub.polkadot.rpc.deserve.network`       |
| Miami, FL, US    | `wss://miami.asset-hub.polkadot.rpc.deserve.network`        |
| Montreal, CA     | `wss://montreal.asset-hub.polkadot.rpc.deserve.network`     |
| Mumbai, IN       | `wss://mumbai.asset-hub.polkadot.rpc.deserve.network`       |
| Seattle, WA, US  | `wss://seattle.asset-hub.polkadot.rpc.deserve.network`      |
| São Paulo, BR    | `wss://sao-paulo.asset-hub.polkadot.rpc.deserve.network`    |
| Singapore, SG    | `wss://singapore.asset-hub.polkadot.rpc.deserve.network`    |
| Sydney, AU       | `wss://sydney.asset-hub.polkadot.rpc.deserve.network`       |
| Warsaw, PL       | `wss://warsaw.asset-hub.polkadot.rpc.deserve.network`       |

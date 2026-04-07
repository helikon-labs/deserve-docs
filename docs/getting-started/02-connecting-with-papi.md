---
id: connecting-with-papi
sidebar_position: 2
slug: /getting-started/connecting-with-papi
---

# Connecting with PAPI

[PAPI](https://papi.how) (Polkadot API) is the **next-generation** TypeScript library for interacting with Polkadot and Substrate-based chains, designed as a **modern alternative to Polkadot.js**.

## Installation

```bash
npm install polkadot-api
```

## Adding the Asset Hub chain descriptor

```bash
npx papi add polkadot_asset_hub -n polkadot_asset_hub
```

## Connecting to the geo-steered endpoint

```typescript
import { polkadot_asset_hub } from '@polkadot-api/descriptors';
import { createClient } from 'polkadot-api';
import { getWsProvider } from 'polkadot-api/ws-provider';
import { withPolkadotSdkCompat } from 'polkadot-api/polkadot-sdk-compat';

const client = createClient(
    withPolkadotSdkCompat(getWsProvider('wss://asset-hub.polkadot.rpc.deserve.network')),
);
const api = client.getTypedApi(polkadot_asset_hub);
const blockNumber = await api.query.System.Number.getValue();
console.log(`Current block number is ${blockNumber}.`);
client.destroy();
```

## Connecting to a regional endpoint

```typescript
import { polkadot_asset_hub } from '@polkadot-api/descriptors';
import { createClient } from 'polkadot-api';
import { getWsProvider } from 'polkadot-api/ws-provider';
import { withPolkadotSdkCompat } from 'polkadot-api/polkadot-sdk-compat';

const client = createClient(
    withPolkadotSdkCompat(getWsProvider('wss://london.asset-hub.polkadot.rpc.deserve.network')),
);
const api = client.getTypedApi(polkadot_asset_hub);
const blockNumber = await api.query.System.Number.getValue();
console.log(`Current block number is ${blockNumber}.`);
client.destroy();
```

## Available endpoints

| Network            |                                 Endpoints                                 |
| :----------------- | :-----------------------------------------------------------------------: |
| Polkadot Asset Hub | [Link](/polkadot-and-parachains/polkadot-asset-hub#archive-rpc-endpoints) |

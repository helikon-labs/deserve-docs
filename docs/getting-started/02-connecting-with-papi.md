---
id: connecting-with-papi
sidebar_position: 2
slug: /getting-started/connecting-with-papi
---

# Connecting with PAPI

[PAPI](https://papi.how) (Polkadot API) is the next-generation TypeScript library for interacting with Polkadot and Substrate-based chains, designed as a modern alternative to Polkadot.js.

## Installation

```bash
npm install polkadot-api
```

## Adding the Asset Hub chain descriptor

```bash
npx papi add asset_hub_polkadot -n asset_hub_polkadot
```

## Connecting to the geo-steered endpoint

```typescript
import { createClient } from 'polkadot-api';
import { getWsProvider } from 'polkadot-api/ws-provider/web';
import { asset_hub_polkadot } from '@polkadot-api/descriptors';

const client = createClient(getWsProvider('wss://asset-hub.polkadot.rpc.deserve.network'));

const api = client.getTypedApi(asset_hub_polkadot);
```

## Connecting to a regional endpoint

```typescript
import { createClient } from 'polkadot-api';
import { getWsProvider } from 'polkadot-api/ws-provider/web';
import { asset_hub_polkadot } from '@polkadot-api/descriptors';

// Replace with your preferred regional endpoint
const client = createClient(getWsProvider('wss://london.asset-hub.polkadot.rpc.deserve.network'));

const api = client.getTypedApi(asset_hub_polkadot);
```

## Available endpoints

| Network            |                                 Endpoints                                 |
| :----------------- | :-----------------------------------------------------------------------: |
| Polkadot Asset Hub | [Link](/polkadot-and-parachains/polkadot-asset-hub#archive-rpc-endpoints) |

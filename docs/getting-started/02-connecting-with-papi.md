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
const client = createClient(
    getWsProvider('wss://london-01.asset-hub.polkadot.rpc.deserve.network'),
);

const api = client.getTypedApi(asset_hub_polkadot);
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

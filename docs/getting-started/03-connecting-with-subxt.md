---
id: connecting-with-subxt
sidebar_position: 3
slug: /getting-started/connecting-with-subxt
---

# Connecting with subxt

[subxt](https://github.com/paritytech/subxt) is a Rust library for interacting with Polkadot and Substrate-based chains, maintained by Parity Technologies.

## Installation

Add subxt to your `Cargo.toml`:

```toml
[dependencies]
subxt = "0.38"
tokio = { version = "1", features = ["full"] }
```

## Generating the metadata

```bash
subxt metadata --url wss://asset-hub.polkadot.rpc.deserve.network > metadata.scale
```

## Connecting to the geo-steered endpoint

```rust
use subxt::{OnlineClient, PolkadotConfig};

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let api = OnlineClient::<PolkadotConfig>::from_url(
        "wss://asset-hub.polkadot.rpc.deserve.network"
    ).await?;

    println!("Connected. Genesis hash: {:?}", api.genesis_hash());
    Ok(())
}
```

## Connecting to a regional endpoint

```rust
use subxt::{OnlineClient, PolkadotConfig};

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    // Replace with your preferred regional endpoint
    let api = OnlineClient::<PolkadotConfig>::from_url(
        "wss://london-01.asset-hub.polkadot.rpc.deserve.network"
    ).await?;

    println!("Connected. Genesis hash: {:?}", api.genesis_hash());
    Ok(())
}
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

---
id: connecting-with-subxt
sidebar_position: 4
slug: /getting-started/connecting-with-subxt
---

# Connecting with subxt

[subxt](https://github.com/paritytech/subxt) is a Rust library for interacting with Polkadot and Substrate-based chains, maintained by Parity Technologies.

## Installation

Add subxt to your `Cargo.toml`:

```toml
[dependencies]
subxt = "0.50"
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
    // replace with your preferred regional endpoint
    let api = OnlineClient::<PolkadotConfig>::from_url(
        "wss://london.asset-hub.polkadot.rpc.deserve.network"
    ).await?;

    println!("Connected. Genesis hash: {:?}", api.genesis_hash());
    Ok(())
}
```

## Available endpoints

| Network            |                                 Endpoints                                 |
| :----------------- | :-----------------------------------------------------------------------: |
| Polkadot Asset Hub | [Link](/polkadot-and-parachains/polkadot-asset-hub#archive-rpc-endpoints) |
| Polkadot Coretime  | [Link](/polkadot-and-parachains/polkadot-coretime#archive-rpc-endpoints)  |

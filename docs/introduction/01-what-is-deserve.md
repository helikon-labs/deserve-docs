---
id: what-is-deserve
sidebar_position: 1
slug: /
---

# What is DeServe

DeServe is a **progressively decentralized** infrastructure services network, [launched](https://forum.polkadot.network/t/launched-a-global-rpc-network-starting-with-polkadot-asset-hub-first-step-of-a-depin-14-locations-lowest-latency-cost-benchmarks-free-endpoints/17422) on Polkadot. Its initial deployment provides a **global archive RPC network for Polkadot Asset Hub,** with **Ethereum-compatible RPC support,** across **14 locations and 6 continents,** with a 15th location in Tokyo currently being deployed.

The launch of DeServe is motivated by three major factors:

1. The unmet demand for **general-purpose infrastructure** in the ecosystem such as web hosting, VMs, and CPU/GPU compute services.
2. The **lack of pay-as-you-go, cost-competitive alternatives** for these services.
3. The absence of a **Polkadot-based DePIN** capable of both meeting these needs, exporting services to other blockchain ecosystems and to institutional and individual end-users.

## Early traction

Since launching on March 31, 2026, DeServe has grown rapidly: from 1.7M requests on day 1 to over 4.5M/day by day 3, reaching **45M+ requests in a single day** within the first week.

## How it works

Requests are routed to the nearest available node via geo-steered load balancing, based on the client's IP address. Endpoint health is monitored every 15 seconds, and unreachable nodes are immediately removed from the pool, ensuring high availability. Live node status and performance data are available on the [deserve.network](https://deserve.network) dashboard.

## Current deployment

The initial deployment covers Polkadot Asset Hub archive RPC and Ethereum-compatible RPC across 14 live locations, with a 15th in Tokyo currently being deployed. Coverage is expanding to additional Polkadot system parachains, with Coretime currently rolling out.

## Performance & cost

DeServe has the **lowest latency among all major Polkadot RPC providers**, verified via [Compare Nodes](https://comparenodes.com) benchmarks run against IBP, Dwellir, OnFinality, and LuckyFriday. DeServe is faster in 6/6 continents and over 24/26 regions compared to OnFinality, LuckyFriday, and Dwellir, and in 5/6 continents and over 18/26 regions compared to IBP.

DeServe is also approximately **80% cheaper than IBP** across comparable infrastructure.

## Decentralization roadmap

DeServe is operated by [Helikon](https://helikon.io), a Polkadot-native infrastructure and software development team based in İstanbul, with infrastructure services provided by 6 operators including Helikon.

The network decentralizes progressively through defined phases:

- **Alpha** — Helikon operates as the initial operator, managing the network and coordinating providers.
- **Beta** — A network committee of 3 native Polkadot infrastructure operators takes over coordination.
- **On-chain** — Governance, provider coordination, and pay-as-you-go payments with on-chain provision and consumption proofs move fully on-chain.

A testnet is already deployed on Paseo (para ID 5150). Planned milestones include a transition to open-source DNS (replacing Cloudflare for geo-steered load balancing) and progressive replacement of cloud providers with native Polkadot infrastructure providers.

---
id: what-is-deserve
sidebar_position: 1
slug: /
---

# What is DeServe

DeServe is a **progressively decentralized** infrastructure services network, [launched](https://forum.polkadot.network/t/launched-a-global-rpc-network-starting-with-polkadot-asset-hub-first-step-of-a-depin-14-locations-lowest-latency-cost-benchmarks-free-endpoints/17422) on Polkadot March 31, 2026. Its initial deployment provides a **global archive RPC network for Polkadot Asset Hub** with **Ethereum-compatible RPC support**, and **Polkadot Coretime,** across **15 locations and 6 continents.** Coverage is expanding to additional Polkadot system parachains, with Coretime currently rolling out.

The launch of DeServe is motivated by three major factors:

1. The unmet demand for **general-purpose infrastructure** in the ecosystem such as web hosting, VMs, and CPU/GPU compute services.
2. The lack of **pay-as-you-go, cost-competitive alternatives** for these services.
3. The absence of a **Polkadot-based DePIN** capable of both meeting these needs, exporting services to other blockchain ecosystems and to institutional and individual end-users.

## Early traction

Since its launch, DeServe has grown rapidly from 1.7M requests/day on launch to over 4.5M/day by day 3, reaching **50M+ requests/24h** within the first week.

## How it works

Requests are routed to the nearest available node via geo-steered load balancing, based on the client's IP address. Endpoint health is monitored every 15 seconds, and unreachable nodes are immediately removed from the pool, ensuring high availability. Live node status and performance data are available on the [deserve.network](https://deserve.network) dashboard.

<a href="https://deserve.network" target="_blank"><img src="/img/deserve_network_web_scr.png" alt="deserve.network"></img></a>

## Performance & cost

DeServe has the **lowest latency among all major Polkadot RPC providers**, verified via [Compare Nodes](https://comparenodes.com) benchmarks run against IBP ([run #1](https://www.comparenodes.com/global-node-comparison/3a6c4cf0-f065-4bcb-9791-55f64dc7876f/), [run #2](https://www.comparenodes.com/global-node-comparison/bf91bbee-1fa0-4ff8-8130-2cbe9941dfbc/), [run #3](https://www.comparenodes.com/global-node-comparison/16cad275-c3ed-4c61-b6c7-e177b9484de3/)), Dwellir ([run #1](https://www.comparenodes.com/global-node-comparison/a918f03e-4e10-4cba-9d89-b7c469075927/)), OnFinality ([run #1](https://www.comparenodes.com/global-node-comparison/b297f27c-4c7d-498b-bf81-d3882bb48b66/)), and LuckyFriday ([run #1](https://www.comparenodes.com/global-node-comparison/ccd9b336-4ecf-410b-b4b1-08cb4a7fd68f/)).

DeServe is faster in **6/6 continents** and over **24/26 regions** compared to OnFinality, LuckyFriday, and Dwellir, and in **5/6 continents** and over **18/26 regions** compared to IBP.

DeServe is also approximately **80% cheaper than IBP** across comparable infrastructure.

## Decentralization roadmap

DeServe is founded and launched by Helikon, an İstanbul-based Polkadot-native infrastructure and software development team. Its initial deployment spans **15 locations** across **7 providers**, with cloud infrastructure progressively being replaced by native Polkadot operators.

The network decentralizes progressively through defined phases:

- **Alpha:** Helikon operates as the initial operator, managing the network and coordinating providers.
- **Beta:** A network committee of 3 Polkadot-native infrastructure operators takes over coordination.
- **On-chain:** Governance, provider coordination, and pay-as-you-go payments with on-chain provision and consumption proofs move fully on-chain.

A testnet is already deployed on Paseo ([para ID 5150](https://telemetry.polkadot.io/#list/0x1260a2a27387e782a0f11f9fb4e42eb80d7ccff994a30ff8fb2c409315f38f49)). Planned milestones include a transition to open-source DNS (replacing Cloudflare for geo-steered load balancing) and progressive replacement of cloud providers with native Polkadot infrastructure providers.

---
id: rate-limits-and-configuration
sidebar_position: 3
slug: /introduction/rate-limits-and-configuration
---

# Rate Limits & Configuration

DeServe applies rate limits on public-facing endpoints as a security measure and to ensure fair resource allocation across all users.

## Rate limits

| Parameter                    | Limit |
| ---------------------------- | ----- |
| Requests per second          | 100   |
| Subscriptions per connection | 256   |
| Max request size             | 2MB   |
| Max response size            | 7MB   |

These limits are sufficient for general-purpose usage. For comparison, OnFinality's public WebSocket limit for Polkadot Asset Hub is [5 response units/second](https://documentation.onfinality.io/support/public-rate-limits).

## Private endpoints

As DeServe evolves, providers will be able to offer private endpoints with higher or no rate limits. If you require higher limits in the meantime, please reach out via the [Polkadot forum](https://forum.polkadot.network/t/launched-a-global-rpc-network-starting-with-polkadot-asset-hub-first-step-of-a-depin-14-locations-lowest-latency-cost-benchmarks-free-endpoints/17422) or send a DM to [@kukabi](https://x.com/kukabi).

## Supported protocols

| Protocol        | Support |
| --------------- | ------- |
| WebSocket (WSS) | ✅      |
| HTTPS           | ✅      |

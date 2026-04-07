---
id: polkadot-and-parachains-overview
sidebar_position: 1
slug: /polkadot-and-parachains/overview
---

# Polkadot & Parachains

## Overview

DeServe provides archive RPC, and Ethereum-compatible RPC services where applicable, for Polkadot and its system parachains. The current deployment covers Polkadot Asset Hub, with additional system parachains being rolled out progressively.

| Chain       | Archive RPC | ETH RPC | Status      |
| ----------- | :---------: | :-----: | ----------- |
| Asset Hub   |     ✅      |   ✅    | Live        |
| Coretime    |     🔜      |   N/A   | In progress |
| Bridge Hub  |     🔜      |   N/A   | Planned     |
| Collectives |     🔜      |   N/A   | Planned     |
| People      |     🔜      |   N/A   | Planned     |

All deployments are across the full **14-location** network with geo-steered load balancing, with a 15th location in Tokyo currently being deployed.

## Network details

| Parameter                  | Value             |
| -------------------------- | ----------------- |
| Network                    | Polkadot          |
| Chain type                 | System parachains |
| Node type                  | Archive           |
| Locations                  | 14                |
| Geo-steered load balancing | ✅                |
| Archive RPC                | ✅                |
| Ethereum-compatible RPC    | ✅                |

## Infrastructure

| Parameter             | Value                      |
| --------------------- | -------------------------- |
| Providers             | 6                          |
| Uplink bandwidth      | 1G – 10G                   |
| Storage               | 950GB – 2TB NVMe           |
| RAM                   | ECC                        |
| Traffic               | Unmetered on most nodes    |
| Monitoring            | Prometheus & Grafana, 24/7 |
| Health check interval | 15 seconds                 |
| Uptime SLA            | 99.9%+                     |

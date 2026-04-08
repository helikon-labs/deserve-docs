import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

// import crystalAPISidebar from './docs/crystal-api/sidebar';

const sidebars: SidebarsConfig = {
    introductionSidebar: [
        {
            type: 'doc',
            id: 'introduction/what-is-deserve',
        },
        {
            type: 'doc',
            id: 'introduction/locations',
        },
        {
            type: 'doc',
            id: 'introduction/rate-limits-and-configuration',
        },
    ],
    gettingStartedSidebar: [
        {
            type: 'doc',
            id: 'getting-started/getting-started',
        },
        {
            type: 'doc',
            id: 'getting-started/connecting-with-polkadot-js',
        },
        {
            type: 'doc',
            id: 'getting-started/connecting-with-papi',
        },
        {
            type: 'doc',
            id: 'getting-started/connecting-with-subxt',
        },
        {
            type: 'doc',
            id: 'getting-started/connecting-with-ethers-js',
        },
        {
            type: 'doc',
            id: 'getting-started/connecting-with-dedot',
        },
    ],
    polkadotSidebar: [
        {
            type: 'doc',
            id: 'polkadot-and-parachains/polkadot-and-parachains-overview',
        },
        {
            type: 'doc',
            id: 'polkadot-and-parachains/polkadot-asset-hub',
        },
    ],
    // crystalAPISidebar,
};

export default sidebars;

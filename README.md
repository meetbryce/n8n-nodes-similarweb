# n8n-nodes-similarweb

This is an n8n community node. It lets you use SimilarWeb in your n8n workflows.

SimilarWeb is a digital intelligence platform that provides web traffic analytics, market intelligence, and competitive insights for websites across the internet.

[n8n](https://n8n.io/) is a [fair-code licensed](https://docs.n8n.io/sustainable-use-license/) workflow automation platform.

[Installation](#installation)  
[Operations](#operations)  
[Credentials](#credentials)  
[Compatibility](#compatibility)  
[Resources](#resources)  

## Installation

Follow the [installation guide](https://docs.n8n.io/integrations/community-nodes/installation/) in the n8n community nodes documentation.

Quick install: In n8n, go to **Settings** > **Community Nodes** and search for `n8n-nodes-similarweb`.

## Operations

This node supports the following operations on the **Domain** resource:

### Lead Enrichment
Enrich leads with firmographic, traffic, and engagement metrics for a given domain. Returns comprehensive data about:
- Company information and firmographics
- Traffic metrics and trends
- Engagement statistics
- Geographic distribution

### Demographics: Age
Get traffic breakdown by age group (18-24, 25-34, 35-44, 45-54, 55-64, 65+) for visitors to a domain.

### Demographics: Gender
Get traffic breakdown by gender (female, male) for visitors to a domain.

### Related Websites
Get websites frequently visited by the same visitors, including:
- Affinity scores
- Overlap metrics
- AdSense relationships

## Credentials

To use this node, you need a SimilarWeb API key.

### Prerequisites
1. Sign up for a [SimilarWeb account](https://www.similarweb.com/)
2. Subscribe to an API plan that includes access to the endpoints you need
3. Generate an API key from your SimilarWeb dashboard

### Setup in n8n
1. In n8n, go to **Credentials** > **New**
2. Search for **Similarweb API**
3. Enter your API Key
4. Click **Save**

The node will automatically test your credentials by calling the `/capabilities` endpoint.

## Compatibility

- Minimum n8n version: 1.0.0
- Tested against n8n version: 1.x

This node uses the SimilarWeb API v1 and v4 endpoints.

## Resources

* [n8n community nodes documentation](https://docs.n8n.io/integrations/#community-nodes)
* [SimilarWeb API Documentation](https://developer.similarweb.com/reference)
* [GitHub Repository](https://github.com/meetbryce/n8n-nodes-similarweb)

# Development

Run locally with `npm run dev` which will run a local n8n instance with hot-reloading of these nodes.
Create & deploy a release with `npm run release`.
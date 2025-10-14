import type { INodeProperties } from 'n8n-workflow';

const showOnlyForDomainLeadEnrichment = {
	operation: ['leadEnrichment'],
	resource: ['domain'],
};

export const domainLeadEnrichmentDescription: INodeProperties[] = [
	{
		displayName: 'Domain',
		name: 'domain',
		type: 'string',
		displayOptions: { show: showOnlyForDomainLeadEnrichment },
		default: '',
		required: true,
		placeholder: 'example.com',
		description: 'The domain name to get lead enrichment data for',
	},
];


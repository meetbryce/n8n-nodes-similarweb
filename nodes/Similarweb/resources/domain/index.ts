import type { INodeProperties } from 'n8n-workflow';
import { domainLeadEnrichmentDescription } from './leadEnrichment';

const showOnlyForDomain = {
	resource: ['domain'],
};

export const domainDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForDomain,
		},
		options: [
			{
				name: 'Lead Enrichment',
				value: 'leadEnrichment',
				action: 'Get lead enrichment data',
				description: 'Enrich leads with firmographic, traffic, and engagement metrics',
				routing: {
					request: {
						method: 'GET',
						url: '=/v1/website/{{$parameter.domain}}/lead-enrichment/all?country=us&main_domain_only=false&format=json&show_verified=false&start_date={{ DateTime.now().minus({ months: 12 }).toFormat("yyyy-MM") }}&end_date={{ DateTime.now().minus({ months: 1 }).toFormat("yyyy-MM") }}',
					},
				},
			},
		],
		default: 'leadEnrichment',
	},
	...domainLeadEnrichmentDescription,
];


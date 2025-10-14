import type { INodeProperties } from 'n8n-workflow';

const showOnlyForDomainDemographicsAge = {
	operation: ['demographicsAge'],
	resource: ['domain'],
};

export const domainDemographicsAgeDescription: INodeProperties[] = [
	{
		displayName: 'Domain',
		name: 'domain',
		type: 'string',
		displayOptions: { show: showOnlyForDomainDemographicsAge },
		default: '',
		required: true,
		placeholder: 'example.com',
		description: 'The domain name to get demographics age data for',
	},
];


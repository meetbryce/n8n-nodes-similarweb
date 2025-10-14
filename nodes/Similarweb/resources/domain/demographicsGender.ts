import type { INodeProperties } from 'n8n-workflow';

const showOnlyForDomainDemographicsGender = {
	operation: ['demographicsGender'],
	resource: ['domain'],
};

export const domainDemographicsGenderDescription: INodeProperties[] = [
	{
		displayName: 'Domain',
		name: 'domain',
		type: 'string',
		displayOptions: { show: showOnlyForDomainDemographicsGender },
		default: '',
		required: true,
		placeholder: 'example.com',
		description: 'The domain name to get demographics gender data for',
	},
];


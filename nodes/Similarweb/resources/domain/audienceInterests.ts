import type { INodeProperties } from 'n8n-workflow';

const showOnlyForDomainAudienceInterests = {
	operation: ['audienceInterests'],
	resource: ['domain'],
};

export const domainAudienceInterestsDescription: INodeProperties[] = [
	{
		displayName: 'Domain',
		name: 'domain',
		type: 'string',
		displayOptions: { show: showOnlyForDomainAudienceInterests },
		default: '',
		required: true,
		placeholder: 'example.com',
		description: 'The domain name to get audience interests data for',
	},
];


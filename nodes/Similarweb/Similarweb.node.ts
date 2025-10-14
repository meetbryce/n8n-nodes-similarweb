import type { INodeType, INodeTypeDescription } from 'n8n-workflow';
import { domainDescription } from './resources/domain';

export class Similarweb implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Similarweb',
		name: 'similarweb',
		icon: { light: 'file:similarweb.svg', dark: 'file:similarweb.dark.svg' },
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Interact with the Similarweb API',
		defaults: {
			name: 'Similarweb',
		},
		usableAsTool: true,
		inputs: ['main'],
		outputs: ['main'],
		credentials: [{ name: 'similarwebApi', required: true }],
		requestDefaults: {
			baseURL: 'https://api.similarweb.com/',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: [
					{
						name: 'Domain',
						value: 'domain',
					},
				],
				default: 'domain',
			},
			...domainDescription,
		],
	};
}

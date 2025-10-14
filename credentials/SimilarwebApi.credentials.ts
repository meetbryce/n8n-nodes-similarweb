import type {
	IAuthenticateGeneric,
	ICredentialTestRequest,
	ICredentialType,
	INodeProperties,
	Icon,
} from 'n8n-workflow';

export class SimilarwebApi implements ICredentialType {
	name = 'similarwebApi';

	displayName = 'Similarweb API';

	icon: Icon = 'file:../nodes/Similarweb/similarweb.svg';

	// Link to your community node's README
	documentationUrl = 'https://github.com/org/-similarweb?tab=readme-ov-file#credentials';

	properties: INodeProperties[] = [
		{
			displayName: 'API Key',
			name: 'apiKey',
			type: 'string',
			typeOptions: { password: true },
			required: true,
			default: '',
		},
	];

	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			qs: {
				api_key: '={{$credentials.apiKey}}',
			},
		},
	};

	test: ICredentialTestRequest = {
		request: {
			baseURL: 'https://api.similarweb.com/',
			url: '/capabilities',
			qs: {
				api_key: '={{$credentials.apiKey}}',
			},
		},
	};
}

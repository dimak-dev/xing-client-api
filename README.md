# Xing API Client

The `Xing API Client` is a TypeScript/JavaScript module designed to simplify interactions with the Xing API.

## Features

- Generate OAuth 2.0 authorization URLs for implementing Xing authentication.
- Retrieve access tokens using the authorization code.
- Refresh access tokens using the refresh token.
- TypeScript support with full type definitions for parameters and responses.

---

## Installation

To use Xing API Client, install the `xing-api-client` module from NPM:

```bash
npm install xing-api-client
```

or using Yarn:

```bash
yarn add xing-api-client
```

---

## Authorization

Xing uses the OAuth 2.0 protocol to authorize third-party applications securely. This process ensures that user
credentials are never shared with the application, and instead, an access token is issued for making API requests on
behalf of the user. Below is a high-level overview of how the authorization process works:

### Retrieving Xing authorization URL

```typescript
declare function getAuthorizationUrl(parameters: XingGetAuthorizationUrlParameters): string
```

#### Parameters

| Parameter      | Type     | Description                                                                                                           | Required | Example                                    |
|----------------|----------|-----------------------------------------------------------------------------------------------------------------------|----------|--------------------------------------------|
| `client_id`    | `string` | The client ID obtained during application registration.                                                               | Yes      | `"your-client-id"`                         |
| `redirect_uri` | `string` | The URL to which the user will be redirected after authorization. Must match the URL registered with the application. | Yes      | `"https://your-redirect-uri.com/callback"` |
| `state`        | `string` | An optional parameter for maintaining state between the request and the callback.                                     | No       | `"random-state-value"`                     |

---

#### Usage Examples

Importing the Function:

```typescript
// TypeScript
import { getAuthorizationUrl } from 'xing-api-client';

// or JavaScript
const { getAuthorizationUrl } = require('xing-api-client');
```

Generating a URL with the required `client_id` and `redirect_uri` parameters.

**TypeScript (ESM)**

```typescript
const url = getAuthorizationUrl({
    client_id: "your-client-id",
    redirect_uri: "https://your-redirect-uri.com/callback",
});

console.log(url);
// Example output: "https://api.xing.com/auth/oauth2/authorize?client_id=your-client-id&redirect_uri=https://your-redirect-uri.com/callback"
```

Generating a URL with the optional `state` parameter to maintain state between the authorization request and the
callback (e.g., for CSRF protection or storing session-specific data).

```typescript

const url = getAuthorizationUrl({
    client_id: "your-client-id",
    redirect_uri: "https://your-redirect-uri.com/callback",
    state: "secure-random-state",
});

console.log(url);
// Example output: "https://api.xing.com/auth/oauth2/authorize?client_id=your-client-id&redirect_uri=https://your-redirect-uri.com/callback&state=secure-random-state"
```

After authentication on Xing, the user will be redirected to your specified `redirect_uri`, which will include an
additional `code` search parameter in the URL. For example: `https://your-redirect-uri.com?code=example-code`.
This `code` must be used as a parameter to retrieve an access token.

### Retrieving Access Token

```typescript
declare async function getAccessToken(parameters: XingGetAccessTokenParameters): Promise<XingGetAccessTokenResponse>
```

#### Parameters

| Parameter       | Type     | Description                                                                                 | Required | Example                                    |
|-----------------|----------|---------------------------------------------------------------------------------------------|----------|--------------------------------------------|
| `client_id`     | `string` | The client ID obtained during application registration.                                     | Yes      | `"your-client-id"`                         |
| `client_secret` | `string` | The client secret obtained during application registration, corresponding to the client ID. | Yes      | `"your-client-secret"`                     |
| `redirect_uri`  | `string` | The redirect URI used during authorization.                                                 | Yes      | `"https://your-redirect-uri.com/callback"` |
| `code`          | `string` | The parameter received from the client after completing authorization on the Xing platform. | Yes      | `"example-code"`                           |

The function `getAccessToken` returns a promise that resolves to an object containing the following fields:

| Field           | Type     | Description                                                  | Example                  |
|-----------------|----------|--------------------------------------------------------------|--------------------------|
| `access_token`  | `string` | The access token issued by Xing.                             | `"abcd1234efgh5678ijkl"` |
| `refresh_token` | `string` | The refresh token used to obtain a new access token.         | `"mnop1234qrst5678uvwx"` |
| `expires_in`    | `number` | The duration in seconds for which the access token is valid. | `3600`                   |
| `token_type`    | `string` | The type of token issued (always `"bearer"`).                | `"bearer"`               |
| `user_id`       | `string` | The user ID associated with the access token.                | `"12345678"`             |

#### Usage Examples

Importing the Function:

```typescript
// TypeScript
import { getAccessToken } from 'xing-api-client';

// or JavaScript
const { getAccessToken } = require('xing-api-client');
```

Fetching an access token using `.then()` and `.catch()`:

```typescript
const parameters = {
    client_id: 'your-client-id',
    client_secret: 'your-client-secret',
    redirect_uri: 'https://your-redirect-uri.com/callback',
    code: 'authorization-code',
};

getAccessToken(parameters)
    .then(response => {
        console.log('Access token:', response.access_token);
        console.log('Refresh token:', response.refresh_token);
    })
    .catch(error => {
        console.error('Error fetching access token:', error);
    });
```

Fetching an access token using `async/await`:

```typescript
async function fetchAccessToken() {
    try {
        const parameters: XingGetAccessTokenParameters = {
            client_id: 'your-client-id',
            client_secret: 'your-client-secret',
            redirect_uri: 'https://your-redirect-uri.com/callback',
            code: 'authorization-code',
        };
        const response = await getAccessToken(parameters);
        console.log('Access token:', response.access_token);
        console.log('Refresh token:', response.refresh_token);
    } catch (error) {
        console.error('Error fetching access token:', error);
    }
}
```

### Refreshing token

Refreshing the token is necessary because access tokens have a limited lifespan (as defined by the `expires_in` field in
the token response). When the token expires, it can no longer be used to authenticate API requests. To maintain seamless
operation and avoid requiring the user to re-authenticate, a refresh token is used to obtain a new access token. This
ensures the application can continue making API requests on behalf of the user without further interruption.

```typescript
declare export async function refreshAccessToken(parameters: XingRefreshAccessTokenParameters): Promise<XingRefreshAccessTokenResponse>
```

#### Parameters

| Parameter       | Type     | Description                                                                                 | Required | Example                |
|-----------------|----------|---------------------------------------------------------------------------------------------|----------|------------------------|
| `client_id`     | `string` | The client ID provided by Xing during application registration.                             | Yes      | `"your-client-id"`     |
| `client_secret` | `string` | The client secret obtained during application registration, corresponding to the client ID. | Yes      | `"your-client-secret"` |
| `refresh_token` | `string` | The refresh token issued by Xing on the step `Retrieving Access Token`.                     | Yes      | `"your-refresh-token"` |

The function `refreshAccessToken` returns a promise that resolves to an object containing the following fields:

| Field           | Type     | Description                                                  | Example                  |
|-----------------|----------|--------------------------------------------------------------|--------------------------|
| `access_token`  | `string` | The access token issued by Xing.                             | `"abcd1234efgh5678ijkl"` |
| `refresh_token` | `string` | The refresh token used to obtain a new access token.         | `"mnop1234qrst5678uvwx"` |
| `expires_in`    | `number` | The duration in seconds for which the access token is valid. | `3600`                   |
| `token_type`    | `string` | The type of token issued (always `"bearer"`).                | `"bearer"`               |
| `user_id`       | `string` | The user ID associated with the access token.                | `"12345678"`             |

#### Usage Examples

Importing the Function:

```typescript
// TypeScript
import { refreshAccessToken } from 'xing-api-client';

// or JavaScript
const { refreshAccessToken } = require('xing-api-client');
```

Fetching an access token using `.then()` and `.catch()`:

```typescript
const parameters = {
    client_id: 'your-client-id',
    client_secret: 'your-client-secret',
    refresh_token: 'your-refresh-token',
};

refreshAccessToken(parameters)
    .then(response => {
        console.log('Access token:', response.access_token);
    })
    .catch(error => {
        console.error('Error fetching access token:', error);
    });
```

Fetching an access token using `async/await`:

```typescript
async function fetchAccessToken() {
    try {
        const parameters: XingGetAccessTokenParameters = {
            client_id: 'your-client-id',
            client_secret: 'your-client-secret',
            refresh_token: 'your-refresh-token',
        };
        const response = await refreshAccessToken(parameters);
        console.log('Access token:', response.access_token);
    } catch (error) {
        console.error('Error fetching access token:', error);
    }
}
```

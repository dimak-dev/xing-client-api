# E-Recruiting API

The XING E-Recruiting API allows to post job postings on XING Jobs as well as monitoring their status and performance.
This guide is designed to help you get up and running quickly with the XING E-Recruiting API by outlining the most 
important steps.

First things first: Only XING customers with a valid contract are able to post job ads on XING via API.
If you don’t have an organization-id and an order-id from a contract yet, please e-mail e-recruiting-api@xing.com

For more detailed information about the XING E-Recruiting API, please refer to the official documentation available
at [XING E-Recruiting API Documentation](https://dev.xing.com/partners/job_integration/api_docs).

This client implements the following methods:

- **Create Job Postings**: Add new job postings to the XING platform.
- **Update Job Postings**: Modify existing job postings.
- **Activate Job Postings**: Publish or make a job posting active.
- **Archive Job Postings**: Remove a job posting from active listings but keep it for reference.
- **Delete Job Postings**: Permanently remove a job posting.
- **Retrieve Order Information**: Fetch details about existing orders, including organization and order identifiers.

To use any of the API methods mentioned above, you need to instantiate an instance of `XingERecruitingApiClient` by
providing an `accessToken` as shown below:

```typescript
import { XingERecruitingApiClient } from 'xing-api-client';
// or JavaScript
const { XingERecruitingApiClient } = require('xing-api-client');


// Replace 'your-access-token' with a valid access token obtained through the authorization process.
const client = new XingERecruitingApiClient('your-access-token');
```

To obtain an `accessToken`, please refer to the [Authorization Guide](./auth.md) for detailed instructions.

### Create Job Postings

To create a job posting, you must call the `client.createJobPosting` method with the following signature:

```typescript
public async createJobPosting(jobPosting: XingCreatePostingRequest): Promise<XingCreatePostingResponse>;
```

Here is an example of how to use it:

```typescript
const jobPostingData: XingCreatePostingRequest = {
    function: "Software Developer", // Job title
    description: "We are looking for a skilled Software Developer to join our team.", // Job description
    // ...other required and optional fields related to the job you intend to post
};

(async () => {
    try {
        const newJobPosting: XingCreatePostingResponse = await client.createJobPosting(jobPostingData);
        console.log("Job posting created successfully:", newJobPosting);
    } catch (error) {
        console.error("Failed to create job posting:", error);
    }
})();
```

Replace the values in `jobPostingData` with the actual details of the job you intend to post. For more information on
the required fields and their format, please refer to
the [official API documentation](https://dev.xing.com/partners/job_integration/api_docs/create_postings).

### Update Job Posting

To update a job posting, you must call the `client.updateJobPosting` method with the following signature:

```typescript
public async updateJobPosting(jobPostingId: number, jobPosting: Partial<XingCreatePostingRequest>): Promise<void>;
```

Here is an example of how to use it:

```typescript
const updatedJobPostingData: Partial<XingCreatePostingRequest> = {
    function: "Senior Software Developer", // Updated job title
    description: "We are looking for an experienced Senior Software Developer to lead our team.",
    // ...other fields you want to update
};

(async () => {
    try {
        const jobPostingId = 12345; // Replace with the ID of the job posting you want to update
        await client.updateJobPosting(jobPostingId, updatedJobPostingData);
        console.log("Job posting updated successfully.");
    } catch (error) {
        console.error("Failed to update job posting:", error);
    }
})();
```

Make sure to replace `jobPostingId` and the values in `updatedJobPostingData` with the actual ID of the job posting and
the updated details you want to apply. For more information on updatable fields and their format, please refer to
the [official API documentation](https://dev.xing.com/partners/job_integration/api_docs/update_postings).

### Activate Job Posting

To activate a job posting, you can use one of the following overloaded methods:

```typescript
public async activatePosting(jobPostingId: number): Promise<void>;
public async activatePosting(jobPosting: XingPosting): Promise<void>;
```

Here is an example of how to use it:

```typescript
(async () => {
    try {
        const jobPostingId = 12345; // Replace with the ID of the job posting you want to activate
        await client.activatePosting(jobPostingId);
        console.log("Job posting activated successfully.");
    } catch (error) {
        console.error("Failed to activate job posting:", error);
    }

    // or

    try {
        const jobPosting = await client.createJobPosting({/* object with a job posting */})
        await client.activatePosting(jobPosting);
        console.log("Job posting activated successfully.");
    } catch (error) {
        console.error("Failed to activate job posting:", error);
    }
})();
```

Make sure to replace `jobPostingId` or the `jobPosting` object with the actual details of the job posting you want to
activate. For more information, refer to
the [official API documentation](https://dev.xing.com/partners/job_integration/api_docs/activate_postings).

### Archive Job Posting

To archive a job posting, you can use one of the following overloaded methods:

```typescript
public async archivePosting(jobPostingId: number): Promise<void>;
public async archivePosting(jobPosting: XingPosting): Promise<void>;
```

Here is an example of how to use it:

```typescript
(async () => {
    try {
        const jobPostingId = 12345; // Replace with the ID of the job posting you want to archive
        await client.archivePosting(jobPostingId);
        console.log("Job posting archived successfully.");
    } catch (error) {
        console.error("Failed to archive job posting:", error);
    }

    // or

    try {
        const jobPosting = await client.createJobPosting({/* object with a job posting */})
        await client.archivePosting(jobPosting);
        console.log("Job posting archived successfully.");
    } catch (error) {
        console.error("Failed to archive job posting:", error);
    }
})();
```

Make sure to replace `jobPostingId` or the `jobPosting` object with the actual details of the job posting you want to
archive. For more information, refer to
the [official API documentation](https://dev.xing.com/partners/job_integration/api_docs/archive_postings).

### Deactivate Job Posting

To deactivate a job posting, you can use one of the following overloaded methods:

```typescript
public async deactivatePosting(jobPostingId: number): Promise<void>;
public async deactivatePosting(jobPosting: XingPosting): Promise<void>;
```

Here is an example of how to use it:

```typescript
(async () => {
    try {
        const jobPostingId = 12345; // Replace with the ID of the job posting you want to deactivate
        await client.deactivatePosting(jobPostingId);
        console.log("Job posting deactivated successfully.");
    } catch (error) {
        console.error("Failed to deactivate job posting:", error);
    }

    // or

    try {
        const jobPosting = await client.createJobPosting({/* object with a job posting */})
        await client.deactivatePosting(jobPosting);
        console.log("Job posting deactivated successfully.");
    } catch (error) {
        console.error("Failed to deactivate job posting:", error);
    }
})();
```

Make sure to replace `jobPostingId` or the `jobPosting` object with the actual details of the job posting you want to
deactivate. For more information, refer to
the [official API documentation](https://dev.xing.com/partners/job_integration/api_docs/deactivate_postings).

### Delete Job Posting

To delete a job posting, you can use one of the following overloaded methods:

```typescript
public async deletePosting(jobPostingId: number): Promise<void>;
public async deletePosting(jobPosting: XingPosting): Promise<void>;
```

Here is an example of how to use it:

```typescript
(async () => {
    try {
        const jobPostingId = 12345; // Replace with the ID of the job posting you want to delete
        await client.deletePosting(jobPostingId);
        console.log("Job posting deleted successfully.");
    } catch (error) {
        console.error("Failed to delete job posting:", error);
    }

    // or

    try {
        const jobPosting = await client.createJobPosting({/* object with a job posting */})
        await client.deletePosting(jobPosting);
        console.log("Job posting deleted successfully.");
    } catch (error) {
        console.error("Failed to delete job posting:", error);
    }
})();
```

Make sure to replace `jobPostingId` or the `jobPosting` object with the actual details of the job posting you want to
delete. For more information, refer to
the [official API documentation](https://dev.xing.com/partners/job_integration/api_docs/delete_postings).

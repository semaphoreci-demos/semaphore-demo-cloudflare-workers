# Semaphore Demo CI/CD Pipeline for Cloudflare Workers

Example project on how to build to deploy to Cloudflare Workers using the Serverless framework.

## Add Project to Semaphore

In order to deploy, you must have a domain active in Cloudflare.

1. Fork this repository and [create a project](https://docs.semaphoreci.com/article/63-your-first-project) on Semaphore.
2. Go to your Cloudflare account domain. In **Overview** look for the Zone ID and the Account ID.
3. Go to **Get your API Key**. Copy the authorized email.
4. Go to **API Tokens**. Click on **View** next to Global API Key. Copy the displayed key.
5. Add a secret on Semaphore as detailed in the next section.
6. Edit `serverless.yml`. Edit the `url` key with the route that you want to trigger the function. The URL must contain your domain name.
    ```yaml
    ...
        events:
            - http:
                url: example.com/hello
                method: GET
    ...
    ```
7. Push to GitHub.

This is how the complete workflow looks:

![Workflow](images/workflow.png)


## Add Secret to Semaphore

Create a [secret](https://docs.semaphoreci.com/article/63-your-first-project) on Semaphore with your Cloudflare details:

```bash
$ sem create secret cloudflare \
    -e CLOUDFLARE_AUTH_EMAIL=YOUR_EMAIL \
    -e CLOUDFLARE_AUTH_KEY=YOUR_API_KEY \
    -e CLOUDFLARE_ACCOUNT_ID=YOUR_ACCOUNT_ID \
    -e CLOUDFLARE_ZONE_ID=YOUR_ZONE_ID
```

## Local build

You can also run the tests on your dev machine, for this, install Node.js and nvm.

```bash
$ nvm use
$ npm install
$ npm run lint
$ npm test
```

## License

Copyright (c) 2019 Rendered Text

Distributed under the MIT License. See the file [LICENSE.md](./LICENSE.md).

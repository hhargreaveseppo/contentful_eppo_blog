# Contentful Eppo integration for no code experiments

## About this repo
This repo was built to demonstrate the integration between [Contentful](https://www.contentful.com/) and [Eppo](https://www.geteppo.com/) so marketing and product teams can run performant, no code experiments on their site. The blog post that walks through additional detail about this integration including Contentful and Eppo platform setup can be found on [Eppo's blog](https://www.geteppo.com/blog) and [documentation](https://docs.geteppo.com/).

From a technical perspective, all of the code that demonstrates the integration is in the `index.js` file. All environment specific set up, such as SDK keys, will be in a separate `.env` file you set up.

Disclaimer: This repo was meant for demo purposes and is not necessarily production ready.

## Running this repo
The following instructions are for getting this repo running locally on your machine.

### Prerequisites
* Node and npm
* an Eppo account with feature  -- [get access](https://www.geteppo.com/get-access)
* a Contentful account -- [sign up for free](https://www.contentful.com/sign-up/)

### Getting Started
1. Clone this repo; if you have the `git` CLI set up you can use the following command: `git clone https://github.com/hhargreaveseppo/contentful_eppo_blog.git`
2. Run the following command in your terminal to install the necessary node modules: `npm install`
3. Create a file called `.env` and copy the content from `.env.example` into your `.env` file so you have the following:
```
EPPO_SDK_KEY=
CONTENTFUL_SPACE_ID=
CONTENTFUL_ACCESS_TOKEN=
EPPO_EXPERIMENT_KEY=
```
4. [Retrieve the Eppo SDK key](https://docs.geteppo.com/administration/api-keys/) and put it as the value for the `EPPO_SDK_KEY` variable.
5. [Retrive the Eppo flag key](https://docs.geteppo.com/feature-flag-quickstart/) you created for your experiment and put it as the value for the `EPPO_EXPERIMENT_KEY` variable.
5. [Retrieve the Contentful Space id](https://www.contentful.com/help/find-space-id/) for the Contentful space you will be running your experiment in, and add it as the value for the `CONTENTFUL_SPACE_ID` variable.
6. [Retrieve the Contentful Access Token](https://www.contentful.com/help/find-space-id/) you created earlier, and add it as the value for the `CONTENTFUL_SPACE_ID` variable.
7. Now that the enviornment variables are added, run your application with the command `node index.js`. You should see your user's variation assigment and matching content logged to your IDE.
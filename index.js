import { init } from "@eppo/node-server-sdk";
import * as EppoSdk from "@eppo/node-server-sdk";

import contentful from "contentful";
import 'dotenv/config'


// Eppo Specific methods
await init({
    apiKey: process.env.EPPO_SDK_KEY
  });

const userid = "id" + Math.random().toString(16).slice(2)

const eppoClient = EppoSdk.getInstance();

const homepage_entry_id = eppoClient.getStringAssignment(
    userid, // unique identifier for the user
    process.env.EPPO_EXPERIMENT_KEY, // flag key from Eppo UI
    )
console.log(process.env.EPPO_EXPERIMENT_KEY, homepage_entry_id)

//contentful specific methods

const contentfulClient = await contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID, // Contentful Space ID
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN // Contentful Access Token
})

const entry = await contentfulClient.getEntry(homepage_entry_id)
console.log(entry) // see the different assignments that a user received




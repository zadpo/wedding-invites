import { Client, Databases } from "appwrite";

const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1") // Replace with your Appwrite endpoint
  .setProject("66bf025d002756389b03"); // Replace with your project ID

const databases = new Databases(client);
const databaseId = "66bf0296002ad4d9af1e"; // Replace with your database ID
const collectionId = "66bf02ab0034437add05"; // Replace with your collection ID

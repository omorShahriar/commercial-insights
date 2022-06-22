import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "202yi69h", // you can find this in sanity.json
  apiVersion: "2021-08-31",
  dataset: "production", // or the name you chose in step 1
  useCdn: true, // `false` if you want to ensure fresh data
});

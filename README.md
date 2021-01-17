# Assignment on Creating Graphql wrapper for News API

## Stack

The app is built on:
* GraphQL
* node.js
* express

## Instructions

Clone the repository and install packages:
*************
> git clone <-REMOTE GIT URL->

> cd <-cloned depository->

> npm install
*************

Run the App using Docker Compose up command
*******************
> docker-compose up
*******************

To Run in Browser
****************
> http://localhost:8080/graphql
****************

## Example Query and responses

**Query example** :

```
query{
  topHeadlines{
    author
    title
    description
    url
    urlToImage
    content
  }
}
```
**Query Responses** :

```
{
  "data": {
    "topHeadlines": [
        {
          "author": null,
          "title": "Les retards de Pfizer jugés “incompréhensibles et inacceptables”: “Nous avons été très surpris” - 7sur7",
          "description": null,
          "url": "https://myprivacy.dpgmedia.be/consent/?siteKey=atXMVFeyFP1Ki09i&callbackUrl=https:%2f%2fwww.7sur7.be%2fprivacy-gate%2faccept-tcf2%3fredirectUri%3d%252fsante%252fles-retards-de-pfizer-juges-incomprehensibles-et-inacceptables-nous-avons-ete-tres-surpris%257ea401d1af%252f",
          "urlToImage": null,
          "content": null
        },
        {
          "author": null,
          "title": "Cyril Hanouna accuse TF1 et son ancien chroniqueur Camille Combal de plagiat - 7sur7",
          "description": null,
          "url": "https://myprivacy.dpgmedia.be/consent/?siteKey=atXMVFeyFP1Ki09i&callbackUrl=https:%2f%2fwww.7sur7.be%2fprivacy-gate%2faccept-tcf2%3fredirectUri%3d%252ftele%252fcyril-hanouna-accuse-tf1-et-son-ancien-chroniqueur-camille-combal-de-plagiat%257ea3b2b1ac%252f",
          "urlToImage": null,
          "content": null
        }
      ]
  }
}
```

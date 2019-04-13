# AWSSentimentAnalysis
From https://docs.aws.amazon.com/comprehend/latest/dg/topic-modeling.html Amazon Comprehend uses NLP (a pre-trained model) to examine and analyze a document or set of documents to gather insights about it. This model is continuously trained on a large body of text so that there is no need for you to provide training data.

## Install AWS SDK
Use this to get started using AWS SDK for node.js: https://aws.amazon.com/developers/getting-started/nodejs/
   
This is an example of using the AWS Comprehend service to do three things
## Detect Entities
Detect entities and their type (Person, Date, Event, Location, Organization). Entity types are listed here: https://docs.aws.amazon.com/comprehend/latest/dg/how-entities.html
   
## Detect Sentiment 
Determines if sentiment is positive, negative, neutral, or mixed and the level of confidence
   
## Detect Language
Detects language of text and level of confidence. Returns the RFC 5646 language code for the dominant language. 

## To Use
```node driver.js```

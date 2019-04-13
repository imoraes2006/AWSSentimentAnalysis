/**
   From https://docs.aws.amazon.com/comprehend/latest/dg/topic-modeling.html
   Amazon Comprehend uses NLP (a pre-trained model) to examine and analyze a document or set of documents to 
   gather insights about it. This model is continuously trained on a large body of text so that there 
   is no need for you to provide training data.

   Use this to get started using AWS SDK for node.js 
   
   This is an example of using the AWS Comprehend service to do three things
   1. Detect Entities
   	  Detect entities and their type (Person, Date, Event, Location, Organization)
   	  Entity types are listed here: https://docs.aws.amazon.com/comprehend/latest/dg/how-entities.html
   
   2. Detect Sentiment 
      Determines if sentiment is positive, negative, neutral, or mixed and the level of confidence
   
   3. Detect Language
   	  Detects language of text and level of confidence. Returns the RFC 5646 language code for the dominant language. 
*/

var AWS = require('aws-sdk');
           
// set this environment variable before running
// export AWS_REGION='us-west-2'
   
myConfig = new AWS.Config();

var comprehend = new AWS.Comprehend({apiVersion: '2017-11-27'});   

var params = 
	{
    	LanguageCode: 'en', /* required */
        Text: "ManUtd.com reporter Adam Marshall at Old Trafford: Manchester United defender Marcos Rojo has revealed Ole Gunnar Solskjaer has told him he is part of his plans at Manchester United. The Argentina international has suffered from a number of injury problems this season but is back fit and in contention for a starting spot in Saturday's Premier League clash with West Ham at Old Trafford. After appearing at the ground for the Under-23s last week, the South American is in a position to challenge for a place, particularly with left-back Luke Shaw suspended." 
   };
            
// detects entities in text
comprehend.detectEntities(params, function(err, data) {
	if (err) 
    console.log(err, err.stack);
  else     
    console.log(data);        
});

// 
comprehend.detectSentiment(params, function(err, data) {
    if (err) 
      console.log(err, err.stack); // an error occurred
    else 
      console.log(data);           // successful response
});

// Lets see if it can detect Spanish (es)
params = 
	{
     Text: "esta es una cruz para pascua"
  };


comprehend.detectDominantLanguage(params, function(err, data) {
    if (err) 
      console.log(err, err.stack); // an error occurred
    else 
      console.log(data);           // successful response
});

// Lets see if it can detect Swahili (sw)
params = 
	{
      Text: "Viongozi wa waandamanaji katika mji mkuu wa Sudan Khartoum amewatolea wito wanaowaunga mkono kuendela kuandamana mitaani siku moja baada ya mapinduzi ya kijeshi."
  };

comprehend.detectDominantLanguage(params, function(err, data) {
     if (err) 
       console.log(err, err.stack); // an error occurred
     else     
       console.log(data);           // successful response
});

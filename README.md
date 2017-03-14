
Shout webapp
============

A React-based version of the Shout resource tool, intended for use as a hybrid app (web, Android, IOS).

##Examples

* Shout Atlanta:
[example](http://shoutapp.org)

##Installation

* Install Node.js (developed with version 6)
* clone the repo and ```cd``` to it
* ```npm install```
* ```npm start``` to start dev server
* open a browser to http://localhost:8080 (Webpack is used for hot updates as files are edited)
* Install Cordova as used
* run cordova app, eg ```cordova run android```

##How it works
* [Data](#data)
* [Search](#search)

### Data
Shout uses PouchDB's offline-first database library. Data entries are structured into three types, all stored as JSON objects.

1) Resources - These documents store general information about a resource, such as it's address, phone number, description, latitude, longitude, and a list of services.
These documents are rarely modified after they are first created. Users cannot modify these documents as of latest version.
The format of a Resource object ID is :"Resource_" + resource zip code + _ + resource name

2) Tags - These documents store all of the tags associated with a particular resource. They are a separate document, because tags can be frequently updated, downvoted, or upvoted by users.
The format of a Tags object ID is: "tags" + _ + resource name

3) Feedback - Every new feedback (per user, per resource) is stored as a new Feedback object. These are expected to be frequently added by users, but never modified.
The format of a feedback object ID is: "Feedback" + _ + name of resource + _ + current date

Creating ID's like so makes it easier to filter all of the feedback or tags associated with a particular resource purely by selecting documents that have an ID that starts with, for instance, the string "Tags_ExampleClinic" without actually searching the database.

### Search
For search, Shout uses PouchDB quick-search in order to filter data. 

##Contribution
* [Social Determinants of Health](#social-determinants-of-health)
* [Use cases](#use-cases)

### Social Determinants of Health
### Search

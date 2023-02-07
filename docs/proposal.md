Get Glad
========

My proposal is for a website that would use Giphy and possibly Pexels or DynaPictures to build a website that would curate reaction photos based on users searches and save those search results for future use. 

Some elements I would consider would include: 
* Search functionality: Allow users to search for both GIFs and images based on keywords or phrases.

* User account: Offer the option for users to create an account where they can save their favorite GIFs and images.

* Curation: Develop an algorithm to curate GIFs and images based on relevance to the user's search query.

* Image and GIF hosting: Use a third-party image and GIF hosting service, such as Imgur or Giphy, to host the images and GIFs on the site.

* User interface: Design a user-friendly interface that allows users to easily browse, view, and save GIFs and images.

Web services
-----------

[Giphy](https://developers.giphy.com/docs/sdk)apiKey
*I will need assistance figuring out what method I will need, I don't know yet.

[DynaPictures](https://dynapictures.com/)apiKey
*I will need assistance figuring out what method I will need, I don't know yet.

[Pexels](https://www.pexels.com/api/)apiKey
*I will need assistance figuring out what method I will need, I don't know yet.

Database use
------------
I will need to read and write the following data information to and from a database:

The user's first and last names, phone numbers, email addresses, and passwords will be helpful in keeping track of the user. A record of the keywords or phrases that users have searched for on the site. Information about each image or GIF, such as the URL, file type, tags, and any other important metadata. A record of which images or GIFs each user has saved.

This data will likely be sectioned into separate tables based on each above sentence. The primary key table will be UserInfo and will likely have a foreign key of Keyword. SavedInfo will likely be the primary key to MetaInfo's foreign key.

Initial Designs
---------------
![Layout](CVTC/SQC/sqc-project-Nootrishus/docs/pageLayout.jpg "Web Page Layout")

![Relationships](CVTC/SQC/sqc-project-Nootrishus/docs/pageRelationship.jpg "Web Pages Relationships")

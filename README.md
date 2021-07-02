# Maudlin Art Portfolio

Maudlin Art is an artist portfolio built with the MERN stack. This project features a simple Express JS backend using Mongoose and Bcrypt. MongoDB is not self-hosted within the project. There are major plans for refactoring but it works as is right now.

Backend features:
* user and artwork db models
    User:
      * username, email and password
      * new user and view all users routes
    Artwork:
      * title, url snippet (imgur hosting), description, medium, availability, and date posted
      * get one, get all, post, patch, and delete routes for artwork
* Express validator on user sign up and new artwork
* salted password encryption
* Express hosting the client files

Frontend features:
* simple modular navigation bar
* container query grid gallery homepage with hopefully buttery smooth loading
* gallery item page
  * if a piece of art is avaiable, clicking on the availability button redirects you to the contact page with a custom message
* contact page
  * EmailJS will forward the completed form information; see more information below regarding setting up EmailJS
  * Form validation to ensure all portions of the form are complete and sensibly filled out
* simple about page with a "featured in" link section
* very simple auth page that spits out a token to manage artwork data in Postman (separate artwork management app planned for development)

## Authentication

Permission to create, update, or delete artwork related to the project as is is currently restricted to my own personal discretion and usage.

## EmailJS

EmailJS is a super handy and helpful little tool that basically only requires importing it into a component and filling out four simple parameters to have basic functionality. I get 200 free emails a month for use in this project. The EmailJS documentation is very easy to understand, so if you want to rework this project for your own use, you can find some very helpful guides on youtube or refer to the docs themselves. As this projects stands, there are no extra bells and whistles so all that happens when the form is completed is it will send *me the form information.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change. I plan to work on this exclusively, but if someone wants to tweak some things, feel free.

## License
[MIT](https://choosealicense.com/licenses/mit/)
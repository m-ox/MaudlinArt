# Maudlin Art Portfolio

Maudlin Art is an artist portfolio built with the MERN stack. This project features a simple Express JS backend using Mongoose and Bcrypt. MongoDB is not self-hosted within the project. There are major plans for refactoring but this was a big ole learning opportunity project.

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

Frontend features:
* simple modular navigation bar
* container query grid gallery homepage
* gallery item page
  * if a piece of art is avaiable, clicking on the availability button redirects you to the contact page with a custom message
* contact page
  * EmailJS will forward the completed form information; see more information below regarding setting up EmailJS
  * Form validation to ensure all portions of the form are complete and sensibly filled out
* simple about page with a "featured in" link section
* very simple auth page that spits out a token to manage artwork data in Postman

## Installation

In the root directory, you will have to install the packages for the backend. You will also have to install the client side packages located client folder with the following command, assuming you already have Node JS installed:

```
npm i
```

## Usage

To run the entire project locally, access the root directory of the project from command line and run the backend and front end currently with the below command:

```bash
npm run dev
```

## Authenticationr

Permission to create, update, or delete artwork related to the project as is is currently restricted to my own personal discretion and usage. If you want to use this project for yourself, you will have to make your own MongoDB account, cluster, and update the configuration files and axios calls.

## Configuration

I have omitted my own config file for security reasons but I have created a dummy config folder that includes a little backend mongoosey middleware and where ideally you'd have a mongoDB URI and JWTsecret for the backend to work. To run this project, you will have to set up the default.json file with a MongoDB uri, JWTsecret and then rename the 'config_dummy' folder to 'config'.

## EmailJS

EmailJS is a super handy and helpful little tool that basically only requires importing it into a component and filling out four simple parameters to have basic functionality. I get 200 free emails a month for use in this project. The EmailJS documentation is very easy to understand, so if you want to rework this project for your own use, you can find some very helpful guides on youtube or refer to the docs themselves. As this projects stands, there are no extra bells and whistles so all that happens when the form is completed is it will send me the form information.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change. I plan to work on this exclusively, but if someone wants to tweak some things, feel free.

## License
[MIT](https://choosealicense.com/licenses/mit/)
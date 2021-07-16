# HIRAETH - Team Coding On The Rocks

> Hiraeth is an initiative to provide the inclusion of local entrepreneurs into the global market. There're several unnoticed and unpaid talents across the country which require a little support and they can do wonders. 

In the era of covid-19, when businesses are going virtual it becomes even harder to survive. This brings in itself a new set of challenges, and we see a lot of potential for technology to bridge these challenges and hurdles in a significant way. In this context, Hiraeth aims to bridge some of them by providing a marketplace, updates on opportunities to grow, financial support, and consultancy.


## Screenshots 

[![image.png](https://res.cloudinary.com/kjstore/image/upload/v1626405106/Hiraeth/LandingCarausel_lbez9n.jpg)]()
[![image.png](https://res.cloudinary.com/kjstore/image/upload/v1626405107/Hiraeth/AddPost_xv4fug.png)]()
[![image.png](https://res.cloudinary.com/kjstore/image/upload/v1626405107/Hiraeth/postDetails_oskvbf.jpg)]()
[![image.png](https://res.cloudinary.com/kjstore/image/upload/v1626409340/Hiraeth/aac3d11a-e1bc-4c82-947b-813a37d7001d_gskrij.jpg)]()


## How to build and run Hiraeth from source

```bash
$ # Get a local copy of the code
$ git clone https://github.com/TanyaGupta1901/Hiraeth.git
$ cd Hiraeth
$
$ # Virtualenv modules installation
$ virtualenv env
$ source env/bin/activate
$
$ # Install modules
$ npm install or npm ci
$
$ # Start the application (development mode)
$ nodemon index.js
$
$ # Access the web app in localhost- localhost:3000
```

## File Structure

```bash
< PROJECT ROOT >
   |
   |-- handles/                                        # Image handlers
   |    |-- cloudinary.js                              # Store images in cloud
   |    |-- multer.js                                  # Tool used for uploading images
   |    |
   |-- models/                                         # Database models
   |    |-- Post.js                                    # mongoose Post Schema
   |    |-- User.js                                    # mongoose User Info Schema
   |    |
   |-- public/
   |    |    |-- <css, fonts, JS, images>              # CSS files, Fonts, Javascripts files, and images
   |    |    |-- plugins/                              # Components used in other routes 
   |    |         |-- <grid-gallery, owl, scroll-fixed, slider>  
   |
   -- routes/                             
   |    |    |-- Authroutes.js                        # Authentication route
   |    |    |-- Postroutes.js                        # Contains Postroutes
   |    |
   |
   |--views/                                          # contains ejs files and templates
   |    |-- partials                                  # includes footer component
   |    |-- Addpost.ejs                               # USed to add posts
   |    |-- Blogs.ejs                                 # Blog post page
   |    |-- Category.ejs                              # Category page
   |    |-- clothes.ejs                               # Clothes page  
   |    |-- Landing.ejs                               # Main Landing page
   |    |-- Login.ejs                                 # Login page
   |   
   |   index.js                                       # Main rendering file
   |   package.json                                   # Includes dependencies
   |   package-lock.json                              # Locked dependencies
   |
   |
   |-- .env                                           # Inject Configuration via Environment
   |
   |-- ************************************************************************
```


### Todos

 - Blog will have the option to switch to regional language
 - Payment Gateway for purchases and donationations
 - Backend and general improvements for organised Counceling sessions, real time bot support


### What Has Been Done

 - Fully functional panel for seller to advertise products, update and remove them
 - Blogs providing schemes and opportunities related information

 
 ### Tech
 - Front : HTML, CSS, JS
 - Backend : NodeJs, expressJs
 - Database : mongoDB
 - Deployment : NGROK




<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-5-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->
## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->

<table>
  <tr>
    <td align="center"><a href="https://github.com/kanchi2438"><img src="https://avatars.githubusercontent.com/u/68802268?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Kanchi Jain</b></sub></a><br /></td>
    <td align="center"><a href="https://github.com/TanyaGupta1901"><img src="https://avatars.githubusercontent.com/u/63922082?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Tanya Gupta</b></sub></a><br /></td>
    <td align="center"><a href="https://github.com/sahibardj"><img src="https://avatars.githubusercontent.com/u/63879595?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Sahiba Khan</b></sub></a><br /></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
{"mode":"full","isActive":false}

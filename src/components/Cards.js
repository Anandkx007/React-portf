import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>These are some of my projects</h1>
      <div className="cards__container">
             
        
        <CardItem
          src="images/keeper.jpg"
          title="Keeper "
          web="https://ritsar-keeper.netlify.app/"
          github="https://github.com/RitSar/Keeper"
          text="Keeper is an attempt at a Google Keep clone made with react and jsx. This is a demo version without a database and authentication system."
        />
        <CardItem
          src="images/memeg.jpg"
          title="Meme Genrator"
          web="http://anandshiva.me/memegenrator/"
          github="https://github.com/Anandkx007/memegenrator"
          text="Meme Generatoris a react app which provides different meme templates and
          lets us add custom text on them to get fun and cool memes."
        />
        <CardItem
          src="images/covid-19.jpg"
          title="Covid-19 Blogs "
          web="http://anandshiva.me/p1.html/"
          github="https://github.com/Anandkx007/Anandkx007.github.io"
          text="• A blog site Platform made using HTML , CSS, JS.
                  • Features:-Expert contact, latest blogs"
        />
        <CardItem
          src="images/fgal.jpg"
          title="Filterable Gallery "
          web="http://anandshiva.me/p3.html/"
          github="https://github.com/Anandkx007/Anandkx007.github.io"
          text="• Image gallery which is filterable by categaries and image type.
                • A website made using javascript."
        />
        <CardItem
          src="images/newport.jpg"
          title="This Portfolio website"
          web="http://anandshiva.me/"
          github="https://github.com/Anandkx007/Anandkx007.github.io"
          text="• A personal site made using ReactJS. One Pager Website.
          •Features : Contact Form, Location, Details about project"
        />
        <CardItem
          src="images/oldport.jpg"
          title="Old Portfolio website"
          web="http://anandshiva.me/"
          github="https://github.com/Anandkx007/Anandkx007.github.io"
          text="• A personal site made using HTML CSS JS.
          •Features : Contact Form, Location, Details about project"
        />
      </div>
    </div>
  );
}

export default Cards;

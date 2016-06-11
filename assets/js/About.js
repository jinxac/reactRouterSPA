import React from 'react';
import Helmet from 'react-helmet';

class About extends React.Component{
   render(){
   return(

        <div>
        	About
        	<Helmet
                    title="About"
                    meta={[
                        {property: 'og:image', content: 'http://www.gettyimages.pt/gi-resources/images/Homepage/Hero/PT/PT_hero_42_153645159.jpg'},
                    ]} />
        </div>
   )
}  
}

export default About;

import Accordion from "../../components/accordion/Accordion";
import Banner from "../../components/banner/Banner";

const About = () => {
    return ( 
        <article className="text-blue">
            <Banner text="ABOUT" img="https://i.pinimg.com/736x/d6/8b/e3/d68be3d08853ed93f2569b4145805a6c.jpg" imgDesc="a picture of a plate with food on it"/>

            <Accordion title="About Us" text="Welcome to Vecipes, your go-to destination for delicious, creative, and accessible vegan recipes! At Vecipes, we believe that plant-based eating is more than just a dietary choice—it's a celebration of flavor, sustainability, and compassion. Our mission is to inspire everyone, from seasoned vegans to curious newcomers, to explore the endless possibilities of plant-based cooking."/>
            
            <Accordion title="The Idea Behind Vecipes" text="Vecipes was born out of a passion for making vegan food approachable, enjoyable, and exciting. We understand that transitioning to or incorporating more plant-based meals can feel overwhelming at first. That's why we focus on creating recipes that are easy to follow, use everyday ingredients, and never compromise on taste. Whether you're looking for hearty dinners, indulgent desserts, or quick snacks, Vecipes has something for everyone."/>

            <Accordion title="What We Aim to Do" text="Our goal is simple: to show the world that vegan food can be every bit as satisfying and flavorful as traditional dishes. Through our website, we aim to:
                  Provide Inspiration: From classic comfort foods reimagined as plant-based delights to innovative new creations, we want to spark your culinary creativity.
                Promote Sustainability: By choosing plant-based options, you're contributing to a healthier planet. We're here to make that choice easier and more delicious..
                Build Community: Food brings people together! Vecipes is a space for sharing ideas, tips, and stories about the joys of vegan living.
                Empower Home Cooks: With step-by-step instructions and expert tips, we strive to make vegan cooking accessible to everyone—no matter your skill level.
                "/>
        </article>
     );
}
 
export default About;
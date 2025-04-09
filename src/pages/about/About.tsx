import Banner from "../../components/banner/Banner";

const About = () => {
    return ( 
        <article className="text-blue">
            <Banner text="ABOUT" img="https://i.pinimg.com/736x/d6/8b/e3/d68be3d08853ed93f2569b4145805a6c.jpg" imgDesc="a picture of a plate with food on it"/>
            <div className="flex flex-col gap-5 p-5 bg-white/40 m-5 rounded-lg">
            <div>
                <h2 className="uppercase text-2xl mb-1">About Us</h2>
                <p className="text-d-blue/80">Welcome to Vecipes, your go-to destination for delicious, creative, and accessible vegan recipes! At Vecipes, we believe that plant-based eating is more than just a dietary choice—it's a celebration of flavor, sustainability, and compassion. Our mission is to inspire everyone, from seasoned vegans to curious newcomers, to explore the endless possibilities of plant-based cooking.</p>
            </div>
            <div>
                <h2 className="uppercase text-2xl mb-1">The Idea Behind Vecipes</h2>
                <p className="text-d-blue/80">Vecipes was born out of a passion for making vegan food approachable, enjoyable, and exciting. We understand that transitioning to or incorporating more plant-based meals can feel overwhelming at first. That's why we focus on creating recipes that are easy to follow, use everyday ingredients, and never compromise on taste. Whether you're looking for hearty dinners, indulgent desserts, or quick snacks, Vecipes has something for everyone.</p>
            </div>
            <div>
                <h2 className="uppercase text-2xl mb-1">What We Aim to Do</h2>
                <p className="mb-2">Our goal is simple: to show the world that vegan food can be every bit as satisfying and flavorful as traditional dishes. Through our website, we aim to:</p>
                <p className="py-2 px-3 text-d-blue/80"> ◉ Provide Inspiration: From classic comfort foods reimagined as plant-based delights to innovative new creations, we want to spark your culinary creativity.
                </p>
                <p className="py-2 px-3 text-d-blue/80"> ◉ Promote Sustainability: By choosing plant-based options, you're contributing to a healthier planet. We're here to make that choice easier and more delicious..
                </p>
                <p className="py-2 px-3 text-d-blue/80"> ◉ Build Community: Food brings people together! Vecipes is a space for sharing ideas, tips, and stories about the joys of vegan living.
                </p>
                <p className="py-2 px-3 text-d-blue/80"> ◉ Empower Home Cooks: With step-by-step instructions and expert tips, we strive to make vegan cooking accessible to everyone—no matter your skill level.
                </p>
            </div>
                
            </div>
            
        </article>
     );
}
 
export default About;
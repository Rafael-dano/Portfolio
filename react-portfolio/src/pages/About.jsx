import pic1 from './pic1.png';

function About() {
    return (
      <section>
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <img src= {pic1} alt="Rafael Agredano" className="w-16 h-16 rounded-full mb-4" />
        <p>Hi, I'm RafaelAgredano, a passionate web developer with a focus on creating dynamic and responsive applications. i have just started my coding journey but i am starting to get it more each time i practice.
            i used to be in bread delivery took a toll on the body so i wanted to work my mind, and coding is just that working your mind through all the processes and syntax errors along the was. 
        </p>
      </section>
    );
  }
  
  export default About;
  
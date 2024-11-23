import "../../style/home.css";

function ServicePage() {
  return (
    <section className="section" id="Service-page">
      <div className="service-container">
        <div className="service">
          <div>Our</div>
          <pre>Services</pre>
        </div>
        <div className="services">
          <div className="container">
            <span className="text-lg span">01</span>
            <pre className="text-2xl">Web Developer</pre>
            <p>
              I&apos;m, a passionate web developer specializing in creating
              dynamic and responsive websites and applications. With expertise
              in front-end technologies like HTML5, CSS3, JavaScript, and
              React.js,
            </p>
          </div>
          <div className="container">
            <span className="text-lg span">02</span>
            <pre className="text-2xl">Web Designer</pre>
            <p>
              I focus on building seamless user interfaces and experiences. I
              also have experience with back-end development and integrating
              APIs to create full-stack solutions.
            </p>
          </div>
          <div className="container">
            <span className="text-lg span">03</span>
            <pre className="text-2xl">UI/UX Designer</pre>
            <p>
              &quot;I&apos;m a UI/UX designer passionate about crafting
              intuitive, user-centered digital experiences. I specialize in
              creating visually appealing, functional interfaces that enhance
              usability and meet user needs across various platforms.&quot;
            </p>
          </div>
          <div className="container">
            <span className="text-lg span">04</span>
            <pre className="text-2xl">Logo Designer</pre>
            <p>
              &quot;I&apos;m a Canva logo designer with a keen eye for detail,
              creating clean, memorable logos that reflect brand identity. I
              specialize in crafting visually appealing, versatile designs that
              leave a lasting impression.&quot;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default ServicePage;

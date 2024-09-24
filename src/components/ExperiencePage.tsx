import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './ExperiencePage.css';
import Working from './working.gif';
import Article from './Article.jpeg';
import Tecsys from './Tecsys.png';
import Seraphic from './Seraphic.webp';

// Define the type for an experience item
interface Experience {
  id: number;
  company: string;
  logo: string;
  position: string;
  duration: string;
  responsibilities: string[];
}

const ExperiencePage: React.FC = () => {
  // Explicitly type the state as an array of Experience
  const [experiences, setExperiences] = useState<Experience[]>([]);

  useEffect(() => {
    // Mock data
    const mockData: Experience[] = [
      {
        id: 1,
        company: 'Article',
        logo: Article,
        position: 'Senior Full Stack Developer',
        duration: 'Jan 2020 - Present',
        responsibilities: [
          'Lead the development of a web application using React, Play Framework, and Java.',
          'Led development initiatives at Article.com, driving a 20% surge in website traffic.',
          'Integrated React and Play Framework with Java (Spring) on AWS, enhancing scalability by 37% and boosting app performance by 90%.',
          'Slashed backend query response times by 15%, elevating user experience by 73%.',
          'Mentored junior developers, fostering skill growth and teamwork.',
          'Orchestrated SEO campaigns, elevating organic search traffic by 25% and generating $0.8M in sales.',
          'Conducted technical interviews, ensuring top-tier talent acquisition.',
          'Oversaw Notify-Me project from conception to launch, achieving 95% user satisfaction and $1.5M in sales.',
          'Collaborated cross-functionally with product managers, UI/UX designers, and QA engineers to align development efforts with project goals and business objectives.',
          'Coordinated with cross-functional teams for seamless project alignment and delivery.',
          'Provided technical guidance and support to other developers and clients.',
          'Designed and implemented database schemas.',
          'Collaborated with UX designers to improve user experience.',
        ],
      },
      {
        id: 2,
        company: 'TECSYS INC.',
        logo: Tecsys,
        position: 'Full Stack Developer',
        duration: 'Jan 2020 - Sept 2020',
        responsibilities: [
            'Optimized the Tecsys framework UTOPIA, achieving a 660ms reduction in API response time (from 800ms to 120ms), resulting in a 75% improvement.',
            'Led a cross-functional team of 2 designers, 3 back-end developers, and 3 front-end developers to deliver 2 complex features on time and 10% under budget.',
            'Designed back-end logic and UI leveraging OOP and best practices, achieving a 25% reduction in code complexity.',
            'Integrated BDD for full-stack testing, attaining 80% coverage and streamlining development through improved testability.',
            'Acted as a primary point of contact for client engagements, understanding their requirements, providing technical guidance, and ensuring customer satisfaction.',
        ],
      },
      {
        id: 3,
        company: 'Seraphic Infosolutions',
        logo: Seraphic,
        position: 'Full Stack Developer',
        duration: 'May 2015 - Aug 2018',
        responsibilities: [
            'Streamlined development processes by leveraging Spring MVC and Hibernate JPA frameworks, resulting in a 30% increase in development efficiency.',
            'Led the end-to-end design, development, and implementation of high-impact business applications using Java/J2EE, contributing to a 25% reduction in time-to-market.',
            'Drove optimization efforts, troubleshooting, and maintenance of application code, achieving a 40% improvement in system reliability and performance.',
            'Seamlessly deployed applications into staging and production environments, reducing deployment time by 50%.',
            'Automated deployment processes by generating and deploying WAR and EAR files using Maven and Tomcat Application Server, saving 20 hours of manual effort per release cycle.',
            'Ensured robust code quality with comprehensive test coverage, leveraging JUnit to achieve a 95% code coverage rate.',
            'Engineered highly intuitive GUIs using Spring Framework, JSPs, HTML, JavaScript, and CSS, enhancing user satisfaction by 50%.',
            'Tailored and integrated software systems to meet exact end-user specifications, resulting in a 30% increase in user engagement and satisfaction.',
            'Expertly navigated a diverse technology stack including Java, Hibernate, Spring MVC, Spring AOP, Spring Boot, MySQL, Struts, and Git, ensuring seamless integration and functionality across platforms.',
            'Collaborated closely with cross-functional teams within a dynamic Agile environment, facilitating effective communication and alignment of development efforts with project objectives.',
        ],
      },
    ];

    // Function to fetch experiences
    const fetchExperiences = async () => {
      try {
        // Simulate an API call with a timeout
        await new Promise(resolve => setTimeout(resolve, 1000));
        setExperiences(mockData);
      } catch (error) {
        console.error('Error fetching experiences:', error);
      }
    };

    fetchExperiences();
  }, []);

  return (
    <>
      <div className="experience-container">
        <div className="video-container">
          <video autoPlay loop muted className="background-video">
            <source src="/path/to/your/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="experience-list">
          {experiences.map((exp, index) => (
            <React.Fragment key={exp.id}>
              <motion.div
                className="experience-card"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <img className="company-logo" src={exp.logo} alt={`${exp.company} logo`} />
                <div className="experience-details">
                  <h2>{exp.company}</h2>
                  <h3>{exp.position}</h3>
                  <p>{exp.duration}</p>
                  <ul className="responsibilities-list">
                    {exp.responsibilities.map((resp, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: i * 0.1 + 0.5 }}
                      >
                        {resp}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
              {index < experiences.length - 1 && (
                <motion.div
                  className="vertical-line"
                  initial={{ height: 0 }}
                  animate={{ height: '50px' }}
                  transition={{ duration: 0.5, delay: (index + 1) * 0.2 }}
                />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </>
  );
};

export default ExperiencePage;

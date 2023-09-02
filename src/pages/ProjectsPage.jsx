import React from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { projects } from 'constants/projects';
import styles from '../pages/ProjectsPage.module.css';

const MyProjects = () => {
  const { projectId } = useParams();
  const selectedProject = projects.find(
    project => project.id.toString() === projectId
  );

  if (!selectedProject) {
    return <div>Project not found</div>;
  }

  const {
    title,
    description,
    image1,
    image2,
    image3,
    image4,
    image5,
    code,
    website,
  } = selectedProject;

  return (
    <div className={styles.container}>
      <NavLink to={'/home'} className={styles.button}>
        Go Back
      </NavLink>
      <div className={styles.wrapper}>
        <div className={styles.boxImg}>
          <img
            src={image1}
            alt="project"
            width="250px"
            height="200px"
            className={styles.image1}
          />
          <img
            src={image2}
            alt="project"
            width="250px"
            height="200px"
            className={styles.image2}
          />
        </div>
        <div className={styles.description}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.text}>{description}</p>
          <div className={styles.boxBtn}>
            <a
              href={website}
              target="_blank"
              rel="noreferrer"
              className={styles.button}
            >
              Website
            </a>

            <a
              href={code}
              target="_blank"
              rel="noreferrer"
              className={styles.button}
            >
              Code on GitHub
            </a>
          </div>

          <img
            src={image5}
            alt="project"
            width="250px"
            height="200px"
            className={styles.image}
          />
        </div>

        <div className={styles.boxImg}>
          <img
            src={image3}
            alt="project"
            width="250px"
            height="200px"
            className={styles.image2}
          />
          <img
            src={image4}
            alt="project"
            width="250px"
            height="200px"
            className={styles.image1}
          />
        </div>
      </div>
    </div>
  );
};

export default MyProjects;

// return (
//   <div className={styles.container}>
//     <NavLink to={'/home'}>Go Back</NavLink>
//     <div className={styles.wrapper}>
//       <div className={styles.boxImg}>
//         <img
//           src={image1}
//           alt="project"
//           width="250px"
//           height="200px"
//           className={styles.image1}
//         />
//         <img
//           src={image2}
//           alt="project"
//           width="250px"
//           height="200px"
//           className={styles.image2}
//         />
//       </div>
//       <div className={styles.description}>
//         <h3>{title}</h3>
//         <p>{description}</p>
//         <a href={website} target="_blank" rel="noreferrer">
//           Website
//         </a>
//         <a href={code} target="_blank" rel="noreferrer">
//           Code on GitHub
//         </a>
//         <img
//           src={image5}
//           alt="project"
//           width="250px"
//           height="200px"
//           className={styles.image}
//         />
//       </div>

//       <div className={styles.boxImg}>
//         <img
//           src={image3}
//           alt="project"
//           width="250px"
//           height="200px"
//           className={styles.image2}
//         />
//         <img
//           src={image4}
//           alt="project"
//           width="250px"
//           height="200px"
//           className={styles.image1}
//         />
//       </div>
//     </div>
//   </div>
// );
// };

// return (
//   <div className={styles.container}>
//     <NavLink to={'/home'}>Go Back</NavLink>
//     <div>
//       <div className={styles.boxImg}>
//         <img
//           src={image1}
//           alt="project"
//           width="250px"
//           height="200px"
//           className={styles.image}
//         />
//         <img
//           src={image2}
//           alt="project"
//           width="250px"
//           height="200px"
//           className={styles.image}
//         />
//         <img
//           src={image3}
//           alt="project"
//           width="250px"
//           height="200px"
//           className={styles.image}
//         />
//         <img
//           src={image4}
//           alt="project"
//           width="250px"
//           height="200px"
//           className={styles.image}
//         />
//         <img
//           src={image5}
//           alt="project"
//           width="250px"
//           height="200px"
//           className={styles.image}
//         />
//       </div>
//       <div className={styles.description}>
//         <h3>{title}</h3>
//         <p>{description}</p>
//         <a href={website} target="_blank" rel="noreferrer">
//           Website
//         </a>
//         <a href={code} target="_blank" rel="noreferrer">
//           Code on GitHub
//         </a>
//       </div>
//     </div>
//   </div>
// );
// };

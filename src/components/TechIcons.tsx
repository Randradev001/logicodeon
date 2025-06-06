// components/TechIcons.tsx
import { SiReact, SiNodedotjs, SiWordpress, SiMysql, SiDotnet  } from 'react-icons/si';
import { FaLaptopCode } from "react-icons/fa6";
import styles from './TechIcons.module.css';

const technologies = [
  { name: 'React', icon: <SiReact /> },
  { name: 'Node.js', icon: <SiNodedotjs /> },
  { name: 'WordPress', icon: <SiWordpress /> },
  { name: 'MySQL', icon: <SiMysql /> },
  { name: 'SQL Server', icon: <FaLaptopCode  /> },
  { name: '.NET', icon: <SiDotnet /> },
  { name: 'C#', icon: <FaLaptopCode  /> },
  { name: 'GeneXus', icon: <FaLaptopCode  /> },
];

export default function TechIcons() {
    return (
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Cutting-edge Development Technologies</h2>
        <div className={styles.grid}>
          {technologies.map((tech) => (
            <div key={tech.name} className={styles.card}>
              <div className={styles.icon}>{tech.icon}</div>
              <span className={styles.name}>{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }


import styles from './TechGrid.module.css';

const technologies = [
  { name: 'React', logo: '/tech/react.png' },
  { name: 'Node.js', logo: '/tech/node.png' },
  { name: 'WordPress', logo: '/tech/wordpress.png' },
  { name: 'MySQL', logo: '/tech/mysql.png' },
  { name: 'SQL Server', logo: '/tech/sqlserver.png' },
  { name: '.NET', logo: '/tech/dotnet.png' },
  { name: 'C#', logo: '/tech/csharp.png' },
  { name: 'GeneXus', logo: '/tech/genexus.png' },
];

export default function TechGrid() {
  return (
    <div className={styles.grid}>
           <div className={styles.wrapper}>
    <h2 className={styles.title}>Cutting-edge Development Technologies</h2>
    <div className={styles.grid}></div>
      {technologies.map((tech) => (
        <div key={tech.name} className={styles.card}>
          <img src={tech.logo} alt={tech.name} className={styles.logo} />
          <span className={styles.name}>{tech.name}</span>
        </div>
      ))}
    </div>
    </div>
  );
}

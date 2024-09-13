import { useEffect, useState } from 'react';
import styles from "../../styles/employee.module.css";

function Employee({ renderdata, isActive, callbackto_chnagestate }) {
  return (
    <div onClick={callbackto_chnagestate} className={`${styles.employee_item}`}>
      <div className={styles.employee_header}>
        <h3>{renderdata.title}</h3>
        <div  className={styles.toggle_btn}>
          {isActive ? '-' : '+'}
        </div>
      </div>
      {isActive && (
        <div className={styles.employee_details}>
          <img src={'https://saketa.com/wp-content/uploads/2022/04/hammad.jpg'} alt={renderdata.title} className={styles.employee_image} />
          <div className={styles.employee_body}>
            <h4>{renderdata.title}</h4>
        <h5>{'HTML, CSS nd JAVASCRIPT'}</h5>

            <p>{renderdata.body}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default function EmployeeAccordion() {
  const [activeEmployeeID, setActiveEmployeeID] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [employeeData, setEmployeeData] = useState([]);

  useEffect(() => {
    const getEmployeeData = async () => {
      const response = await fetch(process.env.REACT_APP_API_URL);
      const data = await response.json();
      setEmployeeData(data);
      setIsLoading(false);
    };

    getEmployeeData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <section className={styles.employeeList}>
     
      <div className="faq-list">
        {employeeData.map((item) => (
          <Employee
            key={item.id}
            isActive={activeEmployeeID === item.id}
            renderdata={item}
            callbackto_chnagestate={() =>
              setActiveEmployeeID(activeEmployeeID === item.id ? null : item.id)
            }
          />
        ))}
      </div>
    </section>
  );
}

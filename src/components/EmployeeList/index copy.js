
import { useEffect, useState } from 'react';

function Employee({ renderdata, children,callbackto_chnagestate,isActive }) {
  return (
    <section className="Employee">
      <h3>{renderdata.title}</h3>
      {isActive ? (
        <p>{"mintu"}</p>
      ) : (
        <button onClick={callbackto_chnagestate}>
          Show
        </button>
      )}
    </section>
  );
}

export default function EmployeeAccordion() {

  const [activeEmployeeID, setActiveEmployeeID] = useState();
  const [isLoading, setisLoading] = useState(true);
  const [EmployeeData, setEmployeeData] = useState([]);

  useEffect(() => {
    const getEmployeeData = async () => {
      const response = await fetch(process.env.REACT_APP_API_URL);
      const data = await response.json();
      setEmployeeData(data);
      setisLoading(false);
    };

    getEmployeeData();
  }, []);


if(isLoading){
  return <div>Loading...</div>
}
  return (
    <>
      <h2>Almaty, Kazakhstan</h2>

      {
        EmployeeData.map((item)=>(
          <Employee isActive={activeEmployeeID===item.id} renderdata={item} callbackto_chnagestate={()=>{setActiveEmployeeID(item.id)}}>

          </Employee>
        ))
      }
      {/* <Employee isActive={activeIndex===0} callbackto_chnagestate={()=>{setActiveEmployeeID(0)}} title="About">
        With a population of about 2 million, Almaty is Kazakhstan's largest city. From 1929 to 1997, it was its capital city.
      </Employee>
      <Employee isActive={activeIndex===1}  callbackto_chnagestate={()=>{setActiveEmployeeID(1)}} title="Etymology">
        The name comes from <span lang="kk-KZ">алма</span>, the Kazakh word for "apple" and is often translated as "full of apples". In fact, the region surrounding Almaty is thought to be the ancestral home of the apple, and the wild <i lang="la">Malus sieversii</i> is considered a likely candidate for the ancestor of the modern domestic apple.
      </Employee> */}
    </>
  );
}

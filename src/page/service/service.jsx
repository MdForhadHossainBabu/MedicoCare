import { useEffect, useState } from "react"
import { Title } from "../../components/title/title"
import { ServiceCard } from "./serviceCard";


export const Service = () => {
 const [data, setData] = useState([]);
 useEffect(() => {
  fetch('service.json').then(res => res.json()).then(data => setData(data)).catch(error => console.log(error))
 },[])

 console.log(data)
  return (
    <>
      <Title title="Our Service" />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
        {data.map((item, index) => (
          <ServiceCard key={index} service={item} />
        ))}
      </div>
    </>
  );
}

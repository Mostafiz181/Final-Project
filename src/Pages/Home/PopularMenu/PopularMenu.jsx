import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import UseMenu from "../../../hooks/UseMenu";

const PopularMenu = () => {
  const [menu] = UseMenu();
  const popular = menu.filter((item) => item.category === "popular");

  // const [menu,setMenu]=useState([])

  // useEffect(()=>{
  //     fetch('menu.json')
  //     .then(res=>res.json())
  //     .then(data=>{
  //         const popularItems=data.filter(item=> item.category === 'popular')
  //         setMenu(popularItems)
  //     })
  // },[])
  return (
    <section className="mb-3 mt-5 px-2">
      <SectionTitle
        subHeading="---Check it out---"
        heading="FROM OUR MENU"
      ></SectionTitle>

      <div className="md:grid grid-cols-2 gap-4 ">
        {popular.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>

      <div className="text-center ">
        <button className="px-4 py-3  rounded-lg border-cyan-950 border-b-4 uppercase font-bold ">View full menu</button>
      </div>
    </section>
  );
};

export default PopularMenu;

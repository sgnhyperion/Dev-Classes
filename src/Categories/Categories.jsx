import { useEffect, useState } from "react";
// import { loadCategories } from "../../stores/Categories";
import { useDispatch, useSelector } from "react-redux";
import { loadCategories } from "../stores/Categories";

// function Category() {

//     const [categories, setCategory] = useState([]);

//     useEffect(()=>{
//         fetch("https://run.mocky.io/v3/e2d98696-3cde-4ce5-a2a6-a18dcdf24ae5").then(
//             (res) => {
//                 return res.json();
//             }
//             ).then((res) => {
//                 // console.log(res);
//                 setCategory(res);
//             })
//     },[])

//     return (
//         <div>
//             {categories.map(function(item) {
//                 return (<div key={item.id}>{item.name}</div>)
//             })}
//         </div>
//     )
// }

// export default Category;

function Categories() {
  const categories = useSelector((state) => {
    return state.categories.categories;
  });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCategories());
    // fetch("https://run.mocky.io/v3/dc25e1aa-3ae4-4c41-8626-b2529c231bcd").then(
    //     (res) => {
    //         return res.json();
    //     }
    // ).then((res) => {
    //     // console.log(res);
    //     setCategories(res);
    // })
  }, []);
  return (
    <div>
      {categories.map((item) => {
        return <div key={item.id}>{item.name}</div>;
      })}
    </div>
  );
}

export default Categories;

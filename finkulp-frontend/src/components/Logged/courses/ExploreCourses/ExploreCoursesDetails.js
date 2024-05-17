// import Rater from "react-rater";
// import "react-rater/lib/react-rater.css";
//9473827188   1300
const ExploreCoursesDetails = (props) => {
  const plusMinuceButton =
    "flex h-8 w-8 cursor-pointer items-center justify-center border duration-100 hover:bg-neutral-100 focus:ring-2 focus:ring-gray-500 active:ring-2 active:ring-gray-500";
  return (
    <section className="container flex-grow mx-auto max-w-[1200px] border-b py-5 lg:grid lg:grid-cols-2 lg:py-10" style={{display:'flex'}}>
        <div >
      <img src={props.exploreCourses.image}></img>
      </div>
      <div style={{marginLeft:'50px'}}>
      <div className="mx-auto px-5 lg:px-5">
        <h2 className="pt-3 text-2xl font-bold lg:pt-0">
          {props.exploreCourses.title}
        </h2>
        <div className="mt-1">
          <div className="flex items-center">
            <p className="ml-3 text-sm text-gray-400">
              ({props.exploreCourses.description})
            </p>
          </div>
        </div>
        <p className="mt-5 font-bold">
            Availability:{" "}
          {props.exploreCourses.availability ? (
            <span className="text-green-600">Available</span>
          ) : (
            <span className="text-red-600">Expired</span>
          )}
        </p>
        <p className="font-bold">
          Author: <span className="font-normal">{props.exploreCourses.author}</span>
        </p>
        <p className="font-bold">
          Cathegory:{" "}
          <span className="font-normal">{props.exploreCourses.category}</span>
        </p>
        <p className="font-bold">
          Price: <span className="font-normal">{props.exploreCourses.sku}</span>
        </p>
        <p className="mt-4 text-4xl font-bold text-violet-900">
          ${props.exploreCourses.price}{" "}
          <span className="text-xs text-gray-400 line-through">
            ${props.exploreCourses.previousPrice}
          </span>
        </p>
        <p className="pt-5 text-sm leading-5 text-gray-500">
          {props.exploreCourses.description}
        </p>
        <div className="mt-7 flex flex-row items-center gap-6">
          <button className="flex h-12 w-1/3 items-center justify-center bg-violet-900 text-white duration-100 bg-blue-800 hover:text-black hover:bg-green-400">
           
            Add to cart
          </button>
          <button className="flex h-12 w-1/3 items-center justify-center bg-amber-400 duration-100 hover:bg-yellow-300">
           
            Wishlist
          </button>
        </div>
      </div>
      </div>

    </section>
  );
};

export default ExploreCoursesDetails;
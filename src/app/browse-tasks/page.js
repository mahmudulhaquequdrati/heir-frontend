import Card from "@/components/TaskCard/Card";

const page = () => {
  const tasks = [
    {
      taskName: "Design the Homepage UI",
      date: "12 july, 23",
      price: 500,
      jobType: "Remote",
      status: "open",
      client: {
        name: "Emily Johnson",
        title: "Marketing Director",
        img: "/../public/clientImage/1.jpeg",
      },
    },
    {
      taskName: "Implement User Authentication",
      date: "12 july, 23",
      price: 345,
      jobType: "Remote",
      status: "open",
      client: {
        name: "Michael Anderson",
        title: "Financial Analyst",
        img: "/../public/clientImage/1.jpeg",
      },
    },
    {
      taskName: "Create a User Profile Page",
      date: "12 july, 23",
      price: 232,
      jobType: "Remote",
      status: "open",
      client: {
        name: "Sarah Davis",
        title: "Project Manager",
        img: "/../public/clientImage/1.jpeg",
      },
    },
    {
      taskName: "Develop a Search Feature",
      date: "12 july, 23",
      price: 122,
      jobType: "Remote",
      status: "open",
      client: {
        name: "David Smith",
        title: "Human Resources Manager",
        img: "/../public/clientImage/1.jpeg",
      },
    },
    {
      taskName: "Build an Admin Dashboard",
      date: "12 july, 23",
      price: 432,
      jobType: "Remote",
      status: "open",
      client: {
        name: "Jessica Wilson",
        title: "Sales Representative",
        img: "/../public/clientImage/1.jpeg",
      },
    },
    {
      taskName: "Write Unit Tests for API",
      date: "12 july, 23",
      price: 544,
      jobType: "Remote",
      status: "open",
      client: {
        name: "William Baker ",
        title: "IT Consultant",
        img: "/../public/clientImage/1.jpeg",
      },
    },
    {
      taskName: "Set Up a Database Schema",
      date: "12 july, 23",
      price: 344,
      jobType: "Remote",
      status: "open",
      client: {
        name: "Olivia Martinez",
        title: "Olivia Martinez",
        img: "/../public/clientImage/1.jpeg",
      },
    },
  ];

  return (
    <div className="container mx-auto">
      <div className="flex flex-col items-center p-5 md:flex-row gap-12 mt-12 md:items-start">
        <div className="w-full md:max-w-[320px] rounded-lg p-6 shadow">
          <div className="mb-4">
            <h3 className="text-black text-[22px] font-bold mb-3">
              Categories
            </h3>
            <div className="flex gap-2 py-1">
              <input type="checkbox" />
              <label htmlFor="">Baked good(8)</label>
            </div>
            <div className="flex gap-2 py-1">
              <input type="checkbox" />
              <label htmlFor="">Baked good(8)</label>
            </div>
            <div className="flex gap-2 py-1">
              <input type="checkbox" />
              <label htmlFor="">Baked good(8)</label>
            </div>
          </div>

          <div>
            <h3 className="text-black text-[22px] font-bold mb-3">Dietary</h3>
            <div className="flex gap-2 py-1">
              <input type="checkbox" />
              <label htmlFor="">Eco firnedly(2)</label>
            </div>
            <div className="flex gap-2 py-1">
              <input type="checkbox" />
              <label htmlFor="">Gluten Free (4)</label>
            </div>
            <div className="flex gap-2 py-1">
              <input type="checkbox" />
              <label htmlFor="">Nutt free(2)</label>
            </div>
            <div className="flex gap-2 py-1">
              <input type="checkbox" />
              <label htmlFor="">Nutt free(2)</label>
            </div>
            <div className="flex gap-2 py-1">
              <input type="checkbox" />
              <label htmlFor="">Nutt free(2)</label>
            </div>
          </div>
        </div>
        <div className="">
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-7">
            {tasks?.map((task) => (
              <Card task={task} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;

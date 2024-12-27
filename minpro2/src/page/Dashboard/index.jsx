import UserList from "../../components/UserList";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import SideBar from "../../components/Sidebar";
import { IoNotifications, IoPerson, IoSearch } from "react-icons/io5";
import Footer from "../../components/Footer";

const UserDashboard = () => {
    const [userList, setUserList] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    const limit = 6;

    const getUserList = async () => {
        try {
            const res = await axios.get(`https://reqres.in/api/users?page=${page}&per_page=${limit}`);
            setUserList(res.data.data);
            setTotalPages(res.data.total_pages);
        } catch (error) {
            console.log(error);
        }
    };

    const handleNext = () => {
        if (page < totalPages) {
            setPage(page + 1);
        }
    };

    const handleBack = () => {
        if (page > 1) {
            setPage(page - 1);
        }
    };

    useEffect(() => {
        getUserList();
    }, [page]);

    return (
        <>
            <div className="md:flex md:flex-row flex-row flex">
                
                <div className="">
                    <SideBar />
                </div>

                {/* Main Content */}
                <div className=" bg-orange-100 items-center justify-center flex">
                    <div className="md:bg-white md:rounded-md md:shadow-md md:mr-10 md:my-10 ">
                        {/* Header */}
                        <div className="flex flex-col md:flex-row items-center px-10 py-6 justify-between">
                            <h1 className="text-2xl md:text-3xl">Welcome!</h1>
                            <div className="flex space-x-4 text-2xl mt-4 md:mt-0">
                                <Link to={``}>
                                    <button><IoNotifications /></button>
                                </Link>
                                <Link to={``}>
                                    <button><IoPerson /></button>
                                </Link>
                            </div>
                        </div>

                        {/* Breadcrumb & Search */}
                        <div className="flex flex-col md:flex-row justify-between px-6 md:px-10 py-4 items-center space-y-4 md:space-y-0">
                            {/* Breadcrumb */}
                            <div className="space-x-2 text-sm md:text-md">
                                <Link to={`/`}>
                                    <button className="hover:underline">Home</button>
                                </Link>
                                <span>/</span>
                                <Link to={`/dashboard/`}>
                                    <button className="hover:underline">Dashboard</button>
                                </Link>
                            </div>
                            {/* Search */}
                            <div className="flex flex-row items-center space-x-2 w-full md:w-auto">
                                <h1 className="text-lg"><IoSearch /></h1>
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    className="flex-1 px-2 py-1 border border-gray-300 rounded-md"
                                />
                                <button className="px-4 py-1 text-sm text-white bg-orange-500 rounded-lg drop-shadow-md">
                                    Search
                                </button>
                            </div>
                        </div>

                        {/* Content Description */}
                        <div className="px-6 md:px-10 py-6 text-center ">
                            <h1 className="text-xl font-bold">Our Psychologist</h1>
                            <p className="text-gray-600 italic">View and book your consultation</p>
                            <p className="text-sm text-gray-500 mt-2 px-20">
                            At our clinic, we are dedicated to connecting you with experienced psychologists who specialize in various areas of mental health. Whether you're seeking support for stress, anxiety, relationship challenges, or personal growth, our team is here to guide you every step of the way. Book your consultation today and take the first step toward a healthier, more balanced life.
                            </p>
                        </div>

                        {/* User List */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6 md:px-10 py-5 lg:ml-5">
                            {userList.map((user) => (
                                <UserList key={user.id} userList={user} />
                            ))}
                        </div>

                        {/* Pagination */}
                        <div className="flex justify-center gap-4 pt-6 pb-8">
                            <button
                                onClick={handleBack}
                                className={`px-4 py-2 font-bold text-white bg-orange-500 rounded hover:bg-orange-600 ${page === 1 ? "opacity-50 cursor-not-allowed" : ""}`}
                                disabled={page === 1}
                            >
                                Back
                            </button>
                            <h1 className="text-sm md:text-md">Page {page} of {totalPages}</h1>
                            <button
                                onClick={handleNext}
                                className={`px-4 py-2 font-bold text-white bg-orange-500 rounded hover:bg-orange-600 ${page === totalPages ? "opacity-50 cursor-not-allowed" : ""}`}
                                disabled={page === totalPages}
                            >
                                Next
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* footer */}
            <div><Footer /></div>
        </>
    );
};

export default UserDashboard;

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import SideBar from "../../components/Sidebar";
import Footer from "../../components/Footer";
import Publication from "../../components/Publication";
import logo from "../../assets/logo.png";

const DetailPage = () => {
    // State to store user details
    const [userDetail, setUserDetail] = useState({});
    const { id } = useParams();

    // Fetch user details from API
    const getUserDetail = async () => {
        try {
            const res = await axios.get(`https://reqres.in/api/users/${id}`);
            console.log(res.data.data);
            setUserDetail(res.data.data);
        } catch (error) {
            console.log("err", error);
        }
    };

    // Call API when component is mounted
    useEffect(() => {
        getUserDetail();
    }, []);

    // Dummy publication data
    const publications = [
        {
            title: "The Positive Role of Consistency in Daily Life",
            description:
                "Consistency in your daily life can be difficult to achieve. These are six easy demands on...",
            category: "Daily Life",
            author: `${userDetail.first_name} ${userDetail.last_name}`,
            date: "June 11, 2023",
            image: "https://media.istockphoto.com/id/1252303771/photo/caregiver-psychologist-console-asian-senior-people-for-mental-health.jpg?s=612x612&w=0&k=20&c=04KQoRiKPjfUiVMO115sU0-kgbqjTrC1yWRQzNN1A6g=", // Replace with actual image URL
        },
        {
            title: "Common Mental Health Problems Students May Face This Year",
            description:
                "University life can be stressful, often disturbing our mental well-being. Here's how to...",
            category: "Burnout",
            author: `${userDetail.first_name} ${userDetail.last_name}`,
            date: "June 12, 2023",
            image: "https://media.istockphoto.com/id/1197547434/photo/diverse-people-sit-in-circle-participating-in-team-building-activity.jpg?s=612x612&w=0&k=20&c=fJ9zAgv0ClHOxVKZ29Aanb_WJ1L5Ze--zy9FgvQ95Ps=", // Replace with actual image URL
        },
        {
            title: "The Psychology of Managing People in the Workplace",
            description:
                "Whether it is in a professional context or a personal one, the management of people...",
            category: "Work",
            author: `${userDetail.first_name} ${userDetail.last_name}`,
            date: "June 13, 2023",
            image: "https://media.istockphoto.com/id/1388115351/photo/shot-of-a-young-man-having-a-therapeutic-session-with-a-psychologist.jpg?s=612x612&w=0&k=20&c=ABgfdHZRpzQCZpngz7jiaMfBiD081f5SONMTitDAGmQ=", // Replace with actual image URL
        },
    ];

    return (
        <>
            <div className="flex-row flex">
                <div>
                    <SideBar />
                </div>

                <div className="bg-orange-100">
                    <div className="md:bg-white md:shadow-md md:mr-10 md:my-10 rounded-md ">
                        {/* Content */}
                        <div>
                            {/* Breadcrumb & Search */}
                            <div className="flex flex-col md:flex-row justify-between px-6 md:px-10 md:py-10 items-center space-y-5 py-">
                                <img src={logo} alt="" className="md:hidden w-1/3 pt-3" />

                                {/* Breadcrumb */}
                                <div className="space-x-2 text-sm md:text-lg    ">
                                    <Link to={`/`}>
                                        <button className="hover:underline">Home</button>
                                    </Link>
                                    <span>/</span>
                                    <Link to={`/dashboard/`}>
                                        <button className="hover:underline">Dashboard</button>
                                    </Link>
                                    <span>/ Details</span>
                                </div>
                                <Link to={`/dashboard/`}>
                                    <button className="px-4 py-1 text-sm text-white bg-orange-500 rounded-lg drop-shadow-md hidden sm:block">
                                    Back
                                </button>
                                </Link>
                            </div>

                            {/* User Details */}
                            <div className="md:flex md:flex-row pl-10 bg-white p-10  flex flex-col">
                                <div className="items-center flex flex-col pb-10">
                                    <img
                                        src={userDetail.avatar}
                                        alt={`${userDetail.first_name} ${userDetail.last_name}`}
                                        className="md:w-96 rounded-md shadow-md w-1/2"
                                    />
                                    <h1 className="mt-4 text-md font-semibold">⭐ 4.5 (123 reviews)</h1>
                                    <h1 className="mt-2 text-md text-gray-700">$150 / hour</h1>
                                </div>

                                <div className="flex flex-col space-y-3 px-10 w-fit">
                                    <h1 className="text-3xl font-bold">{`${userDetail.first_name} ${userDetail.last_name}`}</h1>
                                    <h3 className="text-lg font-medium">Professional Counselor</h3>
                                    <h1>Specialities: Mental Health, Counseling</h1>
                                    <h1>Issues: Anxiety, Depression, Stress Management</h1>
                                    <h1 className="text-lg font-semibold pt-10">About</h1>
                                    <p>
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                        Necessitatibus molestiae cum at placeat ratione eius. Nostrum,
                                        officiis eum molestiae mollitia amet possimus cupiditate fugit
                                        minus nulla corporis, enim cumque quae?
                                    </p>

                                    <div className="pt-5">
                                        <Link to={`/book-consultation/${id}`}>
                                            <button className="px-4 py-2 text-md text-white bg-orange-500 rounded-lg drop-shadow-md">
                                                Book Consultation
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Publications */}
                        <div className="px-6 md:px-10 py-10">
                            <Publication user={userDetail} publications={publications} />
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div>
                <Footer />
            </div>
        </>
    );
};

export default DetailPage;

import { Link } from "react-router-dom";

// Helper function to render stars
const renderStars = (rating) => {
    const fullStars = Math.floor(rating); // Get the full stars
    const halfStar = rating % 1 !== 0; // Check if there's a half star
    const emptyStars = 5 - Math.ceil(rating); // Remaining stars

    const stars = [];
    for (let i = 0; i < fullStars; i++) {
        stars.push('★'); // Full star
    }
    if (halfStar) {
        stars.push('☆'); // Half star
    }
    for (let i = 0; i < emptyStars; i++) {
        stars.push('☆'); // Empty star
    }
    return stars.join(' '); // Return stars as a string
};

const UserList = (props) => {
    const { userList } = props;
    const rating = userList.rating || 4.5; // Fallback rating if not available

    return (
        <div key={userList.id} className="flex flex-col items-center gap-5 p-10 bg-slate-200 rounded-md shadow-md w-fit">
            {/* Profile image */}
            <img 
                src={userList.avatar} 
                alt="profile.picture" 
                className="object-cover border-4 rounded-full border-amber-600 w-28 h-28"
            />
            
            {/* Short description */}
            <div className="flex flex-col text-center">
                <h1 className="font-bold">{userList.first_name} {userList.last_name}</h1>
                <p>{userList.profession || 'Psychologist'}</p>

                {/* Rating */}
                <div className="flex justify-center text-yellow-500">
                    {renderStars(rating)}
                </div>

                {/* Dummy description */}
                <p className="text-sm text-gray-600">{userList.description || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}</p>
                
                {/* Button to see more details */}
                <div className="flex justify-center pt-5">
                    <Link to={`/detail/${userList.id}`}>
                        <button className="px-4 py-1 text-sm text-white bg-orange-500 rounded-lg drop-shadow-md">
                            See Detail
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default UserList;

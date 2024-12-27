

const Publication = () => {

    const publication = [
        {
            title: "The Positive Role of Consistency in Daily Life",
            description: "Consistency in your daily life can be difficult to achieve. These are six easy demands on...",
            category: "Daily Life",
            author: "Dr. Nick Willford",
            date: "June 11, 2023",
            image: "https://media.istockphoto.com/id/1252303771/photo/caregiver-psychologist-console-asian-senior-people-for-mental-health.jpg?s=612x612&w=0&k=20&c=04KQoRiKPjfUiVMO115sU0-kgbqjTrC1yWRQzNN1A6g=" // Replace with actual image URL
        },
        {
            title: "Common Mental Health Problems Students May Face This Year",
            description: "University life can be stressful, often disturbing our mental well-being. Here's how to...",
            category: "Burnout",
            author: "Dr. Nick Willford",
            date: "June 12, 2023",
            image: "https://media.istockphoto.com/id/1197547434/photo/diverse-people-sit-in-circle-participating-in-team-building-activity.jpg?s=612x612&w=0&k=20&c=fJ9zAgv0ClHOxVKZ29Aanb_WJ1L5Ze--zy9FgvQ95Ps=", // Replace with actual image URL
        },
        {
            title: "The Psychology of Managing People in the Workplace",
            description: "Whether it is in a professional context or a personal one, the management of people...",
            category: "Work",
            author: "Dr. Nick Willford",
            date: "June 13, 2023",
            image: "https://media.istockphoto.com/id/1388115351/photo/shot-of-a-young-man-having-a-therapeutic-session-with-a-psychologist.jpg?s=612x612&w=0&k=20&c=ABgfdHZRpzQCZpngz7jiaMfBiD081f5SONMTitDAGmQ=", // Replace with actual image URL
        },
    ];

    return (
        <div className="p-8">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold">Publications</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8">
                {publication.map((item, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                    >
                        <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
                        <div className="p-6">
                            <span className="text-sm text-blue-500 font-medium">{item.category}</span>
                            <h2 className="text-xl font-bold mt-2">{item.title}</h2>
                            <p className="text-gray-600 mt-4">{item.description}</p>
                           
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Publication;

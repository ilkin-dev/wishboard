import profPic from '../assets/images/fitness.jpg';

export const userProfile = {
    name: "John Doe",
    email: "john.doe@example.com",
    profilePicture: profPic // Placeholder profile image
};

export const userBoards = [
    { id: 1, title: "Fitness Goals", username: "JohnDoe", createdDate: "2024-10-01", deadlineDate: "2024-12-01", progress: 40, thumbnail: profPic },
    { id: 2, title: "Travel Plan", username: "JohnDoe", createdDate: "2024-09-10", deadlineDate: "2024-11-10", progress: 50, thumbnail: profPic },
    { id: 3, title: "Study Routine", username: "JohnDoe", createdDate: "2024-07-15", deadlineDate: "2024-10-15", progress: 60, thumbnail: profPic },
];

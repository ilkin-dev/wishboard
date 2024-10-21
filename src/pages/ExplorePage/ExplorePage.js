import React, { useState } from 'react';
import './ExplorePage.scss';
import HeaderSection from '../../components/Header/HeaderSection';
import FooterSection from '../../components/FooterSection/FooterSection';
import BoardCard from '../../components/BoardCard/BoardCard';
import Filters from '../../components/Filters/Filters';
import useInfiniteScroll from '../../hooks/UseInfiniteScroll';

// Static array for boards
const initialBoards = [
    { id: 1, title: "Fitness Goals", username: "JohnDoe", createdDate: "2024-10-01", deadlineDate: "2024-12-01", progress: 40, thumbnail: "fitness.jpg" },
    { id: 2, title: "Travel Plan", username: "JaneDoe", createdDate: "2024-09-10", deadlineDate: "2024-11-10", progress: 50, thumbnail: "travel.jpg" },
    { id: 3, title: "Study Routine", username: "Student007", createdDate: "2024-07-15", deadlineDate: "2024-10-15", progress: 60, thumbnail: "study.jpg" },
    { id: 4, title: "Reading List", username: "Bookworm", createdDate: "2024-06-05", deadlineDate: "2024-09-05", progress: 90, thumbnail: "books.jpg" },
    { id: 5, title: "Cooking Recipes", username: "ChefMaster", createdDate: "2024-05-20", deadlineDate: "2024-08-20", progress: 25, thumbnail: "cooking.jpg" },
    { id: 6, title: "Programming Projects", username: "Coder123", createdDate: "2024-03-10", deadlineDate: "2024-06-10", progress: 70, thumbnail: "programming.jpg" },
    { id: 7, title: "Business Strategy", username: "Entrepreneur", createdDate: "2024-04-12", deadlineDate: "2024-07-12", progress: 55, thumbnail: "business.jpg" },
    { id: 8, title: "Photography", username: "Shutterbug", createdDate: "2024-02-28", deadlineDate: "2024-05-28", progress: 85, thumbnail: "photography.jpg" },
    { id: 9, title: "Health and Wellness", username: "HealthyLiving", createdDate: "2024-01-15", deadlineDate: "2024-04-15", progress: 65, thumbnail: "wellness.jpg" },
    { id: 10, title: "Learning Languages", username: "Polyglot", createdDate: "2024-07-01", deadlineDate: "2024-10-01", progress: 45, thumbnail: "languages.jpg" },
    { id: 11, title: "Financial Planning", username: "Investor", createdDate: "2024-05-05", deadlineDate: "2024-08-05", progress: 35, thumbnail: "finance.jpg" },
    { id: 12, title: "Movie Marathon", username: "FilmFan", createdDate: "2024-06-01", deadlineDate: "2024-09-01", progress: 75, thumbnail: "movies.jpg" },
    { id: 13, title: "Fitness Tracker", username: "Athlete", createdDate: "2024-08-15", deadlineDate: "2024-11-15", progress: 50, thumbnail: "fitness.jpg" },
    { id: 14, title: "Gardening Plan", username: "GreenThumb", createdDate: "2024-03-22", deadlineDate: "2024-06-22", progress: 30, thumbnail: "gardening.jpg" },
    { id: 15, title: "Graphic Design", username: "Designer", createdDate: "2024-04-10", deadlineDate: "2024-07-10", progress: 60, thumbnail: "design.jpg" },
    { id: 16, title: "Music Playlist", username: "DJMixer", createdDate: "2024-02-20", deadlineDate: "2024-05-20", progress: 80, thumbnail: "music.jpg" },
    { id: 17, title: "Art Portfolio", username: "Artist", createdDate: "2024-09-05", deadlineDate: "2024-12-05", progress: 70, thumbnail: "art.jpg" },
    { id: 18, title: "Pet Care", username: "PetLover", createdDate: "2024-08-10", deadlineDate: "2024-11-10", progress: 65, thumbnail: "pets.jpg" },
    { id: 19, title: "Reading Challenge", username: "BookLover", createdDate: "2024-07-25", deadlineDate: "2024-10-25", progress: 90, thumbnail: "books.jpg" },
    { id: 20, title: "New Year's Resolution", username: "GoalSetter", createdDate: "2024-01-01", deadlineDate: "2024-04-01", progress: 40, thumbnail: "resolution.jpg" },
    { id: 21, title: "Fitness Challenge", username: "GymGoer", createdDate: "2024-03-30", deadlineDate: "2024-06-30", progress: 55, thumbnail: "fitness.jpg" },
    { id: 22, title: "Vacation Planning", username: "Traveler", createdDate: "2024-06-15", deadlineDate: "2024-09-15", progress: 75, thumbnail: "travel.jpg" },
    { id: 23, title: "Home Renovation", username: "HomeOwner", createdDate: "2024-05-10", deadlineDate: "2024-08-10", progress: 85, thumbnail: "renovation.jpg" },
    { id: 24, title: "Skill Development", username: "Learner", createdDate: "2024-07-01", deadlineDate: "2024-10-01", progress: 50, thumbnail: "skills.jpg" },
    { id: 25, title: "Event Planning", username: "Organizer", createdDate: "2024-02-01", deadlineDate: "2024-05-01", progress: 45, thumbnail: "event.jpg" },
    { id: 26, title: "Social Media Strategy", username: "Marketer", createdDate: "2024-04-05", deadlineDate: "2024-07-05", progress: 30, thumbnail: "socialmedia.jpg" },
    { id: 27, title: "Holiday Shopping", username: "Shopper", createdDate: "2024-10-05", deadlineDate: "2024-12-25", progress: 10, thumbnail: "shopping.jpg" },
    { id: 28, title: "DIY Projects", username: "Crafter", createdDate: "2024-03-01", deadlineDate: "2024-06-01", progress: 55, thumbnail: "diy.jpg" },
    { id: 29, title: "Photography Portfolio", username: "Photographer", createdDate: "2024-05-15", deadlineDate: "2024-08-15", progress: 90, thumbnail: "photography.jpg" },
    { id: 30, title: "Budget Tracker", username: "FinanceGuru", createdDate: "2024-01-10", deadlineDate: "2024-04-10", progress: 70, thumbnail: "budget.jpg" },
];

const ExplorePage = () => {
    const [hasMore, setHasMore] = useState(true);
    const [filters, setFilters] = useState({});
    const [boards, setBoards] = useState(initialBoards.slice(0, 6)); // Display first 6 boards initially

    const fetchMoreBoards = () => {
        const nextBoards = initialBoards.slice(boards.length, boards.length + 6); // Load 6 more boards
        setBoards((prevBoards) => [...prevBoards, ...nextBoards]);

        if (nextBoards.length === 0) {
            setHasMore(false);
        }
    };

    useInfiniteScroll(fetchMoreBoards, hasMore);

    return (
        <div className="explore-page">
            <HeaderSection /> {/* Add the same Header */}
            <main>
                <section className="explore-page__hero">
                    <h1 className="explore-page__title">Explore Wishboards</h1>
                </section>
                <Filters filters={filters} setFilters={setFilters} />
                <section className="explore-page__boards">
                    {boards.map((board) => (
                        <BoardCard key={board.id} board={board} />
                    ))}
                </section>
                {hasMore && <div className="explore-page__loading">Loading more boards...</div>}
            </main>
            <FooterSection />
        </div>
    );
};

export default ExplorePage;

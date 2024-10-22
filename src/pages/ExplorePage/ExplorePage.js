import React, { useState, useEffect } from 'react';
import apiClient from '../../api/axios';
import './ExplorePage.scss';
import BoardCard from '../../components/BoardCard/BoardCard';
import Filters from '../../components/Filters/Filters';
import useInfiniteScroll from '../../hooks/UseInfiniteScroll';
import HeaderSection from '../../components/Header/HeaderSection';
import FooterSection from '../../components/FooterSection/FooterSection';

const ExplorePage = () => {
    const [hasMore, setHasMore] = useState(true);
    const [filters, setFilters] = useState({});
    const [boards, setBoards] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Utility function to remove duplicates based on `id`
    const removeDuplicates = (newBoards) => {
        const boardIds = new Set(boards.map((board) => board.id));
        return newBoards.filter((board) => !boardIds.has(board.id));
    };

    const fetchBoards = async () => {
        try {
            const response = await apiClient.get('/wishboards/paginate', {
                params: {
                    start: boards.length,
                    limit: 6,
                },
            });

            const newBoards = response.data || [];

            if (newBoards.length === 0) {
                setHasMore(false); // If no more boards, stop further loading
            }

            const filteredBoards = removeDuplicates(newBoards); // Remove duplicates before setting state

            if (filteredBoards.length > 0) {
                setBoards((prevBoards) => [...prevBoards, ...filteredBoards]);
            }

            setLoading(false);
        } catch (error) {
            console.error('Error fetching wishboards:', error);
            setError('Failed to load wishboards');
            setLoading(false);
        }
    };

    useInfiniteScroll(fetchBoards, hasMore);

    useEffect(() => {
        fetchBoards();
    }, []);

    if (loading) return <p>Loading wishboards...</p>;
    if (error) return <p className="explore-page__error">{error}</p>;

    return (
        <div className="explore-page">
            <HeaderSection />
            <h1 className="explore-page__title">Explore Wishboards</h1>
            <Filters filters={filters} setFilters={setFilters} />
            <div className="explore-page__boards">
                {boards.map((board) => (
                    <BoardCard key={board.id} board={board} />
                ))}
            </div>
            {hasMore && <div className="explore-page__loading">Loading more boards...</div>}
            <FooterSection />
        </div>
    );
};

export default ExplorePage;

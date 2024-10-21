import { useEffect } from 'react';

const UseInfiniteScroll = (callback, hasMore) => {
    useEffect(() => {
        const handleScroll = () => {
            if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 2 && hasMore) {
                callback();
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [callback, hasMore]);
};

export default UseInfiniteScroll;

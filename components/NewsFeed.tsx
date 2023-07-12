import React from 'react';
import { useEffect } from 'react';

interface NewFeedProps {
  navbarIsOpen: boolean;
};

interface NewsFeedItem {
  category: any[];
  created: number;
  description: string;
  enclosures: any[];
  id: string;
  link: string;
  media: {};
  published: number;
  title: string;
};

const NEWS_ITEM_UPDATE_INTERVAL: number = 5000;
const NEWS_FEED_UPDATE_INTERVAL: number = 60000;

const NewsFeed = ({ navbarIsOpen }: NewFeedProps) => {
  const [currentFeedItems, setCurrentFeedItems] = React.useState<NewsFeedItem[]>(null);
  const [currentNewsItem, setCurrentNewsItem] = React.useState<NewsFeedItem>(null);
  const top: string = navbarIsOpen ? "top-32" : "top-16";
  let newsItemIndex: number = 0;

  const updateNewsItem = () => {
    if (currentFeedItems) {
      newsItemIndex++;
      newsItemIndex = (newsItemIndex + currentFeedItems.length) % currentFeedItems.length;
      const newsItem: NewsFeedItem = currentFeedItems?.at(newsItemIndex) || null;
      setCurrentNewsItem(newsItem);
    }
  };

  useEffect(() => {
    updateNewsItem();
    const interval: NodeJS.Timer = setInterval(updateNewsItem, NEWS_ITEM_UPDATE_INTERVAL);
    return () => clearInterval(interval);
  }, []);

  const getLatestFromFeed = () => fetch('api/feed')
    .then(response => response.json())
    .then((data) => {
      const feedItems: NewsFeedItem[] = data.items.slice(0, 5);
      setCurrentFeedItems(feedItems);
    });

  useEffect(() => {
    getLatestFromFeed();
    const interval: NodeJS.Timer = setInterval(getLatestFromFeed, NEWS_FEED_UPDATE_INTERVAL);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {currentNewsItem &&
        <div className={`fixed w-full ${top} md:top-16 z-30 w-full bg-gray-800 text-white p-2 text-sm text-center`}>
          <span className="w-fit mr-4 inline-block align-middle"><a href={currentNewsItem.link} target="_blank">{currentNewsItem.title}</a></span>
        </div>
      }
    </>
  );
}

export default NewsFeed;
import React, { useState, useEffect } from 'react';
import './style.scss';
import useFetch from '../../../hooks/useFetch';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Img from '../../../components/lazyLoadImage/Img';
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper';

const HeroBanner = () => {
  const [background, setBackground] = useState('');
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  const { url } = useSelector((state) => state.home);
  const { data, loading } = useFetch('/movie/upcoming');

  const titleWords = ['Movies', 'TV Shows']; // Add more titles here
  const [currentTitle, setCurrentTitle] = useState(titleWords[0]);
  const [currentSubTitle, setCurrentSubTitle] = useState(titleWords[1]);

  useEffect(() => {
    const bg =
      url.backdrop +
      data?.results[Math.floor(Math.random() * 20)]?.backdrop_path;
    setBackground(bg);
  }, [data]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle(
        titleWords[(titleWords.indexOf(currentTitle) + 1) % titleWords.length]
      );
      setCurrentSubTitle(
        titleWords[
          (titleWords.indexOf(currentSubTitle) + 1) % titleWords.length
        ]
      );
    }, 2000);
    return () => clearInterval(interval);
  }, [currentTitle, currentSubTitle]);

  const searchQueryHandler = (event) => {
    if (event.key === 'Enter' && query.length > 0) {
      navigate(`/search/${query}`);
    }
  };

  return (
    <div className="heroBanner">
      {!loading && (
        <div className="backdrop-img">
          <Img src={background} />
        </div>
      )}
      <div className="opacity_layer"></div>
      <ContentWrapper>
        <div className="heroBannerContent">
          <span className="title">{currentTitle}</span>
          <span className="subTitle">{currentSubTitle}</span>
          <div className="serachInput">
            <input
              type="text"
              placeholder="Search for movies and TV shows"
              onChange={(e) => setQuery(e.target.value)}
              onKeyUp={searchQueryHandler}
            />
            <button>Search</button>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default HeroBanner;

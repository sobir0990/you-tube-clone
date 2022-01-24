import React, {useState} from 'react';
import './_categoriesBar.scss';
import {useDispatch} from "react-redux";
import {getPopularVideos, getVideosByCategory} from "../../redux/actions/videos.action";

const keywords = [
    'All',
    'Fara Tashkentskiy',
    'Долина Волков',
    'React Native',
    'use of API',
    'Redux',
    'Music',
    'Algorithm Art ',
    'Guitar',
    'Bengali Songs',
    'Coding',
    'Cricket',
    'Football',
    'Real Madrid',
    'Gatsby',
    'Poor Coder',
    'Shwetabh',
];


const CategoriesBar = () => {

    const [activeElement, setActiveElement] = useState('All');

    const dispatch = useDispatch();
    const handleClick = value => {
        setActiveElement(value);
        if (value === 'All'){
            dispatch(getPopularVideos())
        } else {
            dispatch(getVideosByCategory(value))
        }
    };


    return (
        <div className='categoriesBar'>
            {
                keywords.map((value, i) =>
                    <span
                        onClick={() => handleClick(value)}
                        className={activeElement === value ? 'active' : ''}
                        key={i}>{value}</span>
                )
            }
        </div>
    );
}

export default CategoriesBar;

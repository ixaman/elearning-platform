import React from 'react';
import useCourses from '../../hooks/useCourses';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Service from '../Service/Service';
import './Home.css';
const Home = () => {
    const [courses] = useCourses();
    const newCourses = courses.slice(0,6)

    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <h1 className="mt-5 text-success">Courses</h1><br />
            <div className='container cart-container'>
                {
                    newCourses.map(course => <Service
                        key = {course.c_id}
                        course = {course}
                    ></Service> )
                }
            </div>
            <h1 className="mt-5 text-success">Top Categories</h1><br />
            <div className='container cart-container'>
                <div className="cat-cart">
                    <div className="cat-cart-content">
                        <div className="image">
                            <img src="https://s.udemycdn.com/home/top-categories/lohp-category-design-v2.jpg" alt="" srcset="" />
                        </div>
                        <h4>Design</h4>
                    </div>
                </div>
                <div className="cat-cart">
                    <div className="cat-cart-content">
                        <div className="image">
                            <img src="https://s.udemycdn.com/home/top-categories/lohp-category-development-v2.jpg" alt="" srcset="" />
                        </div>
                        <h4>Development</h4>
                    </div>
                </div>
                <div className="cat-cart">
                    <div className="cat-cart-content">
                        <div className="image">
                            <img src="https://s.udemycdn.com/home/top-categories/lohp-category-marketing-v2.jpg" alt="" srcset="" />
                        </div>
                        <h4>Marketing</h4>
                    </div>
                </div>
                <div className="cat-cart">
                    <div className="cat-cart-content">
                        <div className="image">
                            <img src="https://s.udemycdn.com/home/top-categories/lohp-category-it-and-software-v2.jpg" alt="" srcset="" />
                        </div>
                        <h4>IT and Software</h4>
                    </div>
                </div>
                <div className="cat-cart">
                    <div className="cat-cart-content">
                        <div className="image">
                            <img src="https://s.udemycdn.com/home/top-categories/lohp-category-photography-v2.jpg" alt="" srcset="" />
                        </div>
                        <h4>Photography</h4>
                    </div>
                </div>
                <div className="cat-cart">
                    <div className="cat-cart-content">
                        <div className="image">
                            <img src="https://s.udemycdn.com/home/top-categories/lohp-category-personal-development-v2.jpg" alt="" srcset="" />
                        </div>
                        <h4>Personal Development</h4>
                    </div>
                </div>
            </div>
            <h1 className="mt-5 text-success">Blogs & Insights</h1><br />
            <div className='grid-container'>
                <div className="grid grid-1">
                    <p className='blog-title'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto nesciunt optio ad sed necessitatibus quibusdam corrupti excepturi odit, adipisci ab? </p>
                    <p>Alaxis D. Dowson</p>
                    <p>Author</p>
                </div>
                <div className="grid grid-2">
                    <p className='blog-title'>Stop Ignoring These 7 Inspiring <br />How to be 1% better every day.</p>
                    <p>Alaxis D. Dowson</p>
                    <p>Author</p>
                </div>
                <div className="grid grid-3">
                    <p className='blog-title'>Stop Ignoring These 7 Inspiring <br />How to be 1% better every day.</p>
                    <p>Alaxis D. Dowson</p>
                    <p>Author</p>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;
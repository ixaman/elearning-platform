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
            <h1 className="mt-5 text-warning">Courses</h1><br />
            <div className='container cart-container'>
                {
                    newCourses.map(course => <Service
                        key = {course.c_id}
                        course = {course}
                    ></Service> )
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;
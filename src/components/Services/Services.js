import React from 'react';
import useCourses from '../../hooks/useCourses';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Service from '../Service/Service';

const Services = () => {
    const [courses] = useCourses();

    return (
        <div>
            <Header></Header>
            <h1 className="mt-5 text-warning">All Courses</h1><br />
            <div className='container cart-container'>
                {
                    courses.map(course => <Service
                        key = {course.c_id}
                        course = {course}
                    ></Service> )
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Services;
import React from "react"

import { Link } from 'react-router-dom';

const Portals = () => {
    return (
        <div>
        <header className="portalheader">
            <div className="portalcontainer">
                <h1>University offered course lists</h1>
            </div>
        </header>

        <div className='portals'>
            <Link className="portallinks" to='./Student' user="student"><button>Student</button></Link>
            <Link className="portallinks" to='./LoginFaculty' user="faculty"><button>Instructor</button></Link>
            <Link className="portallinks" to='./LoginAdmin' user="admin"><button>Admin</button></Link>
        </div>
        <footer className="portalfooter">
            <h5 className="footertittle">Developed & maintained by CSE327 students</h5>
        </footer>
        </div>
    );
};

export default Portals
import React from 'react';
import Content from './Content';
import SideBar from './SideBar';

const Main = ({ user }) => (
    <main>
        <div className="container">
            <div className="row">
                <div className="col s3">
                    <SideBar user={user} />
                </div>

                <div className="col s9">
                    <Content />
                </div>

            </div>
        </div>

    </main>
);

export default Main;

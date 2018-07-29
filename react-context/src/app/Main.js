import React from 'react';
import Content from './Content';
import SideBar from './SideBar';

const Main = ({ user }) => (
    <main>
        <div className="container">
            <div class="row">
                <div class="col s3">
                    <SideBar user={user} />
                </div>

                <div class="col s9">
                    <Content />
                </div>

            </div>
        </div>

    </main>
);

export default Main;

import React from 'react';
import './Accorderon.css'

const Accordeon = ({friends}) => {

    const handleOpen = () => {
        function headerClick() {
            this.nextElementSibling.classList.toggle("accordeon-hid");
        }
        const headers = document.querySelectorAll('[data-name="accordeon-title"]');
        headers.forEach((item) => {
            item.addEventListener('click', headerClick);
        });


    };
    return (
        <div className="info-more" >
            <div onClick={handleOpen}
                 className="list-group-item list-header"
                 data-name="accordeon-title" >
                <i className="load-icon fas fa-users" ></i >Best Friends
            </div >
            <div className="list-info-content accordeon-hid" >
                {friends}
            </div >
        </div >
    );
};

export default Accordeon;
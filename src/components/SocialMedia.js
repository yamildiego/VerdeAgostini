import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Constants from './../config';
import './styles/SocialMedia.css';

const SocialMedia = (props) => {
    return (
        <div className={"SocialMedia " + props.className}>
            <div className="d-flex flex-row justify-content-center">
                <div className="p-2">
                    <a href={"https://api.whatsapp.com/send?phone=" + Constants.numberW} title="Whatsapp" rel="noopener noreferrer" target="_blank">
                        <div className="SocialMediaBtnLink SocialMediaW">
                            <FontAwesomeIcon color="white" icon={['fab', 'whatsapp']} />
                        </div>
                    </a>
                </div>
                <div className="p-2">
                    <a href={"https://www.facebook.com/" + Constants.fb} title="Facebook" target="_blank" rel="noopener noreferrer">
                        <div className="SocialMediaBtnLink SocialMediaF">
                            <FontAwesomeIcon color="white" icon={['fab', 'facebook-f']} />
                        </div>
                    </a>
                </div>
                <div className="p-2">
                    <a href={"https://www.instagram.com/" + Constants.instagram} title="Instagram" target="_blank" rel="noopener noreferrer">
                        <div className="SocialMediaBtnLink SocialMediaI">
                            <FontAwesomeIcon color="white" icon={['fab', 'instagram']} />
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default SocialMedia;
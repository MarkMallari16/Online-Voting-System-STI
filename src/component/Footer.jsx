import React from 'react'
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <footer className="Footer d-flex ">
                <div className="social-media-links d-flex gap-2 me-auto">
                    <FaFacebookSquare className='icons fs-3' />
                    <FaInstagramSquare className='icons fs-3' />

                </div>
                <div className="copyright d-flex gap-3 align-items-center">
                    <div>Privacy Policy</div>
                    <div>Copyright &copy; STI College Bacoor 2023</div>


                </div>
            </footer>

        </>
    )
}

export default Footer
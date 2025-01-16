import {Link} from "react-router";
import {Github, Linkedin, Instagram} from "lucide-react";
import {formatDate} from "../../lib/utils.ts";

function Footer() {
    const year = formatDate(new Date, "year")

    return (
        <footer>
            <div className="flex flex-col items-center justify-center p-5 gap-3">
                <p>Get in touch</p>
                <div className="flex gap-4">
                    <Link to="https://github.com/Koigor97" target="_blank">
                        <Github fill="#c0a672"/>
                    </Link>
                    <Link to="https://www.linkedin.com/in/samuel-turay1" target="_blank">
                        <Linkedin fill="#c0a672"/>
                    </Link>
                    <Link to="https://instagram.com/koigor101" target="_blank">
                        <Instagram fill="#c0a672"/>
                    </Link>
                </div>

            </div>
            <div className="text-center">
                <p className="text-sm text-text-400">
                    All rights reserved &copy;{year} | 😎 Samuel Turay
                </p>
            </div>
        </footer>
    )
}

export default Footer

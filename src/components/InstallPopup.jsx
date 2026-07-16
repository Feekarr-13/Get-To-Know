import { useEffect } from "react";
import "../styles/InstallPopup.css";

export default function InstallPopup({

    open,

    onClose,

    onInstall,

}) {

    useEffect(() => {

        if (open) {

            document.body.style.overflow = "hidden";

        } else {

            document.body.style.overflow = "auto";

        }

        return () => {

            document.body.style.overflow = "auto";

        };

    }, [open]);

    if (!open) return null;

    return (

        <div className="install-overlay">

            <div className="install-popup">

                {/* Logo */}

                <img
                    src="/logo2.png"
                    alt="Get To Know"
                    className="install-logo"
                />

                {/* Title */}

                <h2 className="install-title">

                    Install Get To Know

                </h2>

                {/* Subtitle */}

                <p className="install-desc">

                    Install aplikasi agar dapat digunakan
                    seperti aplikasi Android dan belajar
                    lebih nyaman kapan saja.

                </p>

                {/* Button */}

                <div className="install-actions">

                    <button
                        className="install-btn"
                        onClick={onInstall}
                    >

                        📲 Install

                    </button>

                    <button
                        className="later-btn"
                        onClick={onClose}
                    >

                        Nanti

                    </button>

                </div>
                <button
                    className="install-close"
                    onClick={onClose}
                >

                ✕

                </button>

            </div>

        </div>

    );

}
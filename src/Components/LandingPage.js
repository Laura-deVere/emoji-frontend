import { useState } from "react";
import Modal from "./Modal/Modal";

const LandingPage = () => {
    const [showModal, setShowModal] = useState(false);
    // should render sign in modal on click by updating state
    return (
        <div>
            <header className="centered--main--section header--main">
                <h1 className="header--xtra-large">Hello,</h1>
                <p>Are you sick of your friends misunderstanding your use of emojis?
                <br />
                Solution - clear things up by building a personal Emoji Dictionary.</p>
            </header>
            <section className="centered--main--section">
                <div>
                    <div className="main--emoji-box box-1">
                        <span>😬</span>
                    </div>
                    <div className="main--emoji-box box-2">
                        <span>😶</span>
                    </div>
                    <div className="main--emoji-box box-3">
                        <span>🥴</span>
                    </div>
                    <div className="main--emoji-box box-4">
                        <span>🙂</span>
                    </div>
                </div>
            </section>
            <section className="centered--main--section">
                <button
                    data-test="getStartedButton" className="button--get_started"
                    onClick={() => setShowModal(true)}
                >Get started</button>
            </section>
            <Modal isVisible={showModal} updateModalVisibility={setShowModal} />
        </div>
    )
}

export default LandingPage;
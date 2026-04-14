import style from './About.module.scss';
import idKey from './img/id-key.png';

const About = () => {
    return (
        <section>
            <div className={style.container}>
                <h1 className={style.h1}>Counter Application Logic</h1>

                <div className={style.box}>
                    <h2 className={style.h2}>General Description</h2>
                    <p>
                        The application lets the user increase or decrease a
                        number counter. Each user has their own counter that is
                        stored on the server.
                    </p>
                </div>

                <hr />

                <div className={style.box}>
                    <h2 className={style.h2}>
                        First Start – User Identification
                    </h2>
                    <div className={style.flex}>
                        <div>
                        <p>
                            When the user opens the application for the first
                            time:
                        </p>
                        
                            <ul>
                                <li>
                                    The system checks if a user key exists in
                                    localStorage.
                                </li>
                                <li>
                                    If the user does not exist:
                                    <ul>
                                        <li>
                                            the client sends a request to the
                                            server to create a new user
                                        </li>
                                        <li>
                                            the server generates a new user key
                                        </li>
                                        <li>
                                            the client saves this user key in
                                            localStorage
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    If the userId already exists:
                                    <ul>
                                        <li>
                                            the application uses it for all next
                                            requests.
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                            </div>
                            <img src={idKey} alt="id-key" width={'400px'} />
                        
                    </div>
                </div>

                <hr />

                <div className={style.box}>
                    <h2 className={style.h2}>Loading Data</h2>
                    <p>After getting the user key:</p>
                    <ul>
                        <li>
                            the client asks the server for the current counter
                            value
                        </li>
                        <li>
                            the server returns:
                            <ul>
                                <li>the current counter value</li>
                                <li>the history of previous values</li>
                            </ul>
                        </li>
                        <li>the client shows this data on the screen</li>
                    </ul>
                </div>

                <hr />

                <div className={style.box}>
                    <h2 className={style.h2}>Counter Actions</h2>
                    <p>The user can:</p>
                    <ul>
                        <li>increase the value</li>
                        <li>decrease the value</li>
                        <li>generate a random value</li>
                        <li>clear the value</li>
                        <li>save the value to history</li>
                    </ul>
                    <p>After each change:</p>
                    <ul>
                        <li>1. the new value appears on the screen</li>
                        <li>2. the new value is saved on the server</li>
                    </ul>
                </div>

                <hr />

                <div className={style.box}>
                    <h2 className={style.h2}>Saving the Result</h2>
                    <p>When the user decides to save the result:</p>
                    <ul>
                        <li>the current counter value is sent to the server</li>
                        <li>the server adds this record to the history</li>
                        <li>the current counter value resets to 0</li>
                        <li>
                            the client updates the interface:
                            <ul>
                                <li>the counter shows 0</li>
                                <li>
                                    a new record appears in the history list
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>

                <hr />

                <div className={style.box}>
                    <h2 className={style.h2}>History</h2>
                    <p>The history should contain:</p>
                    <ul>
                        <li>the counter value</li>
                        <li>the time when the record was created</li>
                    </ul>
                    <p>The user can:</p>
                    <ul>
                        <li>look histiry</li>
                        <li>delete history</li>
                    </ul>
                    <p>
                        The history is shown as a list on the screen. New
                        records appear at the top of the list.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;

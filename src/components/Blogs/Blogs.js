import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div className='container'>
                <h2>1. Difference between authorization and authentication</h2>
                <div className='blog-container'>
                    <div>
                        <h3>Authentication</h3>
                        <ul>
                            <li>
                                In authentication process, the identity of users are checked for providing the access to the system.
                            </li>
                            <li>
                                In authentication process, users or persons are verified
                            </li>
                            <li>
                                It is done before the authorization process.
                            </li>
                            <li>
                                It needs usually users login details.
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3>Authorization</h3>
                        <ul>
                            <li>
                                While in authorization process, persons or users authorities are checked for accessing the resources
                            </li>
                            <li>
                                While in this process, users or persons are validated.
                            </li>
                            <li>
                                While this process is done after the authentication process.
                            </li>
                            <li>
                                While it needs users privilege or security levels.
                            </li>
                        </ul>
                    </div>
                </div>
                <div>
                    <h2>2. Why are you using firebase? What other options do you have to implement authentication?</h2>
                    <p>I'm using Firebase Authentication to allow users to sign in to my app using one or more sign-in methods, including email address and password sign-in, and federated identity providers such as Google Sign-in and Facebook Login.Firebase Authentication makes it easier to get our users signed-in without having to understand the complexities behind implementing your own authentication system.Usually, authentication by a server entails the use of a user name and password. Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints.</p>
                </div>
                <div>
                    <h2>3. What other services does firebase provide other than authentication?</h2>
                    <p></p>
                </div>
            </div>
            );
        </div>
    );
};

export default Blogs;
import React from 'react';
import MyButton from '../utils/button';

const RegisterLogin = ( ) => {
    return(
        <div className="page_wrapper">
            <div className="container">
                <div className="register_login_container">
                    <div className="left">
                        <h1>New Customers</h1>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi, quo. Nisi quas alias, voluptate totam accusamus asperiores reiciendis labore natus, obcaecati, facere fugiat facilis. Eius excepturi tempore molestiae harum nulla.</p>
                        <MyButton
                            type="default"
                            title="Create an account"
                            linkTo="/register"
                            addStyles={{
                                margin:'10px 0 0 0'
                            }}
                        />
                    </div>
                    <div className="right">

                    </div>
                </div>
            </div>
        </div>
    )
};

export default RegisterLogin;
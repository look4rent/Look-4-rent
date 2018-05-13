import React from 'react';
import LoginPage from './LoginPage'
import {Input , Affix, Popover, Button } from 'antd';

const text = <span>Login</span>;
const content = (
  <LoginPage />
);

const buttonWidth = 70;
const Search = Input.Search;

const HomeHeader =()=>( 
            <div>
                <Affix>
                    <div className="header_container">
                        <img className="logo-image" src='images/logo.jpg'/>
                        <Search
                            placeholder="input search text"
                            onSearch={value => console.log(value)}
                            className="search"
                        />
                            <Popover classNamae="login-popup-container" placement="bottom"  content={content} >
                                <Button type="primary" className="login-button">Login</Button>
                            </Popover>
                      
                        

                    </div>
                    
                </Affix>
                    
                
            </div>
            
        )

export default HomeHeader;
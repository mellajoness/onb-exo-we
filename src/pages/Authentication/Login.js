import React, { useState } from 'react';
import styles  from './css/login.module.css';
import Image from 'next/image'
import {BsFillPersonFill} from "react-icons/bs";
import {FaLock} from  "react-icons/fa";
import  FidelityIcon from "../../assets/images/fidelitybrandlogo.svg";
// import {ReactComponent as FidelityIcon} from "../../assets/images/airtimeicon.svg";
import  IosAndroidIcon from "../../assets/images/iosandroid.svg";
import BounceLoader from "react-spinners/BounceLoader";
import { css } from "@emotion/react"; 
const override = css`
  display: block;
  margin: 0 auto;
  border-color: #0D2565;
  margin-bottom:10px
`;
const Login=(props)=> {
    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');
    const [color, setColor] = useState("#0D2565");

    const register=()=>{
        props.history.push("/register")
    }

    const handleSubmit=()=>{
           const body={
               "channel": 2,
               'userId':username,
               'password':password,
               'mobileVersion': 4.5,
               'webClient':ab,
               'machineId':'',
               'loginLocation':'',
               'ipAddress':'',
           }
           console.log('body',body)
        //    props.loginAction(body,props.history)
        //    props.history.push("/dashboard")
       }
  
    return ( 
        <>
            <div>
              <div className={styles.parent}>
                <div className={styles.backgroundImage}/>
                <div className={styles.formparent}>
                    <div className={styles.icondiv}>
                     <Image 
                      src={FidelityIcon}
                      alt="Picture of the author"
                      height="35px"
                     />
                    </div>
                    <div className={styles.welcome}>Welcome to Fidelity Online Banking</div>
                    <div className={styles.submessage}>Please log in safely. Protect your log in information.</div> 
                    <div className={styles.error}>error</div>  

                    <div className={styles.input}>
                        <BsFillPersonFill style={{color:'#B5B5B5',fontSize:'1.2em'}} />{" "}
                        <input onChange={e => setUsername(e.target.value)}  value={username} style={{border:'none',paddingLeft:'0.8em',background:'none',width:'100%',paddingRight:'1em',height:'100%',borderWidth:'0px',outline:'none'}} placeholder='Username'/>
                    </div>

                    <div className={styles.input}>
                        <FaLock style={{color:'#B5B5B5',fontSize:'1.2em'}}/>
                        <input type='password' onChange={e => setPassword(e.target.value)}  value={password} style={{border:'none',paddingLeft:'0.8em',background:'none',width:'100%',paddingRight:'1em',height:'100%',outline:'none'}} placeholder='Password'/>
                    </div>

                    <div className={styles.forgotpassword}>Forgot Password ?</div>
                        {props.loading &&
                          <div>
                             <BounceLoader color={color} loading={props.loading} css={override} size={20} /> 
                          </div>
                        }
                    <button disabled={username==='' || password===''} className={styles.button} onClick={handleSubmit}>{props.loading ? '...loading' : 'Sign In'}</button>
                    <div className={styles.sigupparent}>
                        <div onClick={register} className={styles.signuptext}>New Account? Register Here</div>
                        <div className={styles.signuptext}>Corporate Account?  Register Here</div>
                    </div>
                    <div className={styles.download}>Download your Fidelity Mobile App</div>
                    <div  className={styles.plaformparent}><Image src={IosAndroidIcon}  /></div>
                </div>          
              </div>
            </div>   
        </>
    );
}
 
export default Login;
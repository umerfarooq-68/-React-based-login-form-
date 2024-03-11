import React,{useState} from 'react';
import './index.css';

const Login = () => {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [allEntry, setAllEntry] = useState([]);

const submitForm=(e)=>{
  e.preventDefault();
    const newEntry={email:email , password:password};
    setAllEntry([...allEntry,newEntry]);
    console.log(allEntry);
}
  return (
 <>
  <form className="form" onSubmit={submitForm} autoComplete='off'>
    <label className="lb" htmlFor="nome">Email :</label>
    <input name="nome" id="nome" type="text" className="infos" value={email} onChange={(e)=>setEmail(e.target.value)} />
    <label htmlFor="email" className="lb">Password :</label>
    <input name="email" id="email" type="text" className="infos" value={password} onChange={(e)=>setPassword(e.target.value)}/>
    <button id="send" type="submit">Submit</button>
  </form>
  <div>
    {
        allEntry.map((curElem)=>{
 return(
    <div className='showDetails'>
<p className='email'>
    {curElem.email}
</p>
<p>
    {curElem.password}
</p>
        </div>
 )
        })
    }
  </div>
  </>
  )
}

export default Login
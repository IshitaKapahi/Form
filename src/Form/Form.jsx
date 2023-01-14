
import './Form.css'
export default function Form(){
    return(
        <div className="form">
             
            <div className="form_wrapper">
                <span className='text1'>It's a delight to have you</span><br />
                <span className='text2'>onboard</span>
                <div className='form1'>
                    <span className='text3'>Help us know you better.</span> <br />
                    <span className='text4'>(This is how we optimize Wobot as per your business needs)</span>
                </div>
                <div className='form2'>
                    <span>Company name</span> <br />
                    <input type="text" name="imput1" placeholder='e.g Example Inc' className='input1' size={52}/>
                </div>
                <div className='form3'>
                    <span>Industry</span> <br />
                    <select name="industry" className="industry" placeholder='Select'>
                    <option value="volvo">Select</option>
                    <option value="volvo">IT Industry</option>
                    <option value="volvo">Management</option>
                     </select>
                </div>
                <div className='form4'>
                    <span>Company size</span>
                    <div className='form5'>
                    <button className='btn1'>1-20</button>
                    <button className='btn'>21-50</button>
                    <button className='btn'>51-200</button>
                    <button className='btn'>201-500</button>
                    <button className='btn'>500+</button>
                    </div>
                    
                </div>

                <div className='form6'>
                    <button className='btn3'>Get Started</button>    
                </div>

            </div>

            <div className='form7'>
            <span>Terms of use | Privacy policy</span>
            </div>
        </div>
    )
} 
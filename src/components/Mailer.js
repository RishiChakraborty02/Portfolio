import React from 'react'
import emailjs from 'emailjs-com'
const Mailer = () => {
    function sendEmail(e){
        e.preventDefault();

        emailjs.sendForm('service_kpx4te6','template_gu1i89q',e.target,'user_ntnBNm2blGXbY32awj4Zw'
        ).then(res=>{
            console.log(res);
        }).catch(err=> console.log(err));
    }
    return (
        <div className='big'>
            <div className="container" style={
                {
                    paddingTop: "30px",
                    width: "50%",
                    backgroundColor: "#1f2235",
                    textAlign: "center",
                    height:"600px"
                }
            }>
                <h1 style={{marginTop: '25px', color:"White"}}>Contact form</h1>
                <form className='row' style={{margin: "25px 85px 75px 100px"}}
                onSubmit={sendEmail}>

                    <label style={{color:"white"}}>name</label>
                    <input type="text" name="name" placeholder="Enter your name" className='form-control'/>

                    <label style={{color:"white", marginTop:"30px"}}>Email</label>
                    <input type="email" name="user_email" placeholder="Enter your email" className='form-control' />

                    <label style={{color:"white", marginTop:"30px"}}>Message</label>
                    <textarea name="message" rows="4" placeholder="Leave some message" className='form-control'/>
                    <input type="submit" value="Send" className='form-control btn btn-primary' 
                    style={{marginTop:"30px", backgroundColor:"#99bebf", color:"black", width:"100%"}}/>
                </form>
            </div>
        </div>

    )
}

export default Mailer
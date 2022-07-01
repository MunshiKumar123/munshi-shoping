import React, { useState } from "react";

const Contact = () => {

    const [data, setData] = useState({
        fullname: "",
        phone: "",
        email: "",
        msg: "",
    });

    const inputEvent = (evt) => {

        setData({ ...data, [evt.target.name]: evt.target.value });
    }



    const fromSubmit = (e) => {
        alert(`${data.fullname} My mobile number is ${data.phone} and email is ${data.email} Here is what I want to say ${data.msg}`);
        e.preventDefault();
    }





    return (
        <>


            <div className="my-5">

                <h1 className="text-center"> Contact US </h1>
            </div>

            <div className="container contact_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">


                        <form onClick={fromSubmit}>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">FullName</label>
                                <input type="text" className="form-control" id="exampleFormControlInput1"
                                    name="fullname" value={data.fullname} onChange={inputEvent}
                                    placeholder="Enter your name" />
                            </div>

                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Phone</label>
                                <input type="number" className="form-control" id="exampleFormControlInput1" name="phone" value={data.phone} onChange={inputEvent} placeholder="mobile number" />
                            </div>

                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleFormControlInput1" name="email" value={data.email} onChange={inputEvent} placeholder="Enter email id" />
                            </div>

                            <div className="mb-3">
                                <label for="exampleFormControlTextarea1" className="form-label">Message</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name="msg" value={data.msg} onChange={inputEvent}></textarea>
                            </div>

                            <div className="col-12">
                                <input className="btn btn-outline-primary" type="submit" />
                            </div>

                        </form>

                    </div>
                </div>

            </div>

        </>
    )
}
export default Contact;
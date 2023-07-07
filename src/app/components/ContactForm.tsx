"use client"
import React, {useState} from 'react';
import Validator from "email-validator"
import {BsWhatsapp} from "react-icons/bs"

const ContactForm = () => {
    const [email, SetEmail] = useState("");
    const [message, SetMessage] = useState("");
    const [EmailSubmitted, SetHasSubmitted] = useState(false)
    const [EmailShowSubmitted, SetHasShowSubmitted] = useState(false)
    const result = Validator.validate(email)
    const [sendingEmail, SetEmailing] = useState(false);
    const [showErrors, SetDisplayErrors] = useState(true);
    const correctmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const mail = (e) => {
        SetEmail(e.target.value)
    }

    const Message = (e) => {
        SetMessage(e.target.value)
    }
    const Form = async (e) => {
        e.preventDefault();
        let response;
        try {
            if (email === "" || message === "") {
                throw new Error("Please fill all the fields");
            }
            if (
                !email.includes("@") ||
                !email.includes(".com") ||
                !email.match(correctmail) ||
                result === false
            ) {
                throw new Error("Invalid email address");
            }
            if (message.length < 10) {
                throw new Error("Message must be more than 10 characters");
            }
            const formData = {
                email,
                message,
            };
            response = await fetch('/api/Contact', {
                method: 'POST',
                body: JSON.stringify(formData),
                type: 'application/json'
            });
            SetEmail("")
            SetMessage("")

            SetEmailing(false)
            SetHasSubmitted(true)
            SetHasShowSubmitted(true)
        } catch (e) {
            console.error("Failed to Send the Message", e);
            SetEmailing(false);
            SetHasSubmitted(false);
        }
        DisplayErrors();
    };
    if (EmailSubmitted) {
        setTimeout(() => {
            SetDisplayErrors(true)
            SetHasSubmitted(false);
        }, 1)
    }
    if (EmailShowSubmitted) {
        setTimeout(() => {
            SetHasShowSubmitted(false);
        }, 5000)
    }
    const DisplayErrors = () => {
        SetDisplayErrors(false);
    }

    return (
        <section id={`contact`} className={`dark:bg-transparent bg-gray-300 `}>
            <div className="flex flex-wrap w-full p-10">
                <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                    <h2 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Contact Us</h2>
                    <div className="h-1 w-20 bg-primary rounded"></div>
                </div>
            </div>
            <div className="text-gray-600  grid md:grid-cols-[1fr_.6fr]">

                <div className=" inset-0 ">
                    <section id={`contact-info`} className={`p-24`}>

                        <div className={`bg-white p-10 dark:bg-white rounded-md md:w-8/12`}>
                            <BsWhatsapp
                                className={`text-green-400 dark:text-green-600 text-xl sm:text-2xl md:text-3xl lg:text-4xl`}/>
                        </div>
                    </section>
                </div>

                <div className=" flex bg-white rounded-lg m-8">
                    <form
                        className="   p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
                        <h2 className="text-gray-900 dark:text-gray-900 text-lg mb-1 font-medium title-font">Contact
                            Us</h2>
                        <p className="leading-relaxed mb-5 dark:text-gray-600 text-gray-600">For any business inquiries,
                            please don't hesitate feel free to contact us.</p>
                        <div className="relative mb-4">
                            <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                            <input value={email ? email : ""} onChange={mail} type="email" id="email" name="email"
                                   className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                            <div className={`${showErrors ? "hidden" : ""} ${email === "" ? "" : "hidden"} mx-2 text-red-700 font-medium`}>
                               Email Required
                            </div>
                            <div className={` ${showErrors ? "hidden" : ""} ${!email.match(correctmail) && result===false  ? "" : "hidden"} mx-2 text-red-700 font-medium`}>
                               Invalid Email Address
                            </div>

                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
                            <textarea value={message ? message : ""} onChange={Message} id="message" name="message"
                                      className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                            <div className={` ${message.length <= 10 ? "" : "hidden"}
                                                ${showErrors ? "hidden" : ""} mx-2 absolute bottom-4 right-2 capitalize text-red-700 font-medium`}>
                                Message should be greater than 10 characters
                            </div>
                        </div>
                        <button onClick={Form}
                            className="text-white bg-buttonLight bg-buttonDark border-0 py-2 px-6 focus:outline-none rounded text-lg"
                        >
                            Send
                        </button>

                        <p className={`text-xs text-green-600 mt-3 dark:text-green-600 ${EmailShowSubmitted?"text-green-700":"hidden"}`}>Message Sent Successfully</p>

                    </form>
                </div>
            </div>
        </section>
    );
}

export default ContactForm;

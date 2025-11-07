import React, { useState } from 'react';
import Bottomleft from '../assets/formsvg/bottom-left-circle.svg'
import Topleft from '../assets/formsvg/top-right-circle.svg'


const ContactForm = ({ onSubmitSuccess }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);


  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };


  const validateForm = () => {
    const newErrors = {};


    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }


    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }


    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone is required';
    }


    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }


    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
    if (submitSuccess) {
      setSubmitSuccess(false);
    }
  };


  const handleSubmit = async () => {
    if (!validateForm()) {
      return;
    }


    setIsSubmitting(true);


    try {
      const response = await fetch('https://vernanbackend.ezlab.in/api/contact-us/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });


      if (response.ok) {
        setSubmitSuccess(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        });
        if (onSubmitSuccess) {
          onSubmitSuccess();
        }
      } else {
        setErrors({ submit: 'Failed to submit. Please try again.' });
      }
    } catch (error) {
      setErrors({ submit: 'Network error. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <div className="min-h-screen bg-[#FBF4F0] relative overflow-hidden">
      {/* Top Right Decorative Circle */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] pointer-events-none">
        <img src={Topleft} alt="Top Right Decoration" className="w-full h-full" />
      </div>


      {/* Bottom Left Decorative Circle */}
      <div className="absolute bottom-0  left-0 w-[250px] h-[250px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px] pointer-events-none">
        <img src={Bottomleft} alt="Bottom Left Decoration" className="w-full h-full" />
      </div>


      {/* Main Content */}
      <div className="container mx-auto px-6 md:px-8 lg:px-12 py-6 md:py-10 lg:py-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
          
          {/* Left Section */}
          <div className="space-y-6  pt-8">
            <div className="space-y-2">
              <p className="text-lg text-[#252729]">
                Whether you have an idea, a question, or simply want
              </p>
              <p className="text-lg text-[#252729]">
                to explore how V can work together, V're just a
              </p>
              <p className="text-lg text-[#252729] border-b-2 border-[#F15D2B] inline-block">
                message away.
              </p>
            </div>
            <div className="space-y-1 pt-4">
              <p className="text-lg text-[#252729]">
                Let's catch up over coffee.
              </p>
              <p className="text-lg text-[#252729]">
                Great stories always begin with a good conversation
              </p>
            </div>
          </div>


          {/* Right Section - Form */}
          <div className="space-y-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-normal font-halant text-[#252729] mb-2">
                Join the Story
              </h1>
              <p className="text-lg font-instrument text-[#252729]">
                Ready to bring your vision to life? Let's talk.
              </p>
            </div>


            <div className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name*"
                  className={`w-full px-4 py-3 bg-white border ${
                    errors.name ? 'border-red-500' : 'border-gray-200'
                  } rounded-lg focus:outline-none focus:border-primary transition-colors text-[#252729]`}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>


              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email*"
                  className={`w-full px-4 py-3 bg-white border ${
                    errors.email ? 'border-red-500' : 'border-gray-200'
                  } rounded-lg focus:outline-none focus:border-[#F15D2B] transition-colors text-[#252729]`}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>


              <div>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone"
                  className={`w-full px-4 py-3 bg-white border ${
                    errors.phone ? 'border-red-500' : 'border-gray-200'
                  } rounded-lg focus:outline-none focus:border-[#F15D2B] transition-colors text-[#252729]`}
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                )}
              </div>


              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message*"
                  rows="5"
                  className={`w-full px-4 py-3 bg-white border ${
                    errors.message ? 'border-red-500' : 'border-gray-200'
                  } rounded-lg focus:outline-none focus:border-[#F15D2B] transition-colors resize-none text-[#252729]`}
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                )}
              </div>


              {submitSuccess && (
                <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg text-center">
                  Form Submitted Successfully!
                </div>
              )}


              {errors.submit && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-center">
                  {errors.submit}
                </div>
              )}


              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="w-full bg-[#F15D2B] font-halant text-white py-3 px-6 rounded-lg font-medium hover:bg-[#d94e1f] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </button>
            </div>


            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-base text-[#252729] pt-4">
              <a href="mailto:vernan@vernanfilms.co.in" className="hover:text-[#F15D2B] transition-colors">
                vernan@vernanfilms.co.in
              </a>
              <a href="tel:+919876164657" className="hover:text-[#F15D2B] transition-colors">
                +91 98761 64657
              </a>
            </div>
          </div>
        </div>
      </div>


      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;500;600&display=swap');
        
        * {
          font-family: 'Instrument Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        }
        
        input::placeholder,
        textarea::placeholder {
          color: #999;
          font-weight: 400;
        }


        /* Responsive breakpoints */
        @media (max-width: 480px) {
          .container {
            padding-left: 1rem;
            padding-right: 1rem;
          }
        }


        @media (min-width: 720px) and (max-width: 1079px) {
          .container {
            max-width: 720px;
          }
        }


        @media (min-width: 1080px) and (max-width: 1439px) {
          .container {
            max-width: 1080px;
          }
        }


        @media (min-width: 1440px) {
          .container {
            max-width: 1440px;
          }
        }


        /* iPad specific */
        @media (width: 2048px) and (height: 2732px) {
          .container {
            max-width: 1800px;
          }
        }
      `}</style>
    </div>
  );
};


export default ContactForm;

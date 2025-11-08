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
      {/* Layer 1: Background is the bg-[#FBF4F0] above (z-index: 0) */}
      
      {/* Layer 2: Decorative Circles - Middle layer */}
      <div className="absolute top-0 right-0 w-[200px] h-[200px] md:w-[280px] md:h-[280px] lg:w-[350px] lg:h-[350px] z-10 pointer-events-none">
        <img src={Topleft} alt="Top Right Decoration" className="w-full h-full" />
      </div>

      <div className="absolute bottom-0 left-0 w-[180px] h-[180px] md:w-[250px] md:h-[250px] lg:w-[300px] lg:h-[300px] z-10 pointer-events-none">
        <img src={Bottomleft} alt="Bottom Left Decoration" className="w-full h-full" />
      </div>

      {/* Layer 3: Main Content - Top layer */}
      <div className="container mx-auto px-6 md:px-8 lg:px-12 py-6 md:py-10 lg:py-6 relative z-20">
        <div className="grid grid-cols-1  lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
          
          {/* Left Section */}
          <div className="space-y-6 pt-8 relative top-20 ">
            <div className="mb-1 space-y-1 font-instrument">
              <p className="text-lg text-[#252729] ">
                Whether you have an idea, a question, or simply want
              </p>
              <p className="text-lg text-[#252729]">
                to explore how V can work together, V're just a
              </p>
              <p className="text-lg text-[#252729] inline-block">
                message away.
              </p>
            </div>
            <div className="space-y-1 pt-0">
              <p className="text-lg text-[#252729]">
                Let's catch up over coffee.
              </p>
              <p className="text-lg text-[#252729]">
                Great stories always begin with a good conversation
              </p>
            </div>
          </div>

          {/* Right Section - Form */}
     <div className="space-y-4  relative top-30">
  <div className="text-center">
    <h1 className="text-xl md:text-2xl font-normal font-halant text-[#252729] mb-1">
      Join the Story
    </h1>
    <p className="text-sm md:text-base font-instrument text-[#252729]">
      Ready to bring your vision to life? Let's talk.
    </p>
  </div>

  <div className="space-y-3">
    <div>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Your name*"
        className={`w-full px-3 py-2 text-sm bg-white border ${
          errors.name ? 'border-red-500' : 'border-gray-200'
        } rounded-lg focus:outline-none focus:border-primary transition-colors text-[#252729]`}
      />
      {errors.name && (
        <p className="text-red-500 text-xs mt-1">{errors.name}</p>
      )}
    </div>

    <div>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Your email*"
        className={`w-full px-3 py-2 text-sm bg-white border ${
          errors.email ? 'border-red-500' : 'border-gray-200'
        } rounded-lg focus:outline-none focus:border-primary transition-colors text-[#252729]`}
      />
      {errors.email && (
        <p className="text-red-500 text-xs mt-1">{errors.email}</p>
      )}
    </div>

    <div>
      <input
        type="tel"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder="Phone"
        className={`w-full px-3 py-2 text-sm bg-white border ${
          errors.phone ? 'border-red-500' : 'border-gray-200'
        } rounded-lg focus:outline-none focus:border-primary transition-colors text-[#252729]`}
      />
      {errors.phone && (
        <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
      )}
    </div>

    <div>
      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Your message*"
        rows="4"
        className={`w-full px-3 py-2 text-sm bg-white border ${
          errors.message ? 'border-red-500' : 'border-gray-200'
        } rounded-lg focus:outline-none focus:border-primary transition-colors resize-none text-[#252729]`}
      ></textarea>
      {errors.message && (
        <p className="text-red-500 text-xs mt-1">{errors.message}</p>
      )}
    </div>

    {submitSuccess && (
      <div className="bg-green-50 border border-green-200 text-green-700 px-3 py-2 rounded-lg text-center text-sm">
        Form Submitted Successfully!
      </div>
    )}

    {errors.submit && (
      <div className="bg-red-50 border border-red-200 text-red-700 px-3 py-2 rounded-lg text-center text-sm">
        {errors.submit}
      </div>
    )}

    <div className="w-full flex justify-center items-center pt-2">
      <button
        onClick={handleSubmit}
        disabled={isSubmitting}
        className="w-auto bg-primary cursor-pointer font-instrument shadow-[0_4px_12px_0_rgba(0,0,0,0.2)] text-white py-2.5 px-8 rounded-full text-sm font-medium hover:bg-[#d94e1f] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Submitting...' : 'Submit'}
      </button>
    </div>
  </div>

  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-sm text-[#252729] pt-2">
    <a href="mailto:vernan@vernanfilms.co.in" className="text-primary transition-colors">
      vernan@vernanfilms.co.in
    </a>
    <a href="tel:+919876164657" className="text-primary transition-colors">
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

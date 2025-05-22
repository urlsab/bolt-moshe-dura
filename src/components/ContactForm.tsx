import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const ContactForm: React.FC = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    
    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = t('contact.form.nameRequired');
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = t('contact.form.phoneRequired');
    }
    
    if (!formData.message.trim()) {
      newErrors.message = t('contact.form.messageRequired');
    }
    
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        phone: '',
        email: '',
        message: '',
      });
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6">
      {submitStatus === 'success' && (
        <div className="bg-success/10 border border-success text-success p-4 rounded-md mb-6 animate-fadeIn">
          {t('contact.success')}
        </div>
      )}
      
      {submitStatus === 'error' && (
        <div className="bg-error/10 border border-error text-error p-4 rounded-md mb-6 animate-fadeIn">
          {t('contact.error')}
        </div>
      )}
      
      <div className="mb-4">
        <label htmlFor="name" className="form-label">
          {t('contact.form.name')} *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={`form-input ${errors.name ? 'border-error' : ''}`}
        />
        {errors.name && (
          <p className="text-error text-sm mt-1">{errors.name}</p>
        )}
      </div>
      
      <div className="mb-4">
        <label htmlFor="phone" className="form-label">
          {t('contact.form.phone')} *
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className={`form-input ${errors.phone ? 'border-error' : ''}`}
          dir="ltr"
        />
        {errors.phone && (
          <p className="text-error text-sm mt-1">{errors.phone}</p>
        )}
      </div>
      
      <div className="mb-4">
        <label htmlFor="email" className="form-label">
          {t('contact.form.email')}
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="form-input"
          dir="ltr"
        />
      </div>
      
      <div className="mb-6">
        <label htmlFor="message" className="form-label">
          {t('contact.form.message')} *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className={`form-input min-h-[120px] ${errors.message ? 'border-error' : ''}`}
          rows={5}
        ></textarea>
        {errors.message && (
          <p className="text-error text-sm mt-1">{errors.message}</p>
        )}
      </div>
      
      <button
        type="submit"
        className={`btn-primary w-full ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
        disabled={isSubmitting}
      >
        {isSubmitting ? '...שולח' : t('contact.form.submit')}
      </button>
    </form>
  );
};

export default ContactForm;
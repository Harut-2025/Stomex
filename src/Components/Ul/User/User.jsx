import { useState } from 'react';
import { User, X, Mail, Lock } from 'lucide-react';
import styles from './User.module.scss';

export default function AvatarAuthModal({img}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('login');

  const toggleModal = () => setIsModalOpen(!isModalOpen);
  const switchToLogin = () => setActiveTab('login');
  const switchToRegister = () => setActiveTab('register');
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted');
  };

  return (
    <div className={styles.authWrapper}>
      <img src={img} alt="" onClick={toggleModal} className={styles.avatarIcon} />
      {isModalOpen && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContainer}>
            <button onClick={toggleModal} className={styles.closeButton}>
              <X size={20} />
            </button>

            <div className={styles.modalHeader}>
              <div className={styles.modalLogo}>
                <User className={styles.logoIcon} />
              </div>
              <h2 className={styles.modalTitle}>Welcome</h2>
            </div>

            <div className={styles.tabSwitcher}>
              <button
                className={`${styles.tabButton} ${activeTab === 'login' ? styles.active : ''}`}
                onClick={switchToLogin}
              >
                Sign In
              </button>
              <button
                className={`${styles.tabButton} ${activeTab === 'register' ? styles.active : ''}`}
                onClick={switchToRegister}
              >
                Register
              </button>
            </div>

            <div className={styles.modalBody}>
              {activeTab === 'login' && (
                <form className={styles.form} onSubmit={handleSubmit}>
                  <p className={styles.formSubtitle}>Welcome back! Please sign in to your account</p>

                  <div className={styles.formGroup}>
                    <label>Email</label>
                    <div className={styles.inputWrapper}>
                      <Mail size={16} className={styles.inputIcon} />
                      <input type="email" placeholder="your@email.com" />
                    </div>
                  </div>

                  <div className={styles.formGroup}>
                    <label>Password</label>
                    <div className={styles.inputWrapper}>
                      <Lock size={16} className={styles.inputIcon} />
                      <input type="password" placeholder="••••••••" />
                    </div>
                  </div>

                  <div className={styles.formFooter}>
                    <div className={styles.checkboxWrapper}>
                      <input type="checkbox" id="remember-me" />
                      <label htmlFor="remember-me">Remember me</label>
                    </div>
                    <a href="#" className={styles.forget}>Forgot password?</a>
                  </div>

                  <button type="submit" className={styles.submitButton}>
                    Sign In
                  </button>
                </form>
              )}

              {activeTab === 'register' && (
                <form className={styles.form} onSubmit={handleSubmit}>
                  <p className={styles.formSubtitle}>Create a new account to get started</p>

                  <div className={styles.formGroup}>
                    <label>Name</label>
                    <div className={styles.inputWrapper}>
                      <User size={16} className={styles.inputIcon} />
                      <input type="text" placeholder="John Doe" />
                    </div>
                  </div>

                  <div className={styles.formGroup}>
                    <label>Email</label>
                    <div className={styles.inputWrapper}>
                      <Mail size={16} className={styles.inputIcon} />
                      <input type="email" placeholder="your@email.com" />
                    </div>
                  </div>

                  <div className={styles.formGroup}>
                    <label>Password</label>
                    <div className={styles.inputWrapper}>
                      <Lock size={16} className={styles.inputIcon} />
                      <input type="password" placeholder="••••••••" />
                    </div>
                  </div>

                  <div className={styles.formGroup}>
                    <label>Confirm Password</label>
                    <div className={styles.inputWrapper}>
                      <Lock size={16} className={styles.inputIcon} />
                      <input type="password" placeholder="••••••••" />
                    </div>
                  </div>

                  <div className={styles.checkboxWrapper}>
                    <input type="checkbox" id="agree-terms" />
                    <label htmlFor="agree-terms">
                      I agree to the <a href="#">Terms</a> and <a href="#">Privacy Policy</a>
                    </label>
                  </div>

                  <button type="submit" className={styles.submitButton}>
                    Create Account
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

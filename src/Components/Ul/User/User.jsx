import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { User, X, Mail, Lock } from 'lucide-react';
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  updateProfile,
  onAuthStateChanged
} from 'firebase/auth';
import { auth } from '../../../firebase';
import styles from './User.module.scss';

const DEFAULT_AVATAR = "./Assets/Img/profilePhoto.png";

export default function AvatarAuthModal({ img }) {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('login');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
    return () => unsubscribe();
  }, []);

  const toggleModal = () => {
    if (!currentUser) {
      setIsModalOpen(!isModalOpen);
      setError(null);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setError(null);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth, 
        formData.email, 
        formData.password
      );
      
      if (!userCredential.user.photoURL) {
        await updateProfile(userCredential.user, {
          photoURL: DEFAULT_AVATAR
        });
      }
      
      closeModal();
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      setError(t('auth.passwordsDontMatch'));
      return;
    }
    
    setLoading(true);
    setError(null);
    
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      
      await updateProfile(userCredential.user, {
        displayName: formData.name,
        photoURL: DEFAULT_AVATAR
      });

      closeModal();
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleForgotPassword = async () => {
    if (!formData.email) {
      setError(t('auth.enterEmailFirst'));
      return;
    }
    
    try {
      await sendPasswordResetEmail(auth, formData.email);
      setError(null);
      alert(t('auth.passwordResetSent'));
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className={styles.authWrapper}>
      <div onClick={toggleModal} style={{ cursor: currentUser ? 'default' : 'pointer' }}>
        <img 
          src={currentUser ? DEFAULT_AVATAR : img}
          alt={t('auth.profile')}
          className={styles.avatarIcon}
        />
      </div>

      {!currentUser && isModalOpen && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div className={styles.modalContainer} onClick={(e) => e.stopPropagation()}>
            <button onClick={closeModal} className={styles.closeButton}>
              <X size={20} />
            </button>

            <div className={styles.modalHeader}>
              <div className={styles.modalLogo}>
                <User className={styles.logoIcon} />
              </div>
              <h2 className={styles.modalTitle}>{t('auth.welcome')}</h2>
            </div>

            <div className={styles.tabSwitcher}>
              <button
                className={`${styles.tabButton} ${activeTab === 'login' ? styles.active : ''}`}
                onClick={() => setActiveTab('login')}
              >
                {t('auth.signIn')}
              </button>
              <button
                className={`${styles.tabButton} ${activeTab === 'register' ? styles.active : ''}`}
                onClick={() => setActiveTab('register')}
              >
                {t('auth.register')}
              </button>
            </div>

            {error && <div className={styles.errorMessage}>{error}</div>}

            <div className={styles.modalBody}>
              {activeTab === 'login' ? (
                <form className={styles.form} onSubmit={handleLogin}>
                  <p className={styles.formSubtitle}>{t('auth.welcomeBack')}</p>

                  <div className={styles.formGroup}>
                    <label>{t('auth.email')}</label>
                    <div className={styles.inputWrapper}>
                      <Mail size={16} className={styles.inputIcon} />
                      <input 
                        type="email" 
                        name="email"
                        placeholder={t('auth.emailPlaceholder')} 
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        required
                      />
                    </div>
                  </div>

                  <div className={styles.formGroup}>
                    <label>{t('auth.password')}</label>
                    <div className={styles.inputWrapper}>
                      <Lock size={16} className={styles.inputIcon} />
                      <input 
                        type="password" 
                        name="password"
                        placeholder="••••••••" 
                        value={formData.password}
                        onChange={(e) => setFormData({...formData, password: e.target.value})}
                        required
                      />
                    </div>
                  </div>

                  <div className={styles.formFooter}>
                    <div className={styles.checkboxWrapper}>
                      <input type="checkbox" id="remember-me" />
                      <label htmlFor="remember-me">{t('auth.rememberMe')}</label>
                    </div>
                    <button 
                      type="button" 
                      className={styles.forget}
                      onClick={handleForgotPassword}
                    >
                      {t('auth.forgotPassword')}
                    </button>
                  </div>

                  <button 
                    type="submit" 
                    className={styles.submitButton}
                    disabled={loading}
                  >
                    {loading ? t('auth.signingIn') : t('auth.signIn')}
                  </button>
                </form>
              ) : (
                <form className={styles.form} onSubmit={handleRegister}>
                  <p className={styles.formSubtitle}>{t('auth.createAccount')}</p>

                  <div className={styles.formGroup}>
                    <label>{t('auth.name')}</label>
                    <div className={styles.inputWrapper}>
                      <User size={16} className={styles.inputIcon} />
                      <input 
                        type="text" 
                        name="name"
                        placeholder={t('auth.namePlaceholder')} 
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className={styles.formGroup}>
                    <label>{t('auth.email')}</label>
                    <div className={styles.inputWrapper}>
                      <Mail size={16} className={styles.inputIcon} />
                      <input 
                        type="email" 
                        name="email"
                        placeholder="your@email.com" 
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        required
                      />
                    </div>
                  </div>

                  <div className={styles.formGroup}>
                    <label>{t('auth.password')}</label>
                    <div className={styles.inputWrapper}>
                      <Lock size={16} className={styles.inputIcon} />
                      <input 
                        type="password" 
                        name="password"
                        placeholder="••••••••" 
                        value={formData.password}
                        onChange={(e) => setFormData({...formData, password: e.target.value})}
                        required
                      />
                    </div>
                  </div>

                  <div className={styles.formGroup}>
                    <label>{t('auth.confirmPassword')}</label>
                    <div className={styles.inputWrapper}>
                      <Lock size={16} className={styles.inputIcon} />
                      <input 
                        type="password" 
                        name="confirmPassword"
                        placeholder="••••••••" 
                        value={formData.confirmPassword}
                        onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                        required
                      />
                    </div>
                  </div>

                  <div className={styles.checkboxWrapper}>
                    <input type="checkbox" id="agree-terms" required />
                    <label htmlFor="agree-terms">
                      {t('auth.agreeTerms')}
                    </label>
                  </div>

                  <button 
                    type="submit" 
                    className={styles.submitButton}
                    disabled={loading}
                  >
                    {loading ? t('auth.creatingAccount') : t('auth.createAccount')}
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
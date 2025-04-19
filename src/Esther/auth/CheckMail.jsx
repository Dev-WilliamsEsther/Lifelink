import '../styles/checkMail.css';

export default function CheckMail() {
  return (
    <div className="checkmail-wrapper">
      <div className="checkmail-card">
        <img src="/images/checkmail.png" alt="Check mail" className="mail-img" />

        <h1>Verification Link Sent</h1>
        <p>
          You’re one step away from joining our life-saving community 🩸.  
          Please check your email and click the verification link to continue.
        </p>

        <button onClick={() => (window.location.href = 'https://mail.google.com')}>
          Open Email App
        </button>

        <p className="resend-text">
          Didn’t get it? <span className="resend-link">Resend Email</span>
        </p>
      </div>
    </div>
  );
}

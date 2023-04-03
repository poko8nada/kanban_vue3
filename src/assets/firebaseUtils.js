import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  mesurementId: import.meta.env.VITE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);

const errorMessages = (eCode,method)=>{
  switch (eCode) {
    case 'auth/cancelled-popup-request':
    case 'auth/popup-closed-by-user':
       return null;
    case 'auth/email-already-in-use':
      if (method.indexOf('signUp') !== -1) {
        return 'このメールアドレスは使用されています';
      } else {
        return 'メールアドレスまたはパスワードが違います';
      }
    case 'auth/invalid-email':
      return 'メールアドレスの形式が正しくありません';
    case 'auth/user-disabled':
      return 'サービスの利用が停止されています';
    case 'auth/user-not-found':
      return 'メールアドレスまたはパスワードが違います';
    case 'auth/user-mismatch':
      if (method === 'signIn/popup') {
        return '認証されているユーザーと異なるアカウントが選択されました';
      } else {
        return 'メールアドレスまたはパスワードが違います';
      }
    case 'auth/weak-password':
      return 'パスワードは6文字以上にしてください';
    case 'auth/wrong-password':
      return 'メールアドレスまたはパスワードが違います';
    case 'auth/popup-blocked':
      return '認証ポップアップがブロックされました。ポップアップブロックをご利用の場合は設定を解除してください';
    case 'auth/operation-not-supported-in-this-environment':
    case 'auth/auth-domain-config-required':
    case 'auth/operation-not-allowed':
    case 'auth/unauthorized-domain':
      return '現在この認証方法はご利用頂けません';
    case 'auth/requires-recent-login':
      return '認証の有効期限が切れています';
    default:
      if (method.indexOf('signIn') !== -1) {
        return '認証に失敗しました。しばらく時間をおいて再度お試しください';
      } else {
        return 'エラーが発生しました。しばらく時間をおいてお試しください';
      }
  }
}

// 認証周り
// const auth = getAuth(app);
// firestore
// const database = getFirestore(app);


// export { database, auth };
export { app, errorMessages };
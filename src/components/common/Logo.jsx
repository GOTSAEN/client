import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './logo.module.css';
export default function Logo() {
  const navigate = useNavigate();
  return (
    <h1 className={`text-center text-xl font-bold logo-font ${styles['logo-font']}`} onClick={() => navigate('/')}>
      유<span className="text-muted-foreground">애드</span>
    </h1>
  );
}

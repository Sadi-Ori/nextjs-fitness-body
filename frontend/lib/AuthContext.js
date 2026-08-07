import React, { createContext, useState, useEffect } from 'react';
import api from './api';

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
    setTimeout(() => {
      setToast({ show: false, message: '', type: 'success' });
    }, 4000);
  };

  const fetchCurrentUser = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      setUser(null);
      setLoading(false);
      return;
    }
    try {
      const res = await api.get('/users/me/');
      setUser({
        id: res.data.id,
        displayName: res.data.first_name || res.data.username,
        email: res.data.email,
        photoURL: res.data.photo_url || 'https://i.ibb.co.com/MyLkVgN0/Screenshot-2025-05-06-001159.png',
      });
    } catch (err) {
      console.error('Failed to fetch current user', err);
      localStorage.removeItem('token');
      localStorage.removeItem('refresh_token');
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCurrentUser();
  }, []);

  const LoginUser = async (email, password) => {
    setLoading(true);
    try {
      const res = await api.post('/token/', { username: email, password });
      localStorage.setItem('token', res.data.access);
      localStorage.setItem('refresh_token', res.data.refresh);
      await fetchCurrentUser();
      showToast('Successfully logged in!', 'success');
      return { success: true };
    } catch (err) {
      setLoading(false);
      const errMsg = err.response?.data?.detail || 'Invalid email or password';
      showToast(errMsg, 'error');
      return { success: false, error: errMsg };
    }
  };

  const CreateUser = async (email, password, name, photo) => {
    setLoading(true);
    try {
      await api.post('/users/register/', { email, password, name, photo_url: photo });
      showToast('Registration successful! Logging you in...', 'success');
      return await LoginUser(email, password);
    } catch (err) {
      setLoading(false);
      const errMsg = err.response?.data?.email?.[0] || err.response?.data?.detail || 'Registration failed';
      showToast(errMsg, 'error');
      return { success: false, error: errMsg };
    }
  };

  const UpdateUserProfile = async (name, photo) => {
    try {
      const res = await api.put('/users/me/', { name, photo_url: photo });
      setUser(prev => ({
        ...prev,
        displayName: res.data.name || name,
        photoURL: res.data.photo_url || photo
      }));
      showToast('Profile updated successfully!', 'success');
      return { success: true };
    } catch (err) {
      showToast('Failed to update profile', 'error');
      return { success: false };
    }
  };

  const Logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('refresh_token');
    setUser(null);
    showToast('Logged out successfully', 'info');
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        loading,
        LoginUser,
        CreateUser,
        UpdateUserProfile,
        Logout,
        showToast,
        toast
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

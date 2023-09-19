import axios from './axios';

export const registerRequest = (user) => 
axios.post(`/register`, user);

export const registerTecnicoRequest = (tecnico) => 
axios.post(`/techRegister`, tecnico);

export const loginRequest = (user) => 
axios.post(`/login`, user);

export const loginTecnicoRequest = (tecnico) => 
axios.post(`/techLogin`, tecnico);

export const verifyTokenRequest = () => 
axios.get('/verify');
const baseUrl = process.env.NODE_ENV === 'production'
? 'https://theodespoudis.netlify.app/'
: 'http://localhost:8000';

export default baseUrl;
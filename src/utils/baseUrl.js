const baseUrl = process.env.NODE_ENV === 'production'
? 'https://reton-react.hibootstrap.com' 
: 'http://localhost:8000';

export default baseUrl;
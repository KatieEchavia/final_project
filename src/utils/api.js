import axios from 'axios';

const submitPartnerForm = (payload) => {
  axios.post('http://127.0.0.1:8000/partners/', payload)
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
};


export default {
  submitPartnerForm
};
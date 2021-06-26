import React from 'React';
import axios from 'axios';

const url = "https://api.github.com/search/users";
const Authorization = 'token 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';

function ProfileService(props) {
  var promise = axios.get(`${url}`, {
    headers: {
      'Accept': 'application/vnd.github.v3+json',
      'Authorization': Authorization
    }
  });
  return promise;

}

export default ProfileService;
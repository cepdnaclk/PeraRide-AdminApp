import formurlencoded from "form-urlencoded";

class RiderApi {  
    static add(details) {
      const request = new Request('/user/register', {
        method: 'POST',
        headers: new Headers({
          'Content-Type': 'application/x-www-form-urlencoded',
          'x-auth': localStorage.getItem('jwt')
        }), 
        body: formurlencoded({rider_regNo : details.regNo,
          rider_phone: details.phoneNo,
          rider_firstName:details.fName,
          rider_lastName:details.lName,
          rider_email: details.email,
          rider_password: details.email
        })
      });
  
  
      return fetch(request).then(response => {        
        return response.json();
      }).catch(error => {
        throw error;
      });
    } 

    static getAll() {
      const request = new Request('/users', {
        method: 'GET',
        headers: new Headers({
          'x-auth': localStorage.getItem('jwt')
        })       
      });
  
      
      return fetch(request).then(response => {                 
        return response.json();
      }).catch(error => {
        throw error;
      });
    } 
  }
  
  export default RiderApi;  
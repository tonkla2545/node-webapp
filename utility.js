//utility.js

const request = require("request-promise");
const EXTERNAL_API="https://tools.ecpe.nu.ac.th/network/api/student/"; // put url
const accessToken="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC90b29scy5lY3BlLm51LmFjLnRoXC9uZXR3b3JrXC9hcGlcL2xvZ2luIiwiaWF0IjoxNjU4ODMwMjQwLCJleHAiOjE2NTg4MzM4NDAsIm5iZiI6MTY1ODgzMDI0MCwianRpIjoiTkFjZ0hINkhXYnFheUU3MSIsInN1YiI6MTcsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.5ejYYAeds1VK36ffndKg5_b7lcTmUpmepROsxecZLr8"; // put access token
const student = {
  student_id: 63367131,
  name: 'Suriyakamon Karo', 
  age: 20, 
  gender: 'male', 
  department: 'CPE'
};;


exports.findStudentbyId = function (student_id, cb) {
  //-- call external api 
          request({
            method: "GET",
            uri: EXTERNAL_API+student_id,
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        }).then((response) => {
            console.log('Sent');
            console.log({
                "request": student_id,
                "response": response
            });

           cb(response);

        }).catch((err) => {
            console.log('Error:', err.message);
            console.log({
                "Error": err.message
            });
        });
}

exports.fakeStudentbyInfo = function (student_id, cb) {

  cb(student);
}
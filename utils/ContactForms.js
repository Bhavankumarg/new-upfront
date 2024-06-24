'use client'
import React, {useState} from 'react'
import configData from '../config'
import axios from 'axios';

const ContactForms = () => {
    const [post, setPost] = useState(null);
    const [yourName, setName] = useState(null);
    const [yourEmail, setEmail] = useState(null);
    const [yourMobile, setMobile] = useState(null);
    const [yourJobtype, setJobType] = useState(null);
    const [applyfor, setApplyfor] = useState(null);
    const [yourResume, setYourResume] = useState(null);
    const [spinner, setSpinner] = useState(false);
    const [loading, setLoading] = useState(false);
    const [disable, setDisabled] = useState(false);
    const [errrname, setErrName] = useState(null);
    const [errremail, setErrEmail] = useState(null);
    const [errrmobile, setErrMobile] = useState(null);
    const [success, setSuccess] = useState(true);
    const [error, setError] = useState(false);
    const [errors, setErrors] = useState({});
    const [file, setFile] = useState(null);
    const [fileErrors, setFileErrors] = useState(false);
    const siteUrl = configData.apiDomainUrl;


    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];

        alert(selectedFile)
        
        if (selectedFile) {
          // Check file extension
          const allowedExtensions = ['pdf', 'doc', 'docx', 'rtf','txt'];
          const fileExtension = selectedFile.name.split('.').pop().toLowerCase(); 
          if (allowedExtensions.includes(fileExtension)) {
            // Valid file type
            setHideSubmitButton(false);
            setErrors('');
          } else {
            // Invalid file type
            const fieldErrors = {}
            const { field, message } = customFileErrors;
            fieldErrors[field] = message;
            setErrors(fieldErrors);
           // alert('Error: Invalid file type. Allowed types are PDF, DOC, DOCX, and RTF.');
            setHideSubmitButton(true); // Depending on your logic, you may want to hide the submit button here
          }
          
          setFile(selectedFile);
        }
        
      };
    const handleSubmit = event => {
        // 👇️ prevent page refresh
        event.preventDefault();
    };
    function createPost() {
        setSpinner(true);
        axios.post(`${siteUrl}wp-json/contact-form-7/v1/contact-forms/102/feedback`,
            {
                'your-name': { yourName },
                'your-mobile': { yourMobile },
                'your-email': { yourEmail },
                'your-jobtype': { yourJobtype },
                'applying-for': { applyfor },
                'resume': { file },
            }, {
            headers: {
                "Content-Type": 'multipart/form-data',
            }
        })
            .then((response) => {
                setPost(response.data.message);
                // setErrMessage(response.data['invalid_fields'][1]['message']);
                const msg = response.data.status;
                if (msg == 'mail_sent') {
                    setLoading(true);
                    setSpinner(false);
                    setSuccess(false);
                    setError(false);
                }
                else {
                    // setErrName(response.data['invalid_fields'][0]['message']);
                    // setErrEmail(response.data['invalid_fields'][1]['message']);
                    //setErrSubject(response.data['invalid_fields'][2]['message']);
                    setSpinner(false);
                    //setLoading(true);
                    setError(true);
                }
                console.log(response.data)
            });
    }


  return (
   <>
   <div className="bg-[#4A4A4A] py-1 px-5 mt-5 ">
              <div className=" mt-10 ">
                <p className="text-white ">
                  If you would like to explore an opportunity to work with
                  Upfront,
                </p>
                <p className="text-white">
                  please fill up this form and submit
                </p>

                {success &&  
                
                <div className="mt-5 p-5">
                    
                  <form 
                  onSubmit={handleSubmit}
                   className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    
                    <div className="mb-3">
                      <input
                        type="text"
                        className="form-select border border-gray-500 lg:w-full px-3 py-2"
                        id="fullName"
                        placeholder="*First Name"
                        name="*firstName"
                        value={yourName}
                        onChange={event => setName(event.target.value)}
                      />
                      <span className="r_error">{errrname}</span>
                    </div>
                    <div className="mb-3 col-span-3 md:col-span-1" >
                      <input
                        type="tel"
                        className="form-select border border-gray-500 lg:w-full px-3 py-2"
                        id="mobile"
                        placeholder="*Mobile Number"
                        name="phone"
                        onChange={event => setMobile(event.target.value)}
                      />
                       <span className="r_error">{errrmobile}</span>
                    </div>

                    <div className="mb-3">
                      <input
                        type="email"
                        className="form-select border border-gray-500 lg:w-full px-3 py-2"
                        id="email*"
                        placeholder="*Email"
                        name="email"
                        value={yourEmail}
                        onChange={event => setEmail(event.target.value)}
                      />
                       <span className="r_error">{errremail}</span>
                    </div>

                    <div className="mb-3 col-span-3 md:col-span-1">
                      <select
                        className="form-select border border-gray-500 text-gray-500 lg:w-full px-3 py-2"
                        id="jobtype"
                        name="jobType"
                        value={yourJobtype}
                        onChange={event => setJobType(event.target.value)}
                      >
                        <option value="">*Job Type</option>
                        <option value="Part-Time">Part-Time</option>
                        <option value="Full-Time">Full-Time</option>
                      </select>
                    </div>

                    <div className="mb-3">
                      <select
                        className="form-select border border-gray-500 text-gray-500  lg:w-full px-3 py-2"
                        id="applyfor"
                        name="Applying For"
                        value={applyfor}
                        onChange={event => setApplyfor(event.target.value)}
                      >
                        <option value="Project A">*Applying For</option>
                        <option value="Project A">Project A</option>
                        <option value="Project B">Project B</option>
                        <option value="Project C">Project C</option>
                      </select>
                    </div>

                    {/* <div className="mb-3 col-span-3 md:col-span-1">
                      <input
                        type="file"
                        className="form-select text-gray-500 bg-white actual-file-input  lg:w-full border"
                        id="resume"
                        placeholder="Attach Your Cv"
                        name="location"
                        value={yourResume}
                        onChange={event => setYourResume(event.target.value)}
                        required
                      />
                    </div> */}
                    <div class="input-group bg-white p-0">
                  <input type="file" name="resume" id="resume" class={`form-control ${errors && errors.resume ? 'is-invalid' : ''}
                    ${fileErrors ? 'is-invalid' : ''} `}
                    onChange={handleFileChange}
                    aria-describedby="inputGroupFileAddon04"
                    aria-label="Upload" />
                </div>
                    {spinner && <div className="spinner-border text-light" role="status" />}
                    <button
                      type="button" onClick={createPost} 
                      className="focus:outline-none w-44  rounded-sm text-white bg-red-500 hover:bg-red-600  font-normal text-md px-2 py-2 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                    >
                      submit
                    </button>
                  </form>
                </div>
                }
                 {loading && <h1 class="reg-success mt-4">{post}</h1>}
                 {error && <h1 class="reg-error mt-4">{post}</h1>}
              </div>
            </div>
   </>
  )
}

export default ContactForms
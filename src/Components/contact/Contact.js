import React from "react";
import { useForm } from "react-hook-form";
import "./contact.scss";

function onClose(props) {
  props.onClose && props.onClose();
};

function ContactComponent(props) {
  
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => {
    if (data != null) {
      //console.log(data);
      fetch(process.env.PUBLIC_URL + "contact.php", {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        })
      .then((response) => {
          //console.log("response", response)
          if (response.status !== 200) {
            alert("Message failed to send. Please try again.\nIf the error persists, please contact me through Linkedin");
          } else {
            alert("Message sent succesfully. Thank you.");
            onClose(props);
          }
      })
      .catch(e => {
        alert("Message failed to send. Please try again.\nIf the error persists, please contact me through Linkedin");
        console.error('Error sending ', e)
      })
    }
  };
  
  if (!props.show) {
    return null;
  }

  return (
    <div className="modal-background">
      <div className="modal-style">
        <div className="modal-header">
          Contact me!
          <span className='modal-close-btn' onClick={e => {onClose(props);}}>
            X
          </span>
        </div>
        <hr className='form-hr'/>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className='form-item'>
              <label>Name:</label>
              <input
                id="name"
                type="text"
                name="name"
                ref={register({
                  required: true
                })}
              />
              { errors.name && (
                  <label className='form-error' role="alert">
                    <span>This field is required</span>
                  </label>
                )
              }
            </div>
            <div className='form-item'>
              <label>Company:</label>
              <input
                id="company"
                type="text"
                name="company"
                ref={register()}
                />
            </div>
            <div className='form-item'>
              <label>Email:</label>
              <input
                id='email'
                type="email"
                name="email"
                ref={register({
                  required: true, 
                })}
              />
              { errors.email && (
                  <label className='form-error' role="alert">
                    <span>This field is required</span>
                  </label>
                )
              }  
            </div>
            <div className='form-item align-start'>
              <label>Message:</label>
              <textarea
                id='message'
                type="text"
                name="message"
                ref={register({
                  required: true
                })}
              />
              { errors.message && (
                  <label className='form-error' role="alert">
                    <span>This field is required</span>
                  </label>
                )
              }  
            </div>
            <input type="submit" className='btn-submit' />
      </form>
      </div>
    </div>
  );
}

export default ContactComponent;

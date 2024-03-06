import { Form } from 'formik';


import Button from "../../elements/button/button";
import Textfield from "../../elements/textfield/textfield";
const RegForm = ({ formik }) => {
  const { handleSubmit, handleChange, values, touched, errors } = formik;

  return (
    <div className="container">
      <Form className="form" onSubmit={handleSubmit}>
        <h1>sign in</h1>
        <div className="form-group">
          <label htmlFor="username">username</label>
          <Textfield
            type="text"
            id="username"
            name="username"
            placeholder="Enter username"
            value={values.username}
            onChange={handleChange}
          />
          {touched.username && errors.username && (
            <div className="error">{errors.username}</div>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <Textfield
            type="email"
            id="email"
            name="email"
            placeholder="Enter Email"
            value={values.email}
            onChange={handleChange}
          />
          {touched.email && errors.email && (
            <div className="error">{errors.email}</div>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <Textfield
            type="password"
            id="password"
            name="password"
            placeholder="Enter Password"
            value={values.password}
            onChange={handleChange}
          />
          {touched.password && errors.password && (
            <div className="error">{errors.password}</div>
          )}
        </div>
        <div className="button-group">
          <Button name="submit" />
        </div>
      </Form>
    </div>
  );
};

export default RegForm;
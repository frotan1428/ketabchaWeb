
import { Button, Form } from "react-bootstrap";
import * as Yup from "yup";
import { useFormik } from "formik";

const MyForm = () => {
 
  const initialValues = {
    firstName: "",
    lastName: "",
    phoneNumber: "",
    address: "",
    zipCode: "",
    email: "",
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required("Please enter your first name"),
    lastName: Yup.string().required("Please enter your last name"),
    phoneNumber: Yup.string()
      .required()
      .test(
        "includes_",
        "Please enter your phone number",
        (value) => value && !value.includes("_")
      ),
    address: Yup.string().required("Please enter your address"),
    zipCode: Yup.string().required("Please enter your zip code"),
    email: Yup.string().email().required("Please enter your email"),
  });

  const onSubmit = async (values) => {
   
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <Form noValidate onSubmit={formik.handleSubmit} className="text-right">
      <Form.Group className="mb-3">
        <Form.Label>First Name</Form.Label>
        <Form.Control
          type="text"
          {...formik.getFieldProps("firstName")}
          isInvalid={formik.touched.firstName && formik.errors.firstName}
          isValid={formik.touched.firstName && !formik.errors.firstName}
        />
        <Form.Control.Feedback type="invalid">
          {formik.errors.firstName}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Last Name</Form.Label>
        <Form.Control
          type="text"
          {...formik.getFieldProps("lastName")}
          isInvalid={formik.touched.lastName && formik.errors.lastName}
          isValid={formik.touched.lastName && !formik.errors.lastName}
        />
        <Form.Control.Feedback type="invalid">
          {formik.errors.lastName}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control
          type="text"

          {...formik.getFieldProps("phoneNumber")}
          isInvalid={formik.touched.phoneNumber && formik.errors.phoneNumber}
          isValid={formik.touched.phoneNumber && !formik.errors.phoneNumber}
        />
        <Form.Control.Feedback type="invalid">
          {formik.errors.phoneNumber}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Address</Form.Label>
        <Form.Control
          type="text"
          {...formik.getFieldProps("address")}
          isInvalid={formik.touched.address && formik.errors.address}
          isValid={formik.touched.address && !formik.errors.address}
        />
        <Form.Control.Feedback type="invalid">
          {formik.errors.address}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Zip Code</Form.Label>
        <Form.Control
          type="text"
          {...formik.getFieldProps("zipCode")}
          isInvalid={formik.touched.zipCode && formik.errors.zipCode}
          isValid={formik.touched.zipCode && !formik.errors.zipCode}
        />
        <Form.Control.Feedback type="invalid">
          {formik.errors.zipCode}
        </Form.Control.Feedback>
      </Form.Group>
      
      <Form.Group className="mb-3">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          {...formik.getFieldProps("email")}
          isInvalid={formik.touched.email && formik.errors.email}
          isValid={formik.touched.email && !formik.errors.email}
          disabled
        />
        <Form.Control.Feedback type="invalid">
          {formik.errors.email}
        </Form.Control.Feedback>
      </Form.Group>
      
      <Button variant="info" type="submit">
       save
      </Button>
      <Button variant="danger m-2" type="submit">
       delete
      </Button>

      <Button variant="success m-1" type="submit">
       edit
      </Button>


    </Form>
  );
};

export default MyForm;

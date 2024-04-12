import Page from "../components/Page/Page.tsx";
import FormComponent from "../components/Form/Form.tsx";
import { useParams } from "react-router-dom";

const FormPage = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <Page title={id ? "Edit the announcement" : "Create a new announcement"}>
      <FormComponent />
    </Page>
  );
};

export default FormPage;

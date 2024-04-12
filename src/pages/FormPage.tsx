import Page from "../components/Page/Page.tsx";
import { useParams } from "react-router-dom";

const FormPage = () => {
  let { id } = useParams();

  return (
    <Page title="Edit the announcement">
      <div>{id}</div>
    </Page>
  );
};

export default FormPage;

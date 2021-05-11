import GeneralInfo from "./GeneralInfo";
import EducationalInfo from "./EducationalInfo";
import WorkInfo from "./WorkInfo";

function Form() {
  return (
    <div className="formsDisplay">
      <GeneralInfo />
      <EducationalInfo />
      <WorkInfo />
    </div>
  );
}

export default Form;

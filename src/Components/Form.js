import GeneralInfo from "./GeneralInfo";
import EducationalInfo from "./EducationalInfo";
import WorkInfo from "./WorkInfo";

function Form({ personal, setPersonal }) {
  return (
    <div className="formsDisplay">
      <GeneralInfo setPersonal={setPersonal} personal={personal} />
      <EducationalInfo />
      <WorkInfo />
    </div>
  );
}

export default Form;
